import { postService, getService } from "../commonServices";

export class CommentServices {
  addComment(comment) {
    const body = comment;
    const url = `/createcomment`;
    const data = postService(url, body);
    return data;
  }
  getComment(comment) {
    const url = "";
  }
}
