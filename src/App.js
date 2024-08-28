import logo from './logo.svg';
import './App.css';
import Comp1 from'./tasks/task1.js'  
import Comp2 from'./tasks/task2.jsx'
import Comp3 from'./tasks/task3.jsx'
import Comp4 from'./tasks/task4.jsx'
import ToggleButton from'./tasks/task5.jsx'

function App() {
  return (
    <div className="App">
    <Comp1></Comp1>
    <Comp2></Comp2>
    <Comp3 fname="sara" lname="fadel" age="21" uni="E-just" number="0127810" skills={["creative","problem-solving"]}>
      <h4>here is your third task</h4>
    </Comp3>
    <Comp4 course1="HTML" course2="CSS" c3="js" c4="react" c5="Angular">
      <h5>heloooo</h5>
    </Comp4>
    <ToggleButton/>
      
    </div>
  );
}

export default App;
