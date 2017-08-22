import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
const styles = {
    chip: {
        float: 'left',
        'margin': '0 5px'
    }
};

const Post = ({post}) => {
    return (
    <Card>
        <CardText style={{'textAlign': 'left'}}>
            <p>{post.sentences} </p>
            {post.words.split(" ").map((word, i) =>  <Chip key={i} style={styles.chip}>{word}</Chip>)}
            <div style={{ 'clear': 'both'}}></div>
        </CardText>
    </Card>
    );
};

export default Post;