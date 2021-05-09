import React from 'react';
import Nav from './components/navbar';
import Posts from './components/posts';
import stories from './components/stories';
import Story from './components/story';

const App = () => { 
    let authors = [ 
        {
        image: 'https://i.imgur.com/QhMap7L.jpeg',
        name: 'Profile Name-01'
        },
        {
        image: 'https://i.imgur.com/QhMap7L.jpeg',
        name: 'Profile Name-02'
        }
    ]

    return (
        <div>
            <div className="container" >
                <Nav />
            </div>  
            <div>
                <Story {...stories[0]}/>
            </div>        
            <div  className="container">
                <Posts authors={authors}/> 
            </div>
        </div>
    )
}



export default App