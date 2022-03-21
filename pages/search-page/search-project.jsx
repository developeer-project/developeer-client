import React from 'react';
import { useState, useMemo } from 'react';
import Card from "../../components/search-page/projects/Card";

import styles from "../../styles/search-page/search.module.scss";


import { PrismaClient } from "@prisma/client";

import { Pagination } from '@mantine/core';
import { useRouter } from 'next/router';


const searchProjects = ({ projects, techStacks, totalCount }) => {
      
      const itemsPerPage = 2;

      const [title, setTitle] = useState("");
      const [userData, setUserData] = useState(projects);
      const [userSearchData, setUserSearchData] = useState(projects);
      const [techStack, setTechStack] = useState("");
      const [totalPageCount, setTotalPageCount] = useState(Math.ceil(totalCount/itemsPerPage));

       

      const search = async (page) => {
            console.log("IN HERE")
            const response = await (await fetch(`http://localhost:3000/api/project/search/?title=${title}&techStack=${techStack}&currPage=${page}`)).json();
            console.log("response is::::",response.searchedProject);
            console.log("response is::::",response.totalCount);
            setUserSearchData(response.searchedProject);
            setTotalPageCount(Math.ceil(response.totalCount/itemsPerPage));

      }

      let dropdown = techStacks.map((techStack) => (
            <option value={techStack.tech_stack}>{techStack.tech_stack}</option>
      ))

      // const totalPageCount = Math.ceil(totalCount/itemsPerPage);
      const pageChange = async (page) => {
            console.log("Page   ",page)

            const response = await (await fetch(`http://localhost:3000/api/project/search/?title=${title}&techStack=${techStack}&currPage=${page}`)).json();

            setUserSearchData(response.searchedProject); 
      }

  return (
      <>
            <div className={styles.searchBar}>
                  <select onChange={(e) => setTechStack(e.target.value)}>
                        <option value="">
                        </option>
                        {dropdown}
                  </select>
                  <input placeholder='Query' onChange={(e) => setTitle(e.target.value)}/>
                  
                  <button type="submit" onClick={() => search()}>Search</button>
            </div>
            <div className={styles.box2} >
                  {userSearchData.map((project) => (
                        <Card project={project}/>
                        ))}
            </div>

            <div className={styles.pagination}>

            <Pagination onChange={page => pageChange(page)} total={totalPageCount} initialPage={1} siblings={1}  />
            </div>
      </>
  )
}

export async function getServerSideProps({query}){
      const prisma = new PrismaClient();
      const res = await (await fetch(`http://localhost:3000/api/project/search/?title=${query.title}&techStack=${query.techStack}&currPage=${query.page}`)).json();

      const techStacks = await prisma.TechStack.findMany({
            select:{
                  tech_stack: true,
            }
      });
      // const router = useRouter();
      // console.log("QUERY:: ",router.query)
      console.log("QUERYR  ",query.title)
      console.log("QUERYR  ",query.techStack)
      console.log("RESSS  ",res.searchedProject)
      console.log("RESSS  ",res.totalCount)

      


      return{
            props:{
                  projects:res.searchedProject,
                  techStacks,
                  totalCount: res.totalCount,
            },
      };
}

export default searchProjects;