import { postService } from "../commonServices";

export class SendMailService {
    counsellorBookingMail(body:any) {
    let url = "/sendmail/sendMailToCounsellor";
        let data = postService(url, body)
        return data
    }
    sendSuscriberMail(body:any){
        let url :"/sendmail/sendMailToSubscriber";
        let data = postService(url,body)
        return data
    }
    
}