import { Select } from "@mantine/core";
import { Button } from "@mantine/core";
import { useInputState } from "@mantine/hooks";

import SearchBar from "../../components/search-page/SearchBar";

const app = () => {
  const [searchQuery, setSearchQuery] = useInputState("");
  const [searchType, setSearchType] = useInputState("domain");

  return (
    <div className="root_container">
      <div className="search_wrap">
        <center>
          <h3>Search among 100k developers.</h3>
          <div className="bar_container">
            <SearchBar val={searchQuery} updateFn={setSearchQuery} />
          </div>
          <div className="search_btns">
            <div className="search_dd">
              <Select
                value={searchType}
                onChange={setSearchType}
                placeholder="Filter by"
                size="md"
                width="300"
                data={[
                  { value: "domain", label: "Domain" },
                  { value: "tech", label: "Tech" },
                  { value: "region", label: "Region" },
                ]}
              />
            </div>
            <div className="search_btn">
              <Button
                onClick={(e) => console.log(searchQuery, searchType)}
                size="lg">
                Search
              </Button>
            </div>
          </div>
        </center>
      </div>

      <style jsx>{`
        h3 {
          font-size: 3rem;
          font-weight: 600;
          line-height: 1;
        }

        .root_container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
        }
        .search_wrap {
          width: 40%;
          min-width: 400px;
        }
        .search_btns {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .search_dd {
          width: 180px;
        }
        .bar_container {
          margin: 1.2rem 0;
        }
      `}</style>
    </div>
  );
};

export default app;
