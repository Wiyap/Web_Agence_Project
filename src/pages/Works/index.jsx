import React from 'react';
import Showdown from 'showdown';
import projects from 'data/projects';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkLightContext } from 'context/DarkLightContext';

const Works = () => {
  const converter = new Showdown.Converter();
  const { darkLight } = useContext(DarkLightContext)

  function createMarkup(value) {
    return {__html: value};
  }
  
  function myComponent(value) {
    return <div dangerouslySetInnerHTML={createMarkup(value)} />;
  }
  
  return (
    <div className="row">
      {projects.map((project) => 
        <div className={darkLight? "card col-4 bg-light" : "card col-4 bg-secondary"}>
          <div className="card-body">
            <div className="card-title">{myComponent(converter.makeHtml(project.title))}</div>
            <div className="card-text">{myComponent(converter.makeHtml(project.content))}</div>
            <Link to={`/works/${project.slug}`} className="card-link" > Show project </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;