import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import ProductDescription from "./pages/ProductDescription";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import FinishOrder from "./components/FinishOrder";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <main className=" font-encode mt-20 bg-[#F2F2F2] h-screen overflow-y-scroll pt-5">
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/description" element={<ProductDescription/>}/>
          </Routes>
        </main>
      </Router>
      <FinishOrder/>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
