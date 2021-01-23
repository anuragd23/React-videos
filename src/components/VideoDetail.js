import React from 'react';

const VideoDetail = ({ selectedVideo }) => { 
    if(!selectedVideo) {
        return <div>Loading...</div>
    }; 
    return(
        <div>
            <div className="ui segment">
                <h4 className="ui header">{selectedVideo.snippet.title}</h4> 
                <p>{selectedVideo.snippet.description}</p>
            </div>         
        </div>
    ); 
};

export default VideoDetail;