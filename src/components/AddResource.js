import React, { useState } from 'react';

const AddResource = ({ resources, setResources }) => {
  const [resourceName, setResourceName] = useState('');
  const [resourceUrl, setResourceUrl] = useState('');

  const handleAddResource = () => {
    if (resourceName.trim() && resourceUrl.trim()) {
      const newResource = { name: resourceName, url: resourceUrl };
      setResources([...resources, newResource]);
      setResourceName('');
      setResourceUrl('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={resourceName} 
        onChange={(e) => setResourceName(e.target.value)} 
        placeholder="Resource Name" 
      />
      <input 
        type="text" 
        value={resourceUrl} 
        onChange={(e) => setResourceUrl(e.target.value)} 
        placeholder="Resource URL" 
      />
      <button onClick={handleAddResource}>Submit</button>
    </div>
  );
};

export default AddResource;