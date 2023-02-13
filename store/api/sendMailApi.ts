import { postService } from "../commonServices";

export class SendMailService {
  counsellorBookingMail(body: any) {
    const url = "/sendmail/sendMailToCounsellor";
    const data = postService(url, body);
    return data;
  }
  sendSuscriberMail(body: any) {
    let url: "/sendmail/sendMailToSubscriber";
    const data = postService(url, body);
    return data;
  }
}
