import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function IssueNav() {
    return(
        <div style={{height: "50px"}}>
            <Navbar style={{backgroundColor: "rgb(235, 239, 240)", height: "50px", borderRadius: "5px"}}>
                <div style={{marginLeft: "20px"}}>
                    <Navbar.Brand href="#" > <i class="bi bi-record-circle"></i><b> 805 open</b></Navbar.Brand>
                    <Navbar.Brand href="#" > 1650 closed</Navbar.Brand>
                </div>
                <Navbar.Toggle />
                <Container>
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Navbar.Brand>
                                <DropdownButton as={ButtonGroup}  variant="light" title="Author" size="sm">
                                </DropdownButton>
                            </Navbar.Brand>
                            <Navbar.Brand>
                            <DropdownButton as={ButtonGroup} variant="light" title="Label" size="sm">
                            </DropdownButton>
                            </Navbar.Brand>
                            <Navbar.Brand>
                            <DropdownButton as={ButtonGroup}  variant="light" title="Projects" size="sm">
                                </DropdownButton>
                            </Navbar.Brand>
                            <Navbar.Brand>
                            <DropdownButton as={ButtonGroup}  variant="light" title="Milestones" size="sm">
                                </DropdownButton>
                            </Navbar.Brand>
                            <Navbar.Brand>
                            <DropdownButton as={ButtonGroup}  variant="light" title="Assignee" size="sm">
                            </DropdownButton>
                            </Navbar.Brand>
                            <Navbar.Brand>
                            <DropdownButton as={ButtonGroup} variant="light" title="Sort" size="sm" >
                            </DropdownButton>
                            </Navbar.Brand>
                        </Navbar.Text>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default IssueNav;