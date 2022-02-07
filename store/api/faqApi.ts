import { postService, getService } from "../commonServices";

export class FAQService {

  getSearchFaqs(query){
    let url = `/faq/search?text=${query}`;
    let data = getService(url);
    return data;
}
getFaqs() {
let url = `/faq/faqs`;
let data = getService(url);
return data;
}

getBlog(id) {
let url = `/faq/${id}`;
let data = getService(url);
return data;
}

addFaq(body) {
let url = `/faq/add}`;
let data = postService(url,body);
return data;
}

updateFaq(id,body) {
let url = `/faq/${id}}`;
let data = postService(url,body,"PUT");
return data;
}

deleteFaq(id) {
let url = `/faq/${id}}`;
let data = postService(url,"DELETE");
return data;
}
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


