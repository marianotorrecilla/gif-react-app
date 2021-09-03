import React from 'react'
import {Link} from 'wouter'
import './Category.css'

export default function Category({name, options = []}){
    return (
        <>
            <div className="Category-div">
                <h3 className="Category-title">{name}</h3>
                <ul className="Category-ul">
                    {options.map((singleOption) => (
                        <li className="Category-li" key={singleOption}>
                            <Link className="Category-link" to={`/search/${singleOption}`}>{singleOption}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}