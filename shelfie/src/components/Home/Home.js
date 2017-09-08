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
                    <Link to="">
                        <div className="shelf"></div>
                    </Link>
                    <Link to="">
                        <div className="shelf"></div>
                    </Link>
                    <Link to="">
                        <div className="shelf"></div>
                    </Link>
                    <Link to="">
                        <div className="shelf"></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}