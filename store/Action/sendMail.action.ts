import { SendMailService } from "../api/sendMailApi";
import { Dispatch } from "redux";

const sendMailService = new SendMailService();

export const bookingCounsellorMail = (data:any) => async (dispatch: Dispatch) => {
  try {
    const res = await sendMailService.counsellorBookingMail(data);
    return res;
  } catch (error) {
    return error;
  }
};

