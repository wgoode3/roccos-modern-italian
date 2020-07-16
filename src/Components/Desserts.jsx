import React from 'react';
import { Link } from '@reach/router';

const Desserts = props => {

    return (

        <div className="col-sm-8 offset-sm-2">

            <ul className="list-group">
                <li className="list-group-item bg-secondary text-light">Desserts</li>
                <li className="list-group-item">
                    Canoli
                    <span style={{float:"right"}}>$5</span>
                </li>
                <li className="list-group-item">
                    Gelato
                    <span style={{float:"right"}}>$5</span>
                </li>
                <li className="list-group-item">
                    Tiramasu
                    <span style={{float:"right"}}>$5</span>
                    </li>
                <li className="list-group-item">
                    Tres Leche Cake
                    <span style={{float:"right"}}>$5</span>
                </li>
                <li className="list-group-item">
                    Cheesecake
                    <span style={{float:"right"}}>$5</span>
                </li>
            </ul>

            <Link className="btn btn-primary" to="/entrees">Previous</Link>
        </div>

    );

}

export default Desserts;