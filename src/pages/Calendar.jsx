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
          <div className="col-xs-12 col-md-6" style={{ padding: "0.5em" }}>
            <H3>Next Upcoming Event</H3>

            <Card>
              {/* <EventImage/> */}
              <div className="content">
                <h4>
                  BUILDS Elections by mid-November!
                  <span role="img" aria-label="voting emoji">
                    🗳
                  </span>
                </h4>
                <p>
                  BUILDS is having an elections to vote in the next group of
                  officers that will run the club. Please check back here soon
                  for more information. Be sure to sign up for our mailing list
                  for updates, too!
                </p>

                <form
                  action="//builds.us14.list-manage.com/subscribe/post?u=48eeff7657509db01b37d0c9b&amp;id=c7c2160530"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  noValidate=""
                >
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <input
                      style={{
                        padding: "1em",
                        borderRadius: "20px",
                        border: "none",
                        marginRight: "5px",
                      }}
                      type="email"
                      name="EMAIL"
                      placeholder="Enter Email"
                      required=""
                    />
                    <div style={{ display: "none" }} aria-hidden="true">
                      <input
                        type="text"
                        name="b_48eeff7657509db01b37d0c9b_c7c2160530"
                        tabIndex="-1"
                      />
                    </div>
                    <Button
                      type="action"
                      alt="Sign up for our mailing list"
                      text="Sign Up"
                      action={() => console.log("hi")}
                    />
                  </div>
                </form>
              </div>
            </Card>
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
