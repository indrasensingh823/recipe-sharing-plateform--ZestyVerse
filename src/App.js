import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar'; // ✅ Correct
import { Auth } from "./pages/Auth";
import { CreateRecipe } from "./pages/create-recipe";
import SubmitRecipe from './pages/SubmitRecipe';
import Home from './pages/Home.js'; // ✅ Correct way for default export
import Footer from './components/Footer';

import { SavedRecipes } from "./pages/saved-recipes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/submit" element={<SubmitRecipe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
