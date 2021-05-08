import React from 'react';
import Story from '../story';


const Stories = (props) => {
    const stories = [];
    props.authors.map((author)=>{
        stories.push(
            {
                avatar: author.image,
                name:author.name,
                imageUrls: ['https://i.imgur.com/QhMap7L.jpeg','https://i.imgur.com/COBFQxp.jpg','https://i.imgur.com/GPP7kjs.jpeg','https://i.imgur.com/JOyai7w.png','https://i.imgur.com/3HieVoS.jpeg']
            }
        )
    })
    return (
        <div>
            {
                stories.map((story)=>
                    <Story 
                    profile={story.avatar}
                    profileName={story.name} 
                    imageUrls={story.imageUrls}
                    />
                )
            }
            
        </div>
    )
}


export default Stories;