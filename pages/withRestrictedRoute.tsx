import React, { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const withRestrictedRoute = (AuthComponent) => {
  function RestrictedComponent({ children }) {
    const { authenticated, user } = useContext(AuthContext);

    useEffect(() => {
      if (authenticated == null) {
        return null;
      }
    }, [authenticated, user]);

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
