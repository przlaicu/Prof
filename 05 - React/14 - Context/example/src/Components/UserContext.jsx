import { createContext, useContext } from 'react';

const UserContext = createContext();

export default function AuthUser() {
  return (
    <UserContext.Provider
      value={{
        user: 'Nino Škuflić',
        lastAccess: '10/10/2024 11:59:58 CEST',
        didLogOut: true,
      }}
    >
      <User />
      <hr />
      <LoggedInUser />
      <hr />
      <LoggedOutUser />
    </UserContext.Provider>
  );
}

function User() {
  const contextValue = useContext(UserContext);
  return (
    <div>
      <p>The user is {contextValue.user}</p>
      <p>Last access: {contextValue.lastAccess}</p>
      <p>
        {contextValue.didLogOut ? 'User is logged out' : 'User is logged in'}
      </p>
      <hr />
      <LoggedInUser />
    </div>
  );
}

function LoggedOutUser() {
  const contextValue = useContext(UserContext);
  return (
    <div>
      <p>The user is {contextValue.user}</p>
      <p>Last access: {contextValue.lastAccess}</p>
      <p>
        {contextValue.didLogOut ? 'User is logged out' : 'User is logged in'}
      </p>
    </div>
  );
}

function LoggedInUser() {
  const contextValue = useContext(UserContext);
  return (
    <div>
      <p>The user is {contextValue.user}</p>
      <p>Last access: {contextValue.lastAccess}</p>
      <p>
        {contextValue.didLogOut ? 'User is logged out' : 'User is logged in'}
      </p>
    </div>
  );
}
