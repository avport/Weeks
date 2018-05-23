"use strict"; 
  
const postForm = {
    bindings: {
        postform: "&"
    };
    template: `
    <form>
        <input>Title</input>
        <input>Thought</input>
        <button>Add Post</button>
    </form>
    `s
}


angular
.module("SocialPosts")
.component("postForm", postForm);
