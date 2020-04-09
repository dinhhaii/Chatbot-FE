import React from 'react';

const CourseDescription = ({ description }) => {
  return (
    <section id="description" className="bg-white">
      <h2>Description</h2>
      <p>{description}</p>
    </section>
  );
};

export default CourseDescription;
