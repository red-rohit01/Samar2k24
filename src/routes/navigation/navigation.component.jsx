import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Burger from "./burger.component";
import RightNav from "./rightNav.component";
import Footer from "../../Components/footer/footer.component";
import "./navigation.component.css";

import LandingLoader from "../../Components/animationPage/landingLoader.component";

const Nav = styled.nav`
  height: 70px;
  border: 2px solid black;
  border-radius: 30px;
  background: #e5a022 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: space-between;
  background: rgb(255 255 255 / 18%);
  box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);

  @media (max-width: 800px) {
    position: absolute;
  }
`;

const NavDiv = styled.div`
  margin: 50px;

  @media (max-width: 800px) {
    margin: 0px;
  }
`;

const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
`;

function Navigation() {
  const [open, setOpen] = useState(false);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LandingLoader isLoading={isLoading} />
      ) : (
        <BodyDiv>
          <NavDiv>
            <Burger open={open} setOpen={setOpen} />
            <Nav>
              <RightNav open={open} setOpen={setOpen} />
            </Nav>
          </NavDiv>
          <Outlet />
          <Footer />
        </BodyDiv>
      )}
    </>
  );
}

export default Navigation;
