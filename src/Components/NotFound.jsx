import React, { useEffect } from 'react';

const NotFound = props => {

    useEffect( () => {
        console.log(props);
    }, [props]);


    return (

        <div className="col-sm-8 offset-sm-2">
            <h1>404 cannot find: {props.location.pathname}</h1>
        </div>

    );

}

export default NotFound;