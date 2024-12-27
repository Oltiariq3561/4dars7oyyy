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
          <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between">
              <h1 className="text-2xl font-bold">Hello</h1>
              <div>

                <Link to="/dragn" className="px-4 py-2 hover:bg-blue-700 rounded-md">
                  Dragn
                </Link>
                <Link to="/copy" className="px-4 py-2 hover:bg-blue-700 rounded-md">Copy</Link>
                <Link to="/customizer" className='px-4 py-2 hover:bg-blue-700 rounded-md'>Customizer</Link>
                <Link to="/past" className='px-4 py-2 hover:bg-blue-700 rounded-md'>Past</Link>
              </div>
            </div>
          </nav>

          <div className="container mx-auto flex-grow p-6">
            <Routes>
              <Route path='/copy' element={<Copy />} />
              <Route path="/dragn" element={<Dragn />} />
              <Route path='/customizer' element={<Customizer />}></Route>
              <Route path='/past' element={<Past />}></Route>
            </Routes>
          </div>
        </div>
      </MyDragonContext.Provider>
    </Router>
  );
}

export default App;
