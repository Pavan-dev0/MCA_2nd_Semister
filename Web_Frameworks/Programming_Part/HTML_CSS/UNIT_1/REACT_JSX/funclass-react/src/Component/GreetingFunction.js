import React from 'react';

function Greeting({name}){
    return (
        <div>
            <h1>H1llo, {name}!</h1>
            <p>Welcome to react</p>
        </div>
    );
}

export default Greeting;