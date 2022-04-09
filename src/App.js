import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import MyList from './Pages/MyList';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myList" element={<MyList />} />
      </Routes>
    </div>
  );
}

export default App;
