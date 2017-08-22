import React from 'react';
import Subheader from 'material-ui/Subheader';

const Address = ({address}) => {
    return (
        <div>
            <Subheader>   
                <h2>Address</h2>
            </Subheader>
            <div style={{'width':'40%', 'float': 'left', 'textAlign': 'left', 'padding': '10px 20px'}}>
             { Object.keys(address).map((prop, i) => (typeof address[prop] === 'string' ? <p key={i}>{address[prop]}</p> : '')) }
            </div>           
             <div style={{ 'clear': 'both'}}></div>      
             <hr/>       
        </div>
    );
};

export default Address;