import { db } from "../../firebase";
import { Dispatch } from "redux";
import emailjs from '@emailjs/browser';



export const addSubscriber = (email) => async (dispatch: Dispatch) => {
  try {
    let resp = await db.collection("subscriber").add({ email });
    const templateParams = {
      from_name: 'Admizz',
      to_name: `${email}`,
      message: '<p>Thank You Subscribing to Admizz Newsletter</p>'
    };

    emailjs.send('service_tq340ah', 'template_wyoewji', templateParams, 'user_LJNkSwb8gZqv46PsWjrcW')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });


  } catch (error) {
    console.log(error);
  }
};

