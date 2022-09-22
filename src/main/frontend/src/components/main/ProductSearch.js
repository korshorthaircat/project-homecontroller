import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const ProductSearch = () => {
  const [searchData, setSearchData] = React.useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "http://localhost:8080/api/main/getSearchProducts" + params.word
      );
      console.log("////////////", result.data.result);
      setSearchData(result);
    }
    fetchData();
  }, []);

  return <div></div>;
};

export default ProductSearch;
