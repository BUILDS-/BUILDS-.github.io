import React from "react";
// import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
import BU from "./assets/BU.svg";
import styled from "styled-components";

const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-bottom: 1em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  li {
    a {
      display: block;
      color: black;
      text-align: left;
      padding: 16px 0;
      text-decoration: none;
      transition: 0.2s ease-in-out background-color;
      border-radius: 10px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Footer = (props) => {
  return (
    <footer style={{marginTop: "2em"}}>
      <div className="containerX" style={{backgroundColor: "rgba(0,0,0,.05)", paddingTop: "1em"}}>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div style={{ maxWidth: "100px" }}>
              <BU />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
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
              <li>
                <NavLink to="/archive">Archive</NavLink>
              </li>
              <li>
                <NavLink to="/acknowledgements">Acknowledgements</NavLink>
              </li>
            </UL>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(0,0,0,.1)" }}>
        <div className="containerX">
          <div className="row">
            <div className="col-xs-12">
              <p>&#169; {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
