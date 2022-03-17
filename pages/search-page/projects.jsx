import React from 'react';
import { useState } from 'react';
import Card from "../../components/search-page/projects/Card";
import ProfileCard from "../../components/search-page/projects/Test";

import styles from "../../styles/search-page/search.module.scss";

const projects = ({ projects }) => {
      
      const [query, setQuery] = useState("");
      const [title, setTitle] = useState("");
      const [userData, setUserData] = useState(projects);
      const [userSearchData, setUserSearchData] = useState(projects);
      // const [projects, setProjects] = useState(projects);
      const search = () => {
            const newData = userData.filter(project => project.title == (title == '' ? project.title : title))
            setUserSearchData(newData);
      }

  return (
      <>
            <div className={styles.searchBar}>
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
            
      </>
  )
}

export async function getServerSideProps(){

      const res = await (await fetch("http://localhost:3000/api/project/")).json();
      // const projects = await res.json();
      // console.log(res.projects)

      // console.log("get static props",projects)
      return{
            props:{
                  // projects: data,
                  projects:res.projects,
            },
      };
}

export default projects