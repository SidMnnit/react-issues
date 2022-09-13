import React from "react";

function BadgeComponent(props) {
    const color = "#" + props.color;
    return(
        <React.Fragment>
            <span style={{backgroundColor: color, borderRadius: "8px", fontSize: "13px", fontWeight: "600", marginLeft: "5px", padding: "5px"}} >{props.name}</span>
        </React.Fragment>
    )
}
export default BadgeComponent;