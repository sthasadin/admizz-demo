import React, { useState, useEffect } from "react";
import { firebase } from "../firebase";
// import { parseCookies, setCookie } from "nookies";
// import jwt_decode from "jwt-decode";

export const AuthContext = React.createContext<Partial<any>>({});

const AuthProvider = (props: any) => {
  const [user, setUser] = useState(null as firebase.User | null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(null as boolean | null);
  const [pageLoading, setPageLoading] = useState(false);
  const [authChanging, setAuthChanging] = useState(false);

  useEffect(() => {
    (async () => {
      initialLoad();
    })();
  }, []);

  const initialLoad = async () => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user !== null) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      setLoading(false);
      //   setTokenToAPI(user);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth: firebase.auth(),
        user,
        setUser,
        authenticated: authenticated,
        loading,
        setAuthenticated,
        setLoading,
        setPageLoading,
        pageLoading,
        authChanging,
        setAuthChanging,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthProvider;
