import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const UL = styled.ul`
//   background: red;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  img {
      border-radius: 50%;
  }
  li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px;
  }
`;

const OfficerList = ({ list }) => {
  return (
    <UL>
      {list.map((officer) => (
        <li key={officer.name + officer.role}>
          <img width="125px" src={`/assets/images/officers/${officer.img}`} alt={`Portrait of ${officer.name}`} />
          <p style={{marginBottom: "0"}}>
            {officer.name}
          </p>
          <p style={{margin: "0"}}>(<em>{officer.role}</em>)</p>
        </li>
      ))}
    </UL>
  );
};

OfficerList.propTypes = {
  list: PropTypes.array,
};

export default OfficerList;
