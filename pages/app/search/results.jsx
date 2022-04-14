import { TextInput, Text, Select, Paper } from "@mantine/core";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

import styles from "../../../styles/results.module.scss";

const resultsPage = (props) => {
  const {
    searchRes,
    qryData: { qryFor, qryText },
    searchCount,
  } = props;

  const [searchQry, setSearchQry] = useState(qryText);
  const [searchFor, setSearchFor] = useState(qryFor);

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
            { value: "domain", label: "Domain" },
            { value: "tech", label: "Tech" },
            { value: "region", label: "Region" },
            { value: "vue", label: "Vue" },
          ]}
        />
      </div>
      <div className={styles.results__container}>
        <h3>Showing results</h3>
        <div className={styles.results_data__wrap}>
          {[...Array(searchCount)].map((s) => (
            <Demo key={s} />
          ))}
        </div>
      </div>
    </div>
  );
};

function Demo() {
  return (
    <div style={{ width: "240px" }}>
      <Paper shadow="md" radius="md" p="md">
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that
          require background with shadow
        </Text>
      </Paper>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  // Fetch data from external API
  console.log(ctx.query);
  const { qryText, qryFor } = ctx.query;
  //   const res = await fetch(`https://.../data`);
  const res = {
    message: "hello world",
    results: [
      {
        data: "hello world",
      },
    ],
  };
  //   const data = res.json()

  // Pass data to the page via props
  return {
    props: {
      searchRes: res,
      qryData: {
        qryText,
        qryFor,
      },
      searchCount: 22,
    },
  };
}

export default resultsPage;
