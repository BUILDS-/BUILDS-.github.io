import React from "react";
// import PropTypes from 'prop-types'
import OfficerList from "../components/OfficerList";

const BUILDSOfficers = [{
    name: "Dominic Maglione",
    role: "President",
    img: "DominicMaglione.jpeg"
},
{
    name: "Phillip Tran",
    role: "Vice President",
    img: "PhillipTran.jpeg"
},
{
    name: "Phil Ledoit",
    role: "Treasurer",
    img: "PhilLedoit.jpeg"
},
{
    name: "Vineet Raju",
    role: "Secretary",
    img: "VineetRaju.jpeg"
},
{
    name: "Daniel Melchor",
    role: "Project Manager",
    img: "DanielMelchor.jpeg"
}];

const About = (props) => {
  return (
    <div>
      <div className="containerX">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <h2>About BUILDS</h2>
            <p>
              BUILDS is an inclusive group of students, artists, hackers, and
              organizers who believe in the do-it-yourself attitude and hacker
              ethic.
            </p>
            <h3>
              <em>What is hacking?</em>
            </h3>
            <p>
              The idea of hacking is learning and building upon existing ideas
              and reinventing systems.
            </p>
            <p>
              Think of hacking as the opportunity to take things apart, fix, or
              improve upon those ideas or systems to learn and understand how
              they work.
            </p>
            <p>
              No matter who you are, you can create art and something inspiring
              on a computer, electronics, and anything that you put your mind
              to.
            </p>
            <p>
              If you feel strongly about an idea or want to learn about
              something, show your enthusiasm, be bold, and you’ll find people
              who share your passion of discovery and learning here at BUILDS!
            </p>

            <h3>
              <em>The philosophy of the hacker ethic</em>
            </h3>
            <ul>
              <li>Figure things out.</li>
              <li>Improve what already exists.</li>
              <li>Share the knowledge!</li>
              <li>Mistrust authority.</li>
              <li>Promote decentralization.</li>
            </ul>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-8">
            <h2>Current BUILDS Officers</h2>
            <OfficerList list={BUILDSOfficers}/>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <h2>About 0xBU</h2>
            <img
              src="/assets/images/0xBU_logo.png"
              alt="0xBU Logo"
              width="100%"
            />
            <p>
              0XBU is apart of BUILDS, and is run by BUILDS members. It is not
              currently active, but it was mainly a CTF club. If interested in
              restarting it back up, please reach out to a BUILDS officer. More
              info about 0xBU is on the
              <a
                href="https://0xbu.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="0xBU Website"
              >
                0xBU website
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
