import React from "react";

function StyleButton(props) {
    return(
        <button onClick={() => props.click(props.pageStyle)}>
            {props.text}
        </button>
    );
}

export default StyleButton;