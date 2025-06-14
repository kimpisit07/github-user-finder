import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import UserCard from './components/UserCard';
import RepoList from './components/RepoList';

export default function App() {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUser = async (username) => {
    setLoading(true);
    setError('');
    setUserData(null);
    setRepos([]);

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error('User not found');
      const user = await userRes.json();
      setUserData(user);

      const repoRes = await fetch(`${user.repos_url}?sort=created&per_page=3`);
      const repoData = await repoRes.json();
      setRepos(repoData);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">GitHub User Finder</h1>
        <SearchForm onSearch={fetchUser} />
        {loading && <p className="info">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {userData && <UserCard user={userData} />}
        {repos.length > 0 && <RepoList repos={repos} />}
      </div>
    </div>
  );
}
