import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import About from './pages/About';
import Header from './components/Header'

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/sign-up" element={<Signup />} />
    <Route path="/about" element={<About />} />

  </Routes>
  </BrowserRouter>;
}
