import React from "react";

function GiphyLoad(props) {
    const {giphy} = props;

    const loaded = () => {
        return (
            <div>
                <img src={giphy.data.images.original.url} alt=''/>
            </div>
        );
    };
    
    const loading = () => {
        return (
            <div>
                <h2>Your gif is waiting.</h2>
            </div>
        );
    };

    return giphy ? loaded() : loading();

};

export default GiphyLoad;


