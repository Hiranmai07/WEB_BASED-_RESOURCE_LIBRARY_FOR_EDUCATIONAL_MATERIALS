import React from 'react';

const ResourceList = ({ resources }) => {
  return (
    <div>
      <h3>Available Resources:</h3>
      <ul>
        {resources.length > 0 ? (
          resources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))
        ) : (
          <li>No resources available.</li>
        )}
      </ul>
    </div>
  );
};

export default ResourceList;