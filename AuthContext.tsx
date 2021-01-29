import React, { useState, useEffect } from "react";
import { firebase } from "./firebase";
import { parseCookies, setCookie } from "nookies";
import jwt_decode from "jwt-decode";

export const AuthContext = React.createContext<Partial<any>>({});

const AuthProvider = (props) => {
    const [user, setUser] = useState(null as firebase.User | null);
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(null as boolean | null);
    const [pageLoading, setPageLoading] = useState(false);
    const [authChanging, setAuthChanging] = useState(false);

    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = () => {
        firebase.auth().onAuthStateChanged((user) => {
            setAuthenticated(true);
            setUser(user)
            //   setTokenToAPI(user);
        });
    };

    //   const setTokenToAPI = async (user: firebase.User) => {
    //     setUser(user);
    //     setLoading(true);
    //     if (user !== null) {
    //       try {
    //         const token = await user.getIdTokenResult(true);
    //         const decodedToken = jwt_decode(token.token);
    //         const response = await API.get(`/user/profile-picture/${user?.uid}`);
    //         if (
    //           response.data.msg != "User not found" &&
    //           response.data.data.profile_picture
    //         ) {
    //           setProfileUrl(response?.data?.data?.profile_picture);
    //         } else {
    //           setProfileUrl("");
    //         }
    //         setPendingCount(response?.data?.data?.pendingCount);

    //         setCookie(null, "accessToken", token.token, {
    //           maxAge: 30 * 24 * 60 * 60,
    //           path: "/",
    //         });
    //         setAuthenticated(true);
    //       } catch (error) {
    //       }
    //     } else {
    //       setAuthenticated(false);
    //     }
    //     setLoading(false);
    //   };

    return (
        <AuthContext.Provider
            value={{
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
