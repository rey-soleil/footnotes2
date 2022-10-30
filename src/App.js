import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <div>footnotes</div>
      <Routes>
        <Route path="/create" element={<>create</>}></Route>
        <Route path="/footnotes/:id" element={<>footnote</>}></Route>
        <Route path="*" element={<>default</>}></Route>
      </Routes>
    </div>
  );
}

export default App;
