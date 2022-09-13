import React, { createContext, useState } from "react";
import { useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    userId: 2,
    name: "Sri",
    email: "sri@nseit.com",
    isLoggedIn: true,
    role: "CUSTOMER",
  });

  const [booking, setBooking] = useState({
    userId: 0,
    movieId: 0,
    theatreId: 0,
    tickets: 0,
    price: 0,
  });

  useEffect(() => {
    console.log(loggedInUser);
  }, [loggedInUser]);

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        booking,
        setBooking,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
