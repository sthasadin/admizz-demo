import { db } from "../../firebase";
import { Dispatch } from "redux";
import emailjs from '@emailjs/browser';



export const addSubscriber = (email) => async (dispatch: Dispatch) => {
  try {
    let resp = await db.collection("subscriber").add({ email });
    const templateParams = {
      from_name: 'Admizz',
      to: `${email}`,
    };
  } catch (error) {
    console.log(error);
  }
};

