import React from 'react';

const Post = ({match}) => (
    <div>
        <h2>
            Post {match.params.id}
        </h2>
    </div>
)

export default Post;