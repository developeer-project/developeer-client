/// creatable multiselect
import { useState } from "react";
import { MultiSelect } from "@mantine/core";
// import { prisma } from "../../lib/prisma";

export default function InterestSelection(props) {
  // const [data, setData] = useState(["React", "Angular", "Svelte", "Vue"]);
  const [data, setData] = useState(props.arr);

  
  return (
    <MultiSelect
      label="Interests"
      data={data}
      {...props}
      placeholder="Select interests"
      searchable
      creatable
      getCreateLabel={(query) => `+ Create ${query}`}
      onCreate={(query) => setData((current) => [...current, query])}
    />
  );
}