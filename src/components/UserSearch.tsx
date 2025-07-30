import React from 'react';

interface Props {
  username: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const UserSearch: React.FC<Props> = ({ username, onChange, onSubmit }) => {
  return (
    <div className="search-bar">
      <input
        className="input"
        type="text"
        value={username}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter GitHub username..."
      />
      <button className="button" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

export default UserSearch;
