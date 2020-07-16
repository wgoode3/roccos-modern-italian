import React from 'react';
import { Link } from "@reach/router";

const Appetisers = props => {

    return (

        <div className="col-sm-8 offset-sm-2">

            <ul className="list-group">
                <li className="list-group-item bg-danger text-light">Appetizers</li>
                <li className="list-group-item">
                    Garlic Bread 
                    <span style={{float:"right"}}>$5</span>
                </li>
                <li className="list-group-item">
                    Stracciatella di bufala 
                    <span style={{float:"right"}}>$5</span>
                </li>
                <li className="list-group-item">
                    Mozzarella Sticks
                    <span style={{float:"right"}}>$5</span>
                    </li>
                <li className="list-group-item">
                    Salad
                    <span style={{float:"right"}}>$5</span>
                </li>
                <li className="list-group-item">
                    Calamari
                    <span style={{float:"right"}}>$5</span>
                </li>
            </ul>

            <Link className="btn btn-primary" to="/entrees">Next</Link>
        </div>

    );

}

export default Appetisers;