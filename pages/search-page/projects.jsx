import React from 'react';
import { useState } from 'react';
import Card from "../../components/search-page/projects/Card";
import ProfileCard from "../../components/search-page/projects/Test";

import styles from "../../styles/search-page/search.module.scss";
// import { prisma } from '../../prisma/db.ts';

import { PrismaClient } from "@prisma/client";

const projects = ({ projects, techStacks }) => {
      
      const [query, setQuery] = useState("");
      const [title, setTitle] = useState("");
      const [userData, setUserData] = useState(projects);
      const [userSearchData, setUserSearchData] = useState(projects);
      const [techStack, setTechStack] = useState("");

      // const search = () => {
      //       const newData = userData
      //       .filter(project => project.title == (title == '' ? project.title : title))
      //       // .filter(stack => stack.techStack == (techStack == '' ? stack.techStack : techStack))
      //       setUserSearchData(newData);
      // }

      const search = async () => {
            console.log("IN HERE")
            const response = await (await fetch(`http://localhost:3000/api/project/search/?title=${title}&techStack=${techStack}`)).json();
            console.log("response is::::",response.searchedProject);
            setUserSearchData(response.searchedProject);

      }

  return (
      <>
            <div className={styles.searchBar}>
                  <input placeholder='Query' onChange={(e) => setTitle(e.target.value)}/>
                  
                  <button type="submit" onClick={() => search()}>Search</button>
                  <select onChange={(e) => setTechStack(e.target.value)}>
                        {techStacks.map((techStack) => (
                              <option value={techStack.tech_stack}>{techStack.tech_stack}</option>
                        ))}
                  </select>
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
            
      </>
  )
}

export async function getServerSideProps(){
      const prisma = new PrismaClient();
      const res = await (await fetch("http://localhost:3000/api/project/")).json();
      // const response = await (await fetch(`http://localhost:3000/api/project/search/?title=${title}&techStack=${techStack}`)).json();

      const techStacks = await prisma.TechStack.findMany({
            select:{
                  tech_stack: true,
            }
      });
      return{
            props:{
                  projects:res.projects,
                  techStacks,
                  // searchedProject: response.projects,
            },
      };
}

export default projects