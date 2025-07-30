import React, { useEffect, useState } from 'react';
import { getUser } from '../utils/githubApi';

interface Props {
  username: string;
}

const UserInfo: React.FC<Props> = ({ username }) => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    getUser(username).then(setUserData).catch(console.error);
  }, [username]);

  if (!userData) return <p>Loading user...</p>;

  return (
    <div>
      <img src={userData.avatar_url} alt="avatar" width={80} />
      <h2>{userData.login}</h2>
    </div>
  );
};

export default UserInfo;
