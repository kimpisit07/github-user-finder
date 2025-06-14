import React, { useState } from 'react';
import './SearchForm.css';

export default function SearchForm({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="GitHub username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
