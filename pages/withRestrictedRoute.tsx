import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import Router from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";

const withRestrictedRoute = (AuthComponent) => {
  function RestrictedComponent({ children }) {
    const { authenticated, loading, user } = useContext(AuthContext);
    const [toRender, setToRender] = useState(false);
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
        <div className={"route-load"}>
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
export default withRestrictedRoute;
