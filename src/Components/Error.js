import Alert from 'react-bootstrap/Alert';
function Code() {
    return(
        <div style={{marginLeft: "300px", marginRight: "300px"}}>
            <Alert key="danger" variant="danger">
            <Alert.Heading>Sorry, This Tab is not available!</Alert.Heading>
            <p>
                We are not able to fetch the content for this tab right now. Please try again later!
            </p>
                
            </Alert>
        </div>
    )
}
export default Code;