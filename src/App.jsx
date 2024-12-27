import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dragn from './components/Dragn';
import Copy from './components/Copy';
import Customizer from './components/Customizer';
import Past from './components/Past';

export const MyDragonContext = createContext();

function App() {
  const [cardList, setCardList] = useState([
    { id: 1, order: 3, text: "CARD 3" },
    { id: 2, order: 1, text: "CARD 1" },
    { id: 3, order: 2, text: "CARD 2" },
    { id: 4, order: 4, text: "CARD 4" },
  ]);

  return (
    <Router>
      <MyDragonContext.Provider value={{ cardList, setCardList }}>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <nav className="bg-gradient-to-r from-gray-600 to-gray-800 text-white p-6 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
            <div className="space-x-6 ml-[500px]" >
                <Link to="/dragn" className="text-lg font-medium px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300">Dragn</Link>
                <Link to="/copy" className="text-lg font-medium px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300">Copy</Link>
                <Link to="/past" className="text-lg font-medium px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300">Past</Link>
                <Link to="/customizer" className="text-lg font-medium px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300">Customizer</Link>
              </div>
            </div>
          </nav>

          <div className="container mx-auto flex-grow p-8">
            <Routes>
              <Route path="/copy" element={<Copy />} />
              <Route path="/dragn" element={<Dragn />} />
              <Route path="/customizer" element={<Customizer />} />
              <Route path="/past" element={<Past />} />
            </Routes>
          </div>
        </div>
      </MyDragonContext.Provider>
    </Router>
  );
}

export default App;
