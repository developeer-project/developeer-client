import React, { useState } from "react";
import ProjectForm from "../../../components/profile/projectForm";

import styles from "../../../styles/search-page/search.module.scss";
// import { prisma } from '../../prisma/db.ts';

import { PrismaClient } from "@prisma/client";

import { Pagination } from "@mantine/core";
import { useRouter } from "next/router";
import ProjectCard from "../../../components/search-page/projects/Card";

const projects = ({ projects, techStacks, totalCount }) => {
  const itemsPerPage = 2;
  const router = useRouter();
  const totalPageCount = Math.ceil(totalCount / itemsPerPage);

  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [userData, setUserData] = useState(projects);
  const [userSearchData, setUserSearchData] = useState(projects);
  const [techStack, setTechStack] = useState("");

  const search = () => {
    router.push({
      pathname: "./search-project",
      query: { title: title, techStack: techStack },
    });
  };

  const pageChange = async (page) => {
    const response = await (
      await fetch(`${process.env.NEXTAUTH_URL}/api/project/?currPage=${page}`)
    ).json();
    setUserSearchData(response.projects);
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

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const res = await (await fetch(`${process.env.NEXTAUTH_URL}/api/project/`)).json();

  const techStacks = await prisma.TechStack.findMany({
    select: {
      tech_stack: true,
    },
  });
  console.log(techStacks)
  return {
    props: {
      projects: res.projects,
      techStacks,
      totalCount: res.totalCount,
    },
  };
}

export default projects;
