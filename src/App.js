import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Router>
        <div className="">
          <h1>
            This is the Nav Bar
          </h1>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
