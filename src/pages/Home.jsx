import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Slideshow from "../components/Slideshow";
import Button from "../components/UI/Button";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import Reddit from "../assets/Reddit.svg";
import Github from "../assets/Github.svg";

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

const SocialList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  svg {
    width: 60px;
    transition: .2s ease-in-out;
    &:hover {
      fill: #CC0000;

    }
  }
  li {
    padding: 1em;
  }
`;

const Home = (props) => {
  return (
    <div>
      <div className="containerX">
        <div className="row">
          <div className="col-xs-12 col-md-6" style={{ padding: "0.5em" }}>
            <H3>What is BUILDS?</H3>

            <Card>
              <Slideshow />
              <div className="content">
                <h4>
                  BUILDS: Boston University Information Lab and Design Space
                </h4>
                <p>
                  BUILDS is an inclusive group of students, artists, hackers,
                  and organizers who believe in the do-it-yourself attitude and
                  hacker ethic.
                </p>
                <ul>
                  <li>
                    Come join our community, hang out, and be in good company!
                    We’ll welcome you with open arms regardless of what you know
                    and who you are!
                  </li>
                  <li>
                    Meetings every Wednesday at 7:00 PM
                    <span role="img" aria-label="seven'oclock emoji">
                      🕖
                    </span>
                     during the fall and spring semesters, but e-mail us if
                    you’re new to make sure!
                  </li>
                  <li>
                    BUILDS is located at
                    <a
                      href="https://goo.gl/maps/YDVvwSPXTG5MJu5n8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      111 Cummington Mall
                      <span role="img" aria-label="map emoji">
                        🗺
                      </span>
                    </a>
                    , Room B26, Boston, MA, 02215 in Boston University.
                  </li>
                </ul>
              </div>
            </Card>
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

                <Button
                  type="internal"
                  alt="Click to view our calendar page"
                  text="View All Events on Calendar"
                  link="/calendar"
                />
              </div>
            </Card>
          </div>

          <div className="col-xs-12 col-md-6" style={{ padding: "0.5em" }}>
            <H3>Want to stay updated on BUILDS events?</H3>

            <Card>
              {/* <EventImage/> */}
              <div className="content">
                <h4>Join the BUILDS mailing list</h4>
                <p>
                  We never send spam and share things that are happening in the
                  space! Sign up to stay updated!
                  <span role="img" aria-label="clock emoji">
                    ⏰
                  </span>
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
                <br/>
                <h4>Our Socials</h4>
                <SocialList>
                  <li>
                    <a
                      href="https://github.com/BUILDS-"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/bu_builds/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/buildsbu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://reddit.com/r/builds"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Reddit />
                    </a>
                  </li>
                </SocialList>
                <h4>Email</h4>
                <p>
                  Please email <a href="mailto:acm@bu.edu">acm@bu.edu</a> for
                  any further questions.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
