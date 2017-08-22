import React from 'react';
import Subheader from 'material-ui/Subheader';
import {Card, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

const Address = ({address}) => {
    return (
        <div>
            <Subheader>   
                <h2>Address</h2>
            </Subheader>
            <div style={{'width':'40%', 'float': 'left', 'textAlign': 'left', 'padding': '10px 20px'}}>
             { Object.keys(address).map((prop) => (typeof address[prop] == 'string' ? <p>{address[prop]}</p> : '')) }
            </div>           
             <div style={{ 'clear': 'both'}}></div>             
        </div>
    );
};

export default Address;