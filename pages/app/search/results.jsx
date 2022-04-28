import { TextInput, Text, Select, Paper } from "@mantine/core";
import { useState, useEffect } from "react";
import { dummyData } from "../../../lib/utils/testobj";
import Card from "../../../components/search-page/projects/Card";
import { ProfileCard } from "../../../components/ProfileCard";
import styles from "../../../styles/results.module.scss";
import { Car } from "tabler-icons-react";
import axios from "axios";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";



const resultsPage = (props) => {
  const {
    searchRes,
    qryData: { qryFor, qryText, qryTechStack, qrypage },
    tech_stack,
    // searchCount,
    data
  } = props;

  const [is_profile, setIs_profile] = useState(true);
  const [searchQry, setSearchQry] = useState(qryText);
  const [searchFor, setSearchFor] = useState(qryFor);
  const [searchTechStack, setSearchTechStack] = useState(qryTechStack);

  const router = useRouter();

  const handleSearch = () => {
    console.log("do something and tehn push");
    router.push({
      pathname: "/app/search/results",
      query: {
        qryText: searchQry,
        qryFor: searchFor,
        qryTechStack: searchTechStack,
      },
    });
  };
  let CardDisplay;
  if (searchFor === 'profiles'){
    // setIs_profile(true);
    CardDisplay = searchRes.map((project) => (
      <div style={{width:"400px"}}>

      <ProfileCard user = {project}/>
      </div>
    ))
    console.log("In profiles");
    // CardDisplay = <ProfileCard/>
    
  }
  
  if (searchFor === 'projects'){
    // setIs_profile(false);
    CardDisplay = searchRes.map((project) => (
      <Card project = {project}/>
    ))
    

  }

   
  return (
    <div className={styles.page__root}>
      <div className={styles.options__container}>
        <div className={styles.option__heading}>
          <Text weight="500" size="md">
            Search Peers
          </Text>
        </div>
        <TextInput
          placeholder="Enter"
          radius="md"
          size="md"
          value={searchQry}
          onChange={(e) => setSearchQry(e.currentTarget.value)}
        />
        <Select
          placeholder="Pick one"
          value={searchFor}
          onChange={setSearchFor}
          size="md"
          radius="md"
          data={[
            // { value: "domain", label: "Domain" },
            { value: "projects", label: "Projects" },
            { value: "profiles", label: "Profiles" },
          ]}
        />
        <Select
            value={searchTechStack}
            onChange={setSearchTechStack}
            placeholder= "Search Skills/Tech Stack"
            size="md"
            width="300"
            data={tech_stack}
        />

        <Button onClick={handleSearch} size="lg">
            Search
        </Button>
      </div>
      <div className={styles.results__container}>
        <h3>Showing results</h3>
        <div className={styles.results_data__wrap}>
          {/* {searchRes.length !== 0 ? searchRes.map((project) => (
          <Card project = {project}/>
        )) : "No results found"} */}
        {CardDisplay}          
        </div>
      </div>
    </div>
  );
};

// function Demo() {
//   return (
//     <div style={{ width: "240px" }}>
//       {/* <Paper shadow="md" radius="md" p="md">
//         <Text>Paper is the most basic ui component</Text>
//         <Text>
//           Use it to create cards, dropdowns, modals and other components that
//           require background with shadow
//         </Text>
//       </Paper> */}

//     </div>
//   );
// }

export async function getServerSideProps(ctx) {
  // Fetch data from external API
  console.log("CTX-QUERY:::",ctx.query);
  const { qryText, qryFor, qryTechStack, qrypage, qrySkill } = ctx.query;

  if (qryFor == 'projects'){
    const res = await axios.get(`http://localhost:3000/api/project/search/`,{
        
        params:{
          title: qryText,
          techStack: qryTechStack || "",
          currPage: qrypage,
        }
      }
    )
    const tech_stack = await axios.get(`${process.env.NEXTAUTH_URL}/api/getTechStack/ `)
    const tech_stack_data = tech_stack.data
    const arr_techStack = []
    for(let i=0; i<tech_stack_data.length; i++){
      arr_techStack.push(tech_stack_data[i].tech_stack);
    }
    console.log("RES OOf project::", res.data)

    return {
      props: {
        searchRes: res.data['searchedProject'],
        qryData: {
          qryText,
          qryFor,
          qryTechStack: qryTechStack || "",
          qrypage: qrypage || "",
        },
        tech_stack: arr_techStack,
        // searchCount: 22,
      },
    };
  }

  if (qryFor === 'profiles'){
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/user/search/`,{
        
      params:{
        title: qryText,
        skill: qryTechStack || "",
        currPage: qrypage || "",
      }
    }
  )
  const tech_stack = await axios.get(`${process.env.NEXTAUTH_URL}/api/getTechStack/ `)
  const tech_stack_data = tech_stack.data
  const arr_techStack = []
  for(let i=0; i<tech_stack_data.length; i++){
    arr_techStack.push(tech_stack_data[i].tech_stack);
  }
  console.log("RES OOf profile::", arr_techStack)

  return {
    props: {
      searchRes: res.data['searchedUsers'],
      qryData: {
        qryText,
        qryFor,
        qryTechStack: qryTechStack || "",
        qrypage: qrypage || "",
      },
      tech_stack: arr_techStack,
    },
  };
  }
  //   const res = await fetch(`https://.../data`);
  // const res = {
  //  data:dummyData,
  // };
  //   const data = res.json()

  // Pass data to the page via props
  // return {
  //   props: {
  //     searchRes: res,
  //     qryData: {
  //       qryText,
  //       qryFor,
  //     },
  //     // searchCount: 22,
  //   },
  // };
}

export default resultsPage;
