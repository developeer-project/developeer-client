import React from 'react';

import Card from "../../components/search-page/projects/Card";
import ProfileCard from "../../components/search-page/projects/Test";

import styles from "../../styles/search-page/search.module.scss";

const projects = ({ projects }) => {
      
  return (
    <div className={styles.box2} >
          {projects.map((project) => (
                <Card project={project}/>
            ))}
          {/* <ProfileCard/> */}

    </div>
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