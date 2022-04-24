import React, { useState } from "react";
import ProjectCard from "../../../components/search-page/projects/Card";
import styles from "../../../styles/search-page/search.module.scss";

import { PrismaClient } from "@prisma/client";

import { Pagination } from "@mantine/core";

const searchProjects = ({ projects, techStacks, totalCount }) => {
  const itemsPerPage = 2;

  const [title, setTitle] = useState("");
  const [userData, setUserData] = useState(projects);
  const [userSearchData, setUserSearchData] = useState(projects);
  const [techStack, setTechStack] = useState("");
  const [totalPageCount, setTotalPageCount] = useState(
    Math.ceil(totalCount / itemsPerPage)
  );

  const search = async (page) => {
    const response = await (
      await fetch(
        `${process.env.NEXTAUTH_URL}/api/project/search/?title=${title}&techStack=${techStack}&currPage=${page}`
      )
    ).json();
    setUserSearchData(response.searchedProject);
    setTotalPageCount(Math.ceil(response.totalCount / itemsPerPage));
  };

  const pageChange = async (page) => {
    const response = await (
      await fetch(
        `${process.env.NEXTAUTH_URL}/api/project/search/?title=${title}&techStack=${techStack}&currPage=${page}`
      )
    ).json();
    setUserSearchData(response.searchedProject);
  };

  let dropdown = techStacks.map((techStack) => (
    <option value={techStack.tech_stack}>{techStack.tech_stack}</option>
  ));

  return (
    <>
      <div className={styles.searchBar}>
        <select onChange={(e) => setTechStack(e.target.value)}>
          <option value=""></option>
          {dropdown}
        </select>
        <input placeholder="Query" onChange={(e) => setTitle(e.target.value)} />
        <button type="submit" onClick={() => search()}>
          Search
        </button>
      </div>
      <div className={styles.box2}>
        {userSearchData.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>

      <div className={styles.pagination}>
        <Pagination
          onChange={(page) => pageChange(page)}
          total={totalPageCount}
          initialPage={1}
          siblings={1}
        />
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const prisma = new PrismaClient();
  const res = await (
    await fetch(
      `${process.env.NEXTAUTH_URL}/api/project/search/?title=${query.title}&techStack=${query.techStack}&currPage=${query.page}`
    )
  ).json();

  const techStacks = await prisma.TechStack.findMany({
    select: {
      tech_stack: true,
    },
  });

  return {
    props: {
      projects: res.searchedProject,
      techStacks,
      totalCount: res.totalCount,
    },
  };
}

export default searchProjects;
