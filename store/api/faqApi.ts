import { postService, getService } from "../commonServices";

export class FAQService {
  getFAQ() {
    let url = "/faq/faqs/";
    let data = getService(url);
    return data;
  }
  addFAQ(faq_data) {
    let url = "/faq/add";
    let body = JSON.stringify(faq_data);

    let data = postService(url, body);
    return data;
  }

  editFAQ(faq) {
    let body = faq;
    let url = `faq/faqs`;
    let data = postService(url, body, "PUT");

    return data;
  }
  deleteFAQ(id) {
    let url = `/faq/deleteFaq/${id}`;
    let data = postService(url, undefined, "DELETE");
    return data;
  }
  getbyFAQID(id) {
    let url = `/faq/${id}`;
    let data = getService(url);
    return data;
  }
}
