import { postService, getService } from "../commonServices";


export class CommentServices {
    addComment(comment){
        let body = comment
        let url = `/createcomment`;
        let data = postService(url,body);
        return data;
    }
    getComment(comment){
        let url =''
    }
}