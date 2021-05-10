import React, { useEffect, useState } from 'react';
import './story.scss';
import 'materialize-css/dist/css/materialize.min.css';

const Story = ({images=[
    'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg',
    'https://pyxis.nymag.com/v1/imgs/986/0a9/fb8617a064d7dee0e01b7335d9769a49ac-23-friends-cover-story-lede-mobile.rvertical.w570.jpg',
    'https://cdn.vox-cdn.com/thumbor/T2ScOJy0V8r-qM_4oELXMwf6Z94=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19550976/friends.jpg'
]}) => {
    const [sId, setSid] = useState(0);
    const [percent, setPercent] = useState(0);
    const [pause, setPause] = useState(false);

    const getPercent = (index)=>{
        if(index < sId) {
            return 100;
        }
        if(index==sId){
            if(percent == 100){
                setSid(sId+1);
                setPercent(0)
            }
            return percent;
        }
        return 0
    };

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(pause) return

            setPercent((percent)=>{
                return percent + 1;              
            })
        },30);

        return ()=>{
            
            clearInterval(interval)
        }

    },[pause]);

    return(
        <div className="story-container">
            <div className="story-body" style={{backgroundImage:`url(${images[sId]})`}}>
                <div className="progress-container">
                    {
                        images.map((item,index)=>(<div className="progress" style={{width:`${100/images.length}%`}}>
                            <div className="progress-bar"  style={{width:`${getPercent(index)}%`}}></div>
                        </div>))
                    }
                </div>
                <ul class="collection">
                    <li class="collection-item avatar valign-wrapper">
                        <img src="https://i.imgur.com/QhMap7L.jpeg" alt="" class="circle"/>
                        <span class="title font-bold">Title</span>                      
                        <span class="title opacity margin-left font-bold">12h</span>                      
                        <a href="#!" class="secondary-content valign-wrapper">
                        <svg aria-label="Play" className="margin-left " fill="#ffffff" height="16" viewBox="0 0 48 48" width="16"><path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"></path></svg>
                        <svg aria-label="Video has no audio." className="margin-left " fill="#ffffff" height="16" viewBox="0 0 48 48" width="16"><path clip-rule="evenodd" d="M42.9 24l4.6 4.6c.6.6.6 1.6 0 2.2l-1.4 1.4c-.6.6-1.6.6-2.2 0l-4.6-4.6-4.6 4.6c-.6.6-1.6.6-2.2 0l-1.4-1.4c-.6-.6-.6-1.6 0-2.2l4.6-4.6-4.6-4.6c-.6-.6-.6-1.6 0-2.2l1.4-1.4c.6-.6 1.6-.6 2.2 0l4.6 4.6 4.6-4.6c.6-.6 1.6-.6 2.2 0l1.4 1.4c.6.6.6 1.6 0 2.2L42.9 24zM24.1 47.6L11.3 34.7H1.6C.7 34.7 0 34 0 33.2V14.8c0-.8.7-1.5 1.5-1.5h9.7L24.1.4c.9-.9 2.5-.3 2.5 1v45.1c0 1.3-1.6 2-2.5 1.1z" fill-rule="evenodd"></path></svg>
                         <i className="material-icons margin-left">more_horiz</i>
                        </a>
                    </li>
                </ul>
            </div>
            <img alt="Instagram" className="insta-logo" src="/static/images/web/mobile_nav_type_logo-dark.png/ff9b85f2b7ca.png" srcset="/static/images/web/mobile_nav_type_logo-dark-2x.png/908edfc84eda.png 2x"/>
            <svg aria-label="Close" className="close-logo" fill="#ffffff" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg>
        </div>
    )
}

export default Story;