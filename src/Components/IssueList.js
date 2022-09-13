
import React from "react";
import ItemRow from "./ItemRow"
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
class IssueList extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: []
        };
    }
   
    componentDidMount() {
        fetch(
            "https://api.github.com/repos/facebook/react/issues")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                });
            })
    }

    render() {
        const {items } = this.state;
        return (
        <div >
            <ListGroup as="ol" >
                {items.map((item) => ( 
                    <ItemRow 
                        title={item.title} 
                        comment={item.comments}
                        id={item.number}
                        userName={item.user.login}
                        labels={item.labels}
                    />))
                }
            </ListGroup>
        </div>
    );
}
}
   
export default IssueList;