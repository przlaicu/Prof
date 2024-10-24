function resolveResponse(response) {
  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    throw new Error('No such user!');
  }

  throw new Error('Ooops, Server error!');
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
};

async function fetchUser(userName) {
  const response = await fetch(
    `https://api.github.com/users/${userName}`,
    options
  );
  return resolveResponse(response);
}

async function fetchUserRepos(userName) {
  const response = await fetch(
    `https://api.github.com/users/${userName}/repos`,
    options
  );
  return resolveResponse(response);
}

export default {
  fetchUser,
  fetchUserRepos,
};
