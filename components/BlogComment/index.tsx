import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Input } from "../Input";
import { Button } from "../../components";
import { db } from "../../firebase";
import * as yup from "yup";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { auth } from "../../firebase";
import { getAuthUser } from "@/store/Action/user.action";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface CommentForm {
  comment: string;
}
const index = (props) => {
  //const [comment, setComment] = React.useState("");
  const [snackOpen, setSnackOpen] = useState(false as boolean);
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({} as CommentForm);
  const [formError, setFormError] = useState({} as any);

  const user = useSelector((state: any) => state.user.authUser);
  const blogs_id = useSelector((state: any) => state.blog.blogs);

  const dispatch = useDispatch();
  useEffect(() => {
    auth.currentUser && dispatch(getAuthUser(auth.currentUser.uid));
  }, [ blogs_id,auth]);

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    setFormError(() => ({ ...formError, [e.target.name]: null }));
  };
  const validationSchema = yup.object().shape<CommentForm>({
    comment: yup.string().required("Comment field shouldnot be empty!"),
  });
  const validate = async () => {
    try {
      await validationSchema.validate(
        {
          comment: formValue.comment,
        },
        {
          abortEarly: false,
        }
      );
      setFormError({});
      return true;
    } catch (err) {
      const errors = {};
      err.inner.forEach((item: any) => {
        errors[item.path] = item.errors[0];
      });
      setFormError({ ...errors });
    }
  };

  const handleComment = async () => {
    setLoading(true);
    const Valid = await validate();
    if (Valid) {
      db.collection("comment")
        .add({
          comment: formValue.comment,
          createdAt: new Date(),
        })
        .then(function (docRef) {
          setSnackOpen(true);
          setFormValue({
            ...formValue,
            comment: "",
          });
          setLoading(false);
        })
        .catch(function (error) {
          setLoading(false);
          console.error("Error on commenting: ", error);
        });
    }
  };

  return (
    <div className="blog-detail-content__commentContainer">
      <p className="blog-detail-content__commentTitle">Leave A Comment</p>
      <Input
        name={"comment"}
        multiline
        placeholder={"Add additional query you have"}
        fullWidth
        value={formValue.comment}
        error={!!formError.comment}
        onChange={handleChange}
      />
      <div className="blog-detail-content__commentTitle"></div>
      <Button onClick={handleComment} disabled={loading} loading={loading}>
        SUBMIT
      </Button>

      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert onClose={() => setSnackOpen(false)} severity="success">
          Your comment has been added
        </Alert>
      </Snackbar>

      <div className="blog-detail-content__commentTitle"></div>

    </div>
  );
};

export default index;
