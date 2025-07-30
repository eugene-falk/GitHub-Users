import React, { useEffect, useState } from 'react';
import { getUserRepos } from '../utils/githubApi';

interface Props {
  username: string;
}

const RepoList: React.FC<Props> = ({ username }) => {
  const [repos, setRepos] = useState<any[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getUserRepos(username)
      .then(setRepos)
      .catch(() => setError('Failed to load repositories'));
  }, []); 

  if (error) return <p>{error}</p>;

  return (
    <div className='repo-list'>
      {repos.map((repo) => (
        <li key={"repo.id"}>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
        </li>
      ))}
    </div>
  );
};

export default RepoList;
