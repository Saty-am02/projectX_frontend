import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./componetnts/Navbar";
import Home from "./pages/Home";
import Evaluate from "./pages/Evaluate";
import Results from "./pages/Results";
import EvalutionNavbar from "./componetnts/EvalutionNavbar";
import Exam from "./pages/evalutepages/Exam";
import Question from "./pages/evalutepages/Question";
import Script from "./pages/evalutepages/Script";
import DevTeam from "./componetnts/DevTeam";
import DonutChart from "./componetnts/DonutChart";

const App = () => {
  return (
    <main className='h-[100vh]'>
      <Router>
      < Navbar />
        <Routes>   
          <Route path="/" element={<Home />} />

          <Route path="/evaluate" element={
                                          <>
                                          <Evaluate />
                                          <EvalutionNavbar />
                                          </>
                                          }>
                                            <Route path="script" element={<Script />} />
                                            <Route path="question" element={<Question />} />
                                            <Route path="exam" element={<Exam />} />
          </Route>
          <Route path="/results" element={<Results />} /> 
          <Route path="/devteam" element={<DevTeam />} />

          <Route path="/doutchart" element={<DonutChart />} />
        </Routes>
      </Router>
      
    </main>
  )
}

export default App;
