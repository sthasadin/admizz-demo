import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import Router from "next/router";
import { createUseStyles } from "react-jss";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyle = createUseStyles(() => {
  return {
    loader: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      height: "100vh",
      width: "100%",
    },
  };
});

const withRestrictedRoute = (AuthComponent) => {
  function RestrictedComponent({ children }) {
    const { authenticated, loading, user } = useContext(AuthContext);
    const [toRender, setToRender] = useState(false);
    const classes = useStyle();
    useEffect(() => {
      if (authenticated == null) {
        return;
      }
      if (authenticated && user !== null) {
        Router.push("/");
      } else {
        setToRender(true);
      }
    }, [authenticated, user]);
    if (!toRender || loading) {
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
        <RestrictedComponent>
          <AuthComponent {...this.props} />
        </RestrictedComponent>
      );
    }
  };
};

export { withRestrictedRoute };
