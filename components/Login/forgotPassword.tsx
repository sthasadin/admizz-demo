import React from "react";
import { Input } from "../Input";
import PersonIcon from "@material-ui/icons/Person";
import { Button } from "../Button";

const ForgotPassword = () => {
  return (
    <div className="signin">
      <div className="signin__inner">
        <div className="signin__right">
          <div className="signin__header">Forgot Password</div>

          <div className="signin__form login">
            <form className="form">
              <Input
                placeholder="Email Address"
                type="text"
                name={"email"}
                fullWidth
                icon={PersonIcon}
                margin={"0px 0px 20px 0px"}
              />

              <div
                className="signin__submit column"
                style={{ flexDirection: "column", gap: "1rem" }}
              >
                <Button htmlType={"submit"} fullWidth>
                  Reset Password
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ForgotPassword };
