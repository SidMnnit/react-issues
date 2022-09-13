
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import IssueNav from './IssueNav';
import IssueList from './IssueList';

function IssuesContent() {
    return(
        <div style={{marginLeft: "100px", marginRight: "100px"}}>   
            <InputGroup className="mb-3">
                <Form.Control placeholder="is:issue is:open" aria-describedby="basic-addon1"/>
                <ButtonGroup aria-label="Basic example" style={{marginLeft: "20px"}}>
                    <Button variant="outline-secondary"><span><i class="bi bi-tag"></i></span> Labels</Button>
                    <Button variant="outline-secondary"><span><i class="bi bi-signpost"></i></span> Milestones</Button>
                </ButtonGroup>
                <ButtonGroup><Button variant="success" style={{marginLeft: "20px"}} >New Issue</Button></ButtonGroup>
            </InputGroup>
            <IssueNav/>
            <IssueList/>
        </div>
    )
}
export default IssuesContent;