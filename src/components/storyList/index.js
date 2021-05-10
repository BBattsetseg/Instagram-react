import React, { useRef, useState } from 'react';
import StoryAvatar from '../storyAvatar';
import './storyList.scss'

const StoryList = ({setIsStory}) => {
    const stories = [
        {
            avatar: 'https://i.imgur.com/QhMap7L.jpeg',
            name: 'wolarsen123456'
        },
        {
            avatar: 'https://i.imgur.com/COBFQxp.jpg',
            name: 'gigihadid'
        },
        {
            avatar: 'https://i.imgur.com/GPP7kjs.jpeg',
            name: 'Zayabilgee'
        },
        {
            avatar: 'https://i.imgur.com/QhMap7L.jpeg',
            name: 'wolarsen123456'
        },
        {
            avatar: 'https://i.imgur.com/COBFQxp.jpg',
            name: 'gigihadid'
        },
        {
            avatar: 'https://i.imgur.com/GPP7kjs.jpeg',
            name: 'Zayabilgee'
        },
        {
            avatar: 'https://i.imgur.com/QhMap7L.jpeg',
            name: 'wolarsen123456'
        },
        {
            avatar: 'https://i.imgur.com/COBFQxp.jpg',
            name: 'gigihadid'
        },
        {
            avatar: 'https://i.imgur.com/GPP7kjs.jpeg',
            name: 'Zayabilgee'
        },
        {
            avatar: 'https://i.imgur.com/QhMap7L.jpeg',
            name: 'wolarsen123456'
        },
        {
            avatar: 'https://i.imgur.com/COBFQxp.jpg',
            name: 'gigihadid'
        },
        {
            avatar: 'https://i.imgur.com/GPP7kjs.jpeg',
            name: 'Zayabilgee'
        },
      
       
    ];

    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(true);
    const listRef = useRef();

    const updateScroll = (e)=> {
        const scrollLeft = e.target.scrollLeft;
        const clientWidth = e.target.clientWidth;
        const scrollWidth = e.target.scrollWidth;

        if(scrollLeft < 10) {
            setLeft(false)
        } else {
            setLeft(true)
        }

        if (scrollLeft + clientWidth > scrollWidth - 5){
            setRight(false)
        } else {
            setRight(true)
        }
    }
  
    return (     
        <div className="z-depth-1 story-list-container">
            <div ref={listRef} className="story-list" onScrollCapture={(e)=>
                updateScroll(e)}>
            {
                stories.map((item)=>(<StoryAvatar {...item} setIsStory={setIsStory} />))
            }                    
            </div>
            {
                left && (
                    <span
                    className="back"
                    onClick={()=>{
                        listRef.current.scrollBy({
                            left: -200,
                            behavior:'smooth'
                        })
                    }}
                    >
                        <i className="material-icons">chevron_left</i>
                    </span>
                )
            }
            {
                right && (
                    <span
                    className="next"
                    onClick={()=>{
                        listRef.current.scrollBy({
                            left: 200,
                            behavior:'smooth'
                        })
                    }}
                    >
                        <i className="material-icons">chevron_right</i>
                    </span>
                )
            }
        </div>    
    )
}

export default StoryList;