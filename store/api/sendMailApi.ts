import { postService } from "../commonServices";

export class SendMailService {
    counsellorBookingMail(email) {
        let url = '/sendmail/counsellorBooking';
        let body = ({ email: email });
        let data = postService(url, body)
        return data
    }
}