import React from 'react';

export default function RepoList({ repos }) {
  return (
    <div>
      <h3>Latest Repositories</h3>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
