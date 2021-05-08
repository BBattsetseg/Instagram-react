import React from 'react';
import Post from '../post';

const Posts = (props) => {
    let posts = [];
    props.authors.map((author)=>{
        posts.push({
            authorImage: author.image,
            authorName: author.name,
            image: ['https://i.imgur.com/QhMap7L.jpeg','https://i.imgur.com/COBFQxp.jpg','https://i.imgur.com/GPP7kjs.jpeg','https://i.imgur.com/JOyai7w.png','https://i.imgur.com/3HieVoS.jpeg'],
            createdAt: '1 years ago',
            likes: ['randanaeou', 'others']
        })
    })
                
 return (
    <div className="post-container">
        {
            posts.map((post)=>
                <Post
                avatarUrl = {post.authorImage}
                postedUser = {post.authorName}
                image = {post.image}
                createdAt = {post.createdAt}
                likes = {post.likes}
            />
            )
        }
    </div>
    )
 }
export default Posts