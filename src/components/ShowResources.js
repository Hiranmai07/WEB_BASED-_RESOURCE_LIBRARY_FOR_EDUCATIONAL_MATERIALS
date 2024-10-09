import React from 'react';

const ShowResources = ({ resources }) => {
  return (
    <div>
      <h4>All Resources</h4>
      <ul>
        {resources.length > 0 ? (
          resources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.name}
              </a>
            </li>
          ))
        ) : (
          <li>No resources available</li>
        )}
      </ul>
    </div>
  );
};

export default ShowResources;