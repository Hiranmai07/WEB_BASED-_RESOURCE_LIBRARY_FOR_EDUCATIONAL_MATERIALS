import React, { useState } from 'react';

const AdminPanel = ({ resources, setResources }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleUpload = () => {
    const newResource = { title, url };
    setResources([...resources, newResource]);
    setTitle('');
    setUrl('');
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input
        type="text"
        placeholder="Resource Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Resource URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleUpload}>Upload Resource</button>
      <h3>Uploaded Resources:</h3>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;