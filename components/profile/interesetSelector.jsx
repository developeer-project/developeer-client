/// creatable multiselect
import { useState } from "react";
import { MultiSelect } from "@mantine/core";

export default function InterestSelection(props) {
  const [data, setData] = useState(["React", "Angular", "Svelte", "Vue"]);

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
