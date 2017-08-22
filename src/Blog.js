import React from 'react';
import Subheader from 'material-ui/Subheader';
import Post from './Post';


const Blog = ({posts}) => {
     return (
         <div>
            <Subheader>
                <h2>Blog</h2>
            </Subheader>
            {posts.map((post, i) =>(
                <Post key={i} post={post}/>
             ))}
            <div style={{ 'clear': 'both'}}></div>             
         </div>
     );
};

export default Blog;