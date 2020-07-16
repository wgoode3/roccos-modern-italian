import React from 'react';
import { Link } from '@reach/router';

const Entrees = props => {

    return (

        <div className="col-sm-8 offset-sm-2">

            <ul className="list-group">
                <li className="list-group-item bg-success text-light">Entrees</li>
                <li className="list-group-item">
                    Lasagna
                    <span style={{float:"right"}}>$15</span>
                </li>
                <li className="list-group-item">
                    Fetuccini Alfredo
                    <span style={{float:"right"}}>$15</span>
                </li>
                <li className="list-group-item">
                    Carbonara
                    <span style={{float:"right"}}>$15</span>
                    </li>
                <li className="list-group-item">
                    Chicken Marsala
                    <span style={{float:"right"}}>$15</span>
                </li>
                <li className="list-group-item">
                    Parmesan Pollenta with Braised Lamb Ragu
                    <span style={{float:"right"}}>$15</span>
                </li>
            </ul>

            <Link className="btn btn-primary" to="/">Previous</Link>
            <Link className="btn btn-primary" to="/desserts">Next</Link>

        </div>

    );

}

export default Entrees;