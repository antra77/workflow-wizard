/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get("/profile")
        .then(({ data }) => {
          console.log(data); // Log data to check if it's fetched correctly
          setUser(data);
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [user]); // Include user in the dependency array to prevent infinite loop

  console.log(user); // Log user to verify if it's being set correctly

  return (
    <UserContext.Provider value={{ user, setUser }}> {/* Pass object instead of tuple */}
      {children}
    </UserContext.Provider>
  );
}
