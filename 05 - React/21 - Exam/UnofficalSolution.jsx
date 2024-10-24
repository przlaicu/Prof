import { useState } from 'react';
export default function Exam() {
  const [value, setValue] = useState(null);
  const [user, setUser] = useState(null);
  const [repo, setRepo] = useState(null);

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${value}`)
      .then((response) => response.json())
      .then((data) => setUser(data));

    fetch(`https://api.github.com/users/${value}/repos`)
      .then((response) => response.json())
      .then((data) => setRepo(data));
  };

  return (
    <div>
      <h1>Functional Example</h1>
      <p> {user?.name}</p>
      <p> {user?.bio}</p>
      <ul>
        {repo?.map((repo) => (
          <li>{repo.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={changeValue} />
        <button type='submit'>Submit Data</button>
      </form>
    </div>
  );
}
