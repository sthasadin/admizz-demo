import { SendMailService } from "../api/sendMailApi";
import { Dispatch } from "redux";

const sendMailService = new SendMailService();

export const bookingCounsellorMail = (email) => async (dispatch: Dispatch) => {
  try {
    const res = await sendMailService.counsellorBookingMail(email);
    return res;
  } catch (error) {
    return error;
  }
};

