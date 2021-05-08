import React from 'react';
import Nav from './components/navbar';
import Posts from './components/posts';
import Stories from './components/stories';



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
        <div className="container">
            <Nav />
            <Stories authors={authors}/>
            <Posts authors={authors}/>
        </div>
    )
}



export default App