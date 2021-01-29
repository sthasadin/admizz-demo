import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import Router from "next/router";
import { createUseStyles } from "react-jss";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyle = createUseStyles(() => {
  return {
    loader: {
      marginTop: 20,
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      height: "100vh",
      width: "100%",
    },
  };
});

const withPrivateRoute = (AuthComponent) => {
  function PrivateComponent({ children }) {
    const { authenticated, user, loading } = useContext(AuthContext);
    const classes = useStyle();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (authenticated === null) {
        return;
      }
      if (!authenticated) {
        Router.push("/login");
        return;
      }

      if (
        user &&
        authenticated &&
        !user.emailVerified &&
        user?.providerData[0]?.providerId != "facebook.com"
      ) {
        Router.push("/register-verification");
      }

      setIsLoading(false);
    }, [authenticated, user]);

    if (loading || isLoading) {
      return (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      );
    }

    return <>{children}</>;
  }

  return class Higher extends React.Component {
    render() {
      return (
        <PrivateComponent>
          <AuthComponent {...this.props} />
        </PrivateComponent>
      );
    }
  };
};

export { withPrivateRoute };
