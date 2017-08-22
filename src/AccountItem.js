import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
const styles = {
    chip: {
        float: 'right',
        'margin': '0 5px'
    }
};

const AccountItem = ({item}) => {
    return (
    <Card>
        <CardText style={{'textAlign': 'left'}}>
            <h4>{item.account} </h4>
            <p style={{'display': 'inline-block'}}>{item.name} </p>
            <small style={{'float': 'right'}}>{item.date.toLocaleString()}</small>
            <p>${item.amount} </p>
            <Chip style={styles.chip}>{item.type}</Chip>
            <div style={{ 'clear': 'both'}}></div>
        </CardText>
    </Card>
    );
};

export default AccountItem;