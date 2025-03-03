
import LandingPage from './components/LandingPage'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
}

export default App

