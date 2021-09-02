import React from 'react'
import { Link } from 'wouter';
import './ErrorComponent.css'

const gifsErrors = ['8L0Pky6C83SzkzU55a', 'H7wajFPnZGdRWaQeu0', 'WQOIEQRgiK722l3PQT', '9J7tdYltWyXIY', 'xT9IgIc0lryrxvqVGM', 'xTiN0L7EW5trfOvEk0' ];

export default function ErrorComponent () {
    const randomImage = () => {
        return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1 ]}/giphy.gif`
    }
    
    return (
        <div className="Error-content">
            <h2 className="Error-title">Error 404</h2>
            <h4 className="Error-sub-title">Something got lost along the way, try again</h4>
            <img src={randomImage()} alt="404-not-found" className="Gif-error"/>
            <Link to="/" className='Home-link'>
                Go back home!
            </Link>
        </div>
    )
}