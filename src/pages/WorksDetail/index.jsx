import React from 'react';
import Showdown from 'showdown';
import projects from 'data/projects';
import { useParams } from 'react-router';

const WorksDetail = () => {
  const { worksSlug } = useParams()
  const currentProject = projects.find( project => project.slug === worksSlug)
  
  const converter = new Showdown.Converter();
  const title = converter.makeHtml(currentProject.title)
  const content = converter.makeHtml(currentProject.content)

  function createMarkup(value) {
    return {__html: value};
  }
  
  function myComponent(value) {
    return <div dangerouslySetInnerHTML={createMarkup(value)} />;
  }

  return (
    <div>
      {myComponent(title)}
      {myComponent(content)}
    </div>
  );
};

export default WorksDetail;