import { db } from "../../firebase";

export const getTestimonial = () => async (dispatch) => {
  let testimonial = [];
  try {
    let querySnapshot = await db.collection("testimonial").get();

    querySnapshot.forEach(function (doc) {
      const data = doc.data();
      data.id = doc.id;
      testimonial.push(data);
    });
    return testimonial;
  } catch (error) {
    console.log(error);
    return [];
  }
};
