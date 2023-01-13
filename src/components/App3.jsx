import React from 'react'
import { BrowserRouter as Router,Routes,Route, } from "react-router-dom";
import App from './App';
import App2 from './App2';

const App3 = () => {
  return (
    <Router>
    <Routes>
     <Route path="/" element={<App/>}/>
     <Route path="/app2" element={<App2/>}/>
      
    </Routes>
    </Router>
  )
}

export default App3
