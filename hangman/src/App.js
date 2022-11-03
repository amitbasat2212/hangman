
import './App.css';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'


function App() {
  return (
    <div className="App">
       <div>
        <div className="ex-space">
         <Score/>
         <Solution/>        
         <Letters/>
        </div>
    </div>
    </div>
  );
}

export default App;
