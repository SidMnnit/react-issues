import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import BadgeComponent from "./BadgeComponent";

function ItemRow(props) {
    return(
        <React.Fragment>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start list-group-item-action">
                    <div className="ms-1 me-auto" style={{textAlign: "left"}}>
                        <div className="fw-bold" ><span> <i class="bi bi-record-circle" style={{color: "green"}}>{'  '}</i></span>  
                            {props.title} {'  '}
                            {
                                props.labels.map((label, idx)=>(
                                    <BadgeComponent name={label.name} color={label.color} description={label.description}/>
                                ))
                            }
                        </div>
            
                        <div>
                            <p style={{marginLeft: "20px", fontSize: "14px", color:"gray", fontWeight: "600"}}>#{props.id} opened by {props.userName}</p>
                        </div>
                    </div>
                    {
                        props.comment != 0 ? 
                        <React.Fragment>
                            <i class="bi bi-chat-left"></i>
                            <span style={{fontSize: "13px", fontWeight: "600", marginLeft: "5px"}}>
                                {props.comment}
                            </span>
                        </React.Fragment> : ""
                    }
            </ListGroup.Item>
        </React.Fragment>
    )
}
export default ItemRow;