import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function BadgeComponent(props) {
    const color = "#" + props.color;
    return(
        <React.Fragment>
            {
                props.description != null ?
                <OverlayTrigger key="top" placement="top"
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            {props.description}
                        </Tooltip>
                    }
                >
                    <span style={{backgroundColor: color, borderRadius: "8px", fontSize: "13px", fontWeight: "600", marginLeft: "5px", padding: "5px"}} >{props.name}</span>
                </OverlayTrigger> :
                <OverlayTrigger key="top" placement="top"
                overlay={
                    <Tooltip id={`tooltip-top`}>
                        No description given!
                    </Tooltip>
                }
            >
                 <span style={{backgroundColor: color, borderRadius: "8px", fontSize: "13px", fontWeight: "600", marginLeft: "5px", padding: "5px"}} >{props.name}</span>
        </OverlayTrigger>
            }
           
        </React.Fragment>
    )
}
export default BadgeComponent;