import { Input } from "@mantine/core";

function SearchBar({ val, updateFn }) {
  return (
    <Input
      value={val}
      onChange={(e) => updateFn(e.target.value)}
      placeholder="Search by domain, tech or region"
      radius="md"
      size="lg"
      width="full"
    />
  );
}

export default SearchBar;
