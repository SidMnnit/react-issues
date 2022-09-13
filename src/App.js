
import './App.css';
import NavBar from './Components/NavBar'
import ReactIssuesNav from './Components/ReactIssuesNav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ReactIssuesNav/>
    </div>
  );
}

export default App;
