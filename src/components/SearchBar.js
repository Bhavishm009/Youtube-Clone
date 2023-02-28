import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [search, setSearch] = useState("");
   

  let navigate = useNavigate()
  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      navigate(`/search/${search}`);

      setSearch('');
    }
  };

  return (
    <>
      <Paper
        component="form"
        onSubmit={onhandleSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px", color: "red" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
