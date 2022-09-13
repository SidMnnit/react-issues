import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';
import Error from './Error';
import '../Style/TabStyle.css'
import IssuesContent from './IssuesContent'

function ContentTab() {
    return(
        <React.Fragment>
            <div>
                <Tabs defaultActiveKey="issue" className="mb-3" style={{backgroundColor: "rgb(235, 239, 240)"}}>
                    <Tab eventKey="home" title="<> Code">
                        <Error/>
                    </Tab>
                    <Tab eventKey="issue" title={<span><i class="bi bi-record-circle"></i> Issues</span>}>
                        <IssuesContent/>
                    </Tab>
                    <Tab eventKey="pr" title={<span><i class="bi bi-bezier2"></i> Pull Requests</span>}>
                    <Error/>
                    </Tab>
                    <Tab eventKey="action" title={<span><i class="bi bi-play-circle"></i> Actions</span>}>
                    <Error/>
                    </Tab>
                    <Tab eventKey="project" title={<span><i class="bi bi-columns"></i> Projects</span>}>
                    <Error/>
                    </Tab>
                    <Tab eventKey="wiki" title={<span><i class="bi bi-book"></i> Wiki</span>}>
                    <Error/>
                    </Tab>
                    <Tab eventKey="security" title={<span><i class="bi bi-shield-exclamation"></i> Security</span>}>
                    <Error/>
                    </Tab>
                    <Tab eventKey="insights" title={<span><i class="bi bi-graph-up"></i> Insights</span>}>
                    <Error/>
                    </Tab>
                </Tabs>
            </div>
            
        </React.Fragment>
    )
    
}
export default ContentTab;