import React from "react";

function StyleButton(props) {
    return(
        <button className="btn-style-option" id={"btn-" + props.pageStyle} onClick={() => props.click(props.pageStyle)}>
            {props.text}
        </button>
    );
}

export default StyleButton;