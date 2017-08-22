import React from 'react';
import Subheader from 'material-ui/Subheader';
import Chip from 'material-ui/Chip';
import AccountItem from './AccountItem';

const styles = {
    chip: {
        float: 'left',
        'margin': '0 5px'
    }
};

const AccountHistory = ({history}) => {
    return (
    <div>
        <Subheader><h2>Account History</h2></Subheader>
        {history.map((item, i) =>(
            <AccountItem key={i} item={item} />
        ))}
        <div style={{ 'clear': 'both'}}></div>
        <hr/>             
    </div>
    );
};

export default AccountHistory;