import React, { useState } from 'react';
import UserSearch from './components/UserSearch';
import UserInfo from './components/UserInfo';
import RepoList from './components/RepoList';
import './App.css';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');

  return (
    <div className="app-container">
      <h1 className="title">GitHub Explorer</h1>
      <UserSearch
        username={username}
        onChange={setUsername}
        onSubmit={() => setSubmittedUsername(username)}
      />
      {submittedUsername && (
        <div className="results-container">
          <UserInfo username={submittedUsername} />
          <RepoList username={submittedUsername} />
        </div>
      )}
    </div>
  );
};

export default App;
