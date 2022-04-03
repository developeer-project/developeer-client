import React, { useState} from 'react';
import UserProfileCard from "../../components/search-page/profiles/UserProfileCard";

import styles from "../../styles/search-page/search.module.scss";


import { PrismaClient } from "@prisma/client";

import { Pagination } from '@mantine/core';


const searchUsers = ({ users, skills, totalCount }) => {
      
      const itemsPerPage = 2;

      const [title, setTitle] = useState("");
      const [userData, setUserData] = useState(users);
      const [userSearchData, setUserSearchData] = useState(users);
      const [skill, setSkill] = useState("");
      const [totalPageCount, setTotalPageCount] = useState(Math.ceil(totalCount/itemsPerPage));

       

      const search = async (page) => {
            const response = await (await fetch(`http://localhost:3000/api/user/search/?title=${title}&skill=${skill}&currPage=${page}`)).json();
            setUserSearchData(response.searchedUsers);
            setTotalPageCount(Math.ceil(response.totalCount/itemsPerPage));

      }

      const pageChange = async (page) => {
            const response = await (await fetch(`http://localhost:3000/api/user/search/?title=${title}&skill=${skill}&currPage=${page}`)).json();
            setUserSearchData(response.searchedUsers); 
      }

      let dropdown_skills = skills.map((skill) => (
            <option value={skill.skill}> {skill.skill} </option>
      )) 

  return (
      <>
            <div className={styles.searchBar}>
                  <select onChange={(e) => setSkill(e.target.value)}>
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

            <div className={styles.pagination}>

            <Pagination onChange={page => pageChange(page)} total={totalPageCount} initialPage={1} siblings={1}  />
            </div>
      </>
  )
}

export async function getServerSideProps({query}){
      const prisma = new PrismaClient();
      const res = await (await fetch(`http://localhost:3000/api/user/search/?title=${query.title}&skill=${query.skill}&currPage=${query.page}`)).json();
      const skills = await prisma.Skills.findMany({
            select:{
                  skill: true,
            }
      });

      return{
            props:{
                  users:res.searchedUsers,
                  skills,
                  totalCount: res.totalCount,
            },
      };
}

export default searchUsers;