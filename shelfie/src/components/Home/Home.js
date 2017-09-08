import React from 'react';
import '../../reset.css';
import '../../App.css'
import {Link} from 'react-router-dom';

export default function Home () {
    return (
        <div>
            <div className="papadiv">
                <div className="header"></div>
                <div className="shelfholder">
                    <Link to="/shelf/a">
                        <div className="shelf">Shelf A</div>
                    </Link>
                    <Link to="/shelf/b">
                        <div className="shelf">Shelf B</div>
                    </Link>
                    <Link to="/shelf/c">
                        <div className="shelf">Shelf C</div>
                    </Link>
                    <Link to="/shelf/d">
                        <div className="shelf">Shelf D</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}