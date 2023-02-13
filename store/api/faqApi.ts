import { postService, getService } from "../commonServices";

export class FAQService {
  getSearchFaqs(query) {
    const url = `/faq/search?text=${query}`;
    const data = getService(url);
    return data;
  }
  getFaqs() {
    const url = `/faq/faqs`;
    const data = getService(url);
    return data;
  }

  getBlog(id) {
    const url = `/faq/${id}`;
    const data = getService(url);
    return data;
  }

  addFaq(body) {
    const url = `/faq/add}`;
    const data = postService(url, body);
    return data;
  }

  updateFaq(id, body) {
    const url = `/faq/${id}}`;
    const data = postService(url, body, "PUT");
    return data;
  }

  deleteFaq(id) {
    const url = `/faq/${id}}`;
    const data = postService(url, "DELETE");
    return data;
  }
  getFAQ() {
    const url = "/faq/faqs/";
    const data = getService(url);
    return data;
  }
  addFAQ(faq_data) {
    const url = "/faq/add";
    const body = JSON.stringify(faq_data);

    const data = postService(url, body);
    return data;
  }

  editFAQ(faq) {
    const body = faq;
    const url = `faq/faqs`;
    const data = postService(url, body, "PUT");

    return data;
  }
  deleteFAQ(id) {
    const url = `/faq/deleteFaq/${id}`;
    const data = postService(url, undefined, "DELETE");
    return data;
  }
  getbyFAQID(id) {
    const url = `/faq/${id}`;
    const data = getService(url);
    return data;
  }
}
