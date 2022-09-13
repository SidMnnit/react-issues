import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ContentTab from './ContentTab';

function ReactIssuesNav() {
    return(
        <div>
            <Navbar style={{backgroundColor: "rgb(235, 239, 240)"}}>
                <div style={{marginLeft: "20px"}}>
                    <Navbar.Brand href="#" style={{color: "rgb(50, 184, 233)"}}> facebook / react {'  '}<Badge bg="secondary" pill >Public</Badge></Navbar.Brand>
                    
                </div>
                <Navbar.Toggle />
                <Container>
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Navbar.Brand><Button variant="outline-secondary" size='sm'><i class="bi bi-bell"></i>{'   '}Notifications</Button></Navbar.Brand>
                            <Navbar.Brand><Button variant="outline-secondary" size='sm'><i class="bi bi-diagram-2">{'  '}</i>Fork 2.9k</Button></Navbar.Brand>
                            <Navbar.Brand><Button variant="outline-secondary" size='sm'><i class="bi bi-star-fill"></i>{'   '}Star 4.4k</Button></Navbar.Brand>
                        </Navbar.Text>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
            <ContentTab/>
        </div> 
    )
}

export default ReactIssuesNav;