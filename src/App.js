import React, { useState } from 'react';
import Nav from './components/navbar';
import Posts from './components/posts';
import Story from './components/story';
import StoryList from './components/storyList';


const App = () => { 
const [isStory, setIsStory] = useState(true);

    let authors = [ 
        {
        image: 'https://i.imgur.com/QhMap7L.jpeg',
        name: 'Profile Name-01'
        },
        {
        image: 'https://i.imgur.com/QhMap7L.jpeg',
        name: 'Profile Name-02'
        }
    ];

    return (
        <div>
            {
                isStory ?
                <Story/> :
                <div>
                    <div className="container" >
                        <Nav />
                    </div>  
                    <div className="container row">
                        <div className="col s12 m8">
                            <StoryList setIsStory={setIsStory}/>
                            <Posts authors={authors}/> 
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}



export default App