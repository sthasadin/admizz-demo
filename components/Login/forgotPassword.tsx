import React, { useState } from "react";
import { Input } from "../Input";
import PersonIcon from "@material-ui/icons/Person";
import { Button } from "../Button";
import { auth } from "../../firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await auth.sendPasswordResetEmail(email);
    setLoading(false);
    alert(" A better prompt showing the email was sent");
  };

  return (
    <div className="signin">
      <div className="signin__inner">
        <div className="signin__right">
          <div className="signin__header">Forgot Password</div>

          <div className="signin__form login">
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <Input
                placeholder="Email Address"
                type="text"
                name={"email"}
                value={email}
                fullWidth
                icon={PersonIcon}
                margin={"0px 0px 20px 0px"}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div
                className="signin__submit column"
                style={{ flexDirection: "column", gap: "1rem" }}
              >
                <Button htmlType={"submit"} fullWidth loading={loading}>
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
