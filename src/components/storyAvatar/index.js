import React from 'react';
import "./storyAvatar.scss";


const StoryAvatar = ({avatar,name,setIsStory}) => {
    return(
        <div className="story-avatar flex-center flex-col">
            <div className="story-avatar-border flex-center" onClick={()=>{setIsStory(true)}}>
                <img src={avatar} />
            </div>
            <span>{name.length > 9 ? `${name.slice(0,7)}...`:name}</span>
        </div>
    )
}

export default StoryAvatar;