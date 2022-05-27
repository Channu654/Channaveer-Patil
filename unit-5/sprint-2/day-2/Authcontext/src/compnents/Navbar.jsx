import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Styles/Nav.module.css";
import { Box, Switch } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AuthContext } from "../contexts/AuthProvider";
function Navbar() {
  const { toggleTheme } = useContext(AuthContext);
  const { isState } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(toggleTheme);
  return (
    <div className={styles.navmain}>
      {isState === "light" ? (
        <Box
          as="button"
          borderRadius="md"
       
          bg="white"
          p={1}
          h="100%"
        >
          {" "}
          <MoonIcon onClick={toggleTheme} color="gray" w={40} h={50} />
        </Box>
      ) : (
        <SunIcon onClick={toggleTheme} color="whight" w={40} h={50} />
      )}

      <button colorScheme="blue" onClick={() => navigate("/SignUpForm")}>
        Sign Up
      </button>
      <button colorScheme="blue" onClick={() => navigate("/LoginFrom")}>
        Login
      </button>
    </div>
  );
}

export default Navbar;
