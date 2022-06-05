import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe.js";
import SearchBox from "./components/SearchBox.js";

function App() {
  const APP_ID = "21ef2a2f";
  const APP_KEY = "243102e8fe47e475e770a71919b94e07";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  function getSearchVal(e) {
    setSearch(e.target.value);

  }
  function onSubmit(e) {
    e.preventDefault();
    if (search == '') {
      alert('Recipe Not Found')
    }
    setQuery(search);
  }

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {

    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setLoading(true)
    const data = await res.json();
    setRecipe(data.hits);
    setLoading(false)
  };
  return (
    <>
      <SearchBox
        getSearchVal={getSearchVal}
        search={search}
        onSubmit={onSubmit}
      />

      <Recipe data={recipe} loading={loading} />

    </>
  );
}

export default App;
