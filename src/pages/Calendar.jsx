import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Button from "../components/UI/Button";

const H3 = styled.h3`
  font-size: 2em;
  margin: 0;
  padding: 0.5em 0;
`;

const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  h4 {
    margin: 0;
    font-weight: 100;
    font-size: 2em;
  }
  .content {
    padding: 1em;
  }
`;


const Calendar = (props) => {
  return (
    <div>
      <div className="containerX">
        <div className="row">
          <div className="col-xs-12">
            <h1>Calendar</h1>
            
          </div>
          <div className="col-xs-12 col-md-6">
            <h3>More coming soon!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Calendar.propTypes = {};

export default Calendar;
