import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./index";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "static",
        background: "#000",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ alignItems: "center", display: "flex" }}>
        <img src={logo} alt="logo" height={45} />
        <p
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            color: "white",
            marginLeft: "5px",
          }}
        >
          YouTube
        </p>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
