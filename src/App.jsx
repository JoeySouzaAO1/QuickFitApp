
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkoutCard from './components/WorkoutCard';

function App() {
  
   return (
   <Router>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path="/workout/:workoutType" element={<WorkoutCard />} />
            </Routes>
    </Router>
   )


    /* return(
<LandingPage/>
)
   */
}

export default App
