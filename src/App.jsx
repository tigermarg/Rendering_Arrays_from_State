import { useState } from 'react';
import './App.css';
import { learnerData } from './utilities/data';
import Learner from './components/Learner';

function App() {
  const [learnerData, setLearnerData] = useState([])

  function newLearner(){
    let newArr = {
      learners: [...learnerData]
    }
    setLearnerData(newArr)
  }
  
    return (
      <>
        {learnerData.learners.map((learner, index) => ( //Error reading map (undefined)
          <Learner key={index} learner={learner} />
        ))}
        
        {newLearner}

      </>
    );
  };

  export default App;