import React, { useState } from 'react';
import UserProfileCard from "../../components/search-page/profiles/UserProfileCard";

import { PrismaClient } from "@prisma/client";
import styles from "../../styles/search-page/search.module.scss";
import { Pagination } from '@mantine/core';

const profiles = ({ users, skills }) => {

  const [title, setTitle] = useState("");
  const [userData, setUserData] = useState(users);
  const [userSearchData, setUserSearchData] = useState(users);
  const [techStack, setTechStack] = useState("");



  let dropdown_skills = skills.map((skill) => (
    <option value={skill.skill}> {skill.skill} </option>
  )) 
  return (
    <>
        <div className={styles.searchBar}>
        <select onChange={(e) => setTechStack(e.target.value)}>
              <option value="">
              </option>
              {dropdown_skills}
        </select>
        <input placeholder='Query' onChange={(e) => setTitle(e.target.value)}/>
        
        <button type="submit" onClick={() => search()}>Search</button>
        </div>
        <div className={styles.box2} >
              {userSearchData.map((users) => (
                    <UserProfileCard users={users}/>
                    ))}
        </div>

        {/* <div className={styles.pagination}>
          <Pagination onChange={page => pageChange(page)} total={totalPageCount} initialPage={1} siblings={1}  />
        </div> */}
    </>
  )
}


export async function getServerSideProps(){
  const prisma = new PrismaClient();
  const res = await (await fetch(`http://localhost:3000/api/user/`)).json();
  console.log("RES   ",res.users[0]['skills'])
  const skills = await prisma.Skills.findMany({
        select:{
              skill: true,
        }
  });
  console.log(skills)
  return{
        props:{
              users:res.users,
              skills,
              // totalCount: res.totalCount,
        },
  };
}

export default profiles