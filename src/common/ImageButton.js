import React from "react";

function ImageButton(props){
    return(
        <button>
            <a href={props.link}>
                <img src={props.image} alt={props.alt}/>
            </a> 
        </button>
    );
}

export default ImageButton;