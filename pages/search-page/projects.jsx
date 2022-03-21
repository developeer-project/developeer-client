import React from 'react';
import { useState, useMemo } from 'react';
import Card from "../../components/search-page/projects/Card";
import ProfileCard from "../../components/search-page/projects/Test";

import styles from "../../styles/search-page/search.module.scss";
// import { prisma } from '../../prisma/db.ts';

import { PrismaClient } from "@prisma/client";

import { Pagination } from '@mantine/core';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';

const projects = ({ projects, techStacks, totalCount }) => {
      
      const [query, setQuery] = useState("");
      const [title, setTitle] = useState("");
      const [userData, setUserData] = useState(projects);
      const [userSearchData, setUserSearchData] = useState(projects);
      const [techStack, setTechStack] = useState("");

      const[currentPage, setCurrentPage] = useState(1);
      const[perPage, setPerPage] = useState(1);

      const itemsPerPage = 2; 

      // const search = () => {
      //       const newData = userData
      //       .filter(project => project.title == (title == '' ? project.title : title))
      //       // .filter(stack => stack.techStack == (techStack == '' ? stack.techStack : techStack))
      //       setUserSearchData(newData);
      // }

      // const search = async (page) => {
      //       console.log("IN HERE")
      //       const response = await (await fetch(`http://localhost:3000/api/project/search/?title=${title}&techStack=${techStack}&currPage=${page}`)).json();
      //       console.log("response is::::",response.searchedProject);
      //       setUserSearchData(response.searchedProject);

      // }
      const router = useRouter();
      const search = () => {
            router.push({
                  pathname: './search-project',
                  query: {title:title, techStack:techStack},
            });
      }

      let dropdown = techStacks.map((techStack) => (
            <option value={techStack.tech_stack}>{techStack.tech_stack}</option>
      ))

      const totalPageCount = Math.ceil(totalCount/itemsPerPage);
      const pageChange = async (page) => {
            // setCurrentPage(page)
            console.log("Page   ",page)

            const response = await (await fetch(`http://localhost:3000/api/project/?currPage=${page}`)).json();
            // console.log("PageRESponseCurrPAge   ",currentPage)
            // console.log("PageRESponseProjects   ",response.projects)

            setUserSearchData(response.projects); 
      }

      // const pagination = usePagination({total:totalPageCount, initialPage: 1, onChange: (page)=> pageChange})
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

            {/* <div className={styles.box2}>
                  {projects.filter(project => {
                        if (query === ""){
                              return project;
                        }else if(project.title.toLowerCase().includes(query.toLowerCase())){
                              return project
                        }
                  }).map((project) => ( 
                        <div >
                        <Card project={project} />
                        </div>
                  ))
                  }
                  
            </div> */}
            <div className={styles.pagination}>

            <Pagination onChange={page => pageChange(page)} total={totalPageCount} initialPage={1} siblings={1}  />
            </div>
            {/* <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={totalPageCount}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      /> */}
      {}
      </>
  )
}

export async function getServerSideProps(){
      const prisma = new PrismaClient();
      const res = await (await fetch(`http://localhost:3000/api/project/`)).json();

      const techStacks = await prisma.TechStack.findMany({
            select:{
                  tech_stack: true,
            }
      });
      return{
            props:{
                  projects:res.projects,
                  techStacks,
                  totalCount: res.totalCount,
            },
      };
}

export default projects