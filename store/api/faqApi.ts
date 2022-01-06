import { postService, getService } from "../commonServices";
export class Faqservice {

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
  
}


