// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  // Función para hacer scroll al footer
  const handleScrollToFooter = () => {
    const footer = document.getElementById('footer'); // Obtiene el Footer por id
    if (footer) {
      footer.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start', // Alinea al principio
      });
    }
  };

  return (
    <Router>
      <Header onScrollToFooter={handleScrollToFooter} /> {/* Pasa la función al Header */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
      <Footer id="footer" /> {/* Asegúrate de que el Footer tenga el id "footer" */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
