import React, { useState } from "react";
// import PropTypes from 'prop-types'
import { Link, useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";

const News = (props) => {
  const [markDown, setMarkDown] = useState("# Loading article...");

  let { year, month, day, name } = useParams();

  fetch(`/posts/${year}-${month}-${day}-${name}.md`)
    .then((res) => res.text())
    .then((t) => {
        
      const d = t
        .replace(/(?<=---)([\s\S]*?)(?=---)/gi, "~~~")
        .replace("---~~~---", "---");
      setMarkDown(d);
      return t;
    })
    .catch((e) => e);

  return (
    <div>
      <div className="containerX">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-lg-7">
            <Link to="/archive">Back to archive</Link>
            <h2>
              {year}/{month}/{day} {name}
            </h2>
            <Markdown children={markDown} />

            {/* {compiler(md)} */}
          </div>
          {/* <article dangerouslySetInnerHTML={{__html: markdown}}></article> */}
        </div>
      </div>
    </div>
  );
};

News.propTypes = {};

export default News;
