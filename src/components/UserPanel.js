import React, { useState } from 'react';
import AddResource from './AddResource';
import ShowResources from './ShowResources';

const UserPanel = ({ resources, setResources }) => {
  const [showAddResource, setShowAddResource] = useState(false);
  const [showAvailableResources, setShowAvailableResources] = useState(false);

  const handleAddResourceClick = () => {
    setShowAddResource(true);
    setShowAvailableResources(false);
  };

  const handleAvailableResourcesClick = () => {
    setShowAvailableResources(true);
    setShowAddResource(false);
  };

  return (
    <div>
      <h2>User Panel</h2>
      <button onClick={handleAddResourceClick}>Add Resources</button>
      <button onClick={handleAvailableResourcesClick}>Available Resources</button>

      {showAddResource && (
        <div>
          <h3>Add Resource</h3>
          <AddResource resources={resources} setResources={setResources} />
        </div>
      )}
      
      {showAvailableResources && (
        <div>
          <h3>Available Resources</h3>
          <ShowResources resources={resources} />
        </div>
      )}
    </div>
  );
};

export default UserPanel;