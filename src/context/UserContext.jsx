import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    userId: 0,
    userName: "",
    isLoggedIn: true,
  });
  
  const searchMovie = (userName) => {
    // return movies.reduce((acc, curr) => {
    //   if (curr.name === userName) {
    //     acc = curr;
    //   }
    //   return acc;
    // }, {});
  };

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        searchMovie,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
