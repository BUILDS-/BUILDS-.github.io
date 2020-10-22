import React from "react";
// import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
import BUILDS from "./assets/BUILDS.svg";
import styled from "styled-components";

const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
      a{
        display: block;
        color: black;
        text-align: center;
        padding: 16px;
        text-decoration: none;
        transition: .2s ease-in-out background-color;
        border-radius: 10px;
        background-color: rgba(0,0,0,.1);
        &:hover {
            background-color: rgba(0,0,0,.2);
        }
      }
  }
`;

const H2 = styled.h2`
  font-size: calc(1vw + 1.5em);
  font-weight: 100;
  margin: 0;
  text-align: center;
  padding-bottom: .2em;
  `;

const Header = (props) => {
  return (
    <header>
      <div className="containerX" style={{paddingTop: "1em", paddingBottom: "1em"}}>
        <div className="row middle-xs">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <div className="row">
                <div className="col-xs-12">
              <BUILDS />
                </div>
                    <div className="col-xs-12">
                        <H2>BUILD, HACK, CREATE</H2>
                    </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4 col-lg-offset-4">
            <UL>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/calendar">Calendar</NavLink>
              </li>
            </UL>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
