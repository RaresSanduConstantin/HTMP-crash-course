'use strict';

const posts = document.querySelectorAll('.textBlog');
const textsBlog = [`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, 
vel minus aliquid amet, vitae sit eaaccusantium id voluptatem blanditiis a esse quae nobis d`, `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum`, `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, vel minus aliquid amet, vitae sit ea
accusa ntium id voluptatem blanditiis a esse quae nobis delectus corporis expedita repudiandae. Enim,
dicta. Alias aspernatur enim doloribus veniam`];
console.log(posts);

function addTextInBlogPost(posts, textsBlog){
    console.log("addTextInBlogPost apelata");
    for(let i=0; i < posts.length; i++){
        posts[i].innerHTML = textsBlog[i].substring(0, 80) + '...';
    }
}
addTextInBlogPost(posts, textsBlog);