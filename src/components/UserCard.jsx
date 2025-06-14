import React from 'react';
import './UserCard.css';

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt="avatar" />
      <h2>{user.login}</h2>
      <p>{user.bio || 'No bio available'}</p>
      <p>Followers: {user.followers} | Repos: {user.public_repos}</p>
    </div>
  );
}
