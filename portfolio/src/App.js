import { BrowserRouter  as Router, Routes, Route, Link }  from 'react-router-dom'
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Services from './Components/pages/Services';
import Contact from './Components/pages/Contact';

import Container from './Components/layout/Container';

function App() {
  return (
       <Router>
              <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
              </div>
              <Container  customClass="min-height">
                      <Routes>
                            <Route   path='/'    element={<Home />}   />
                            <Route   path='/about'    element={<About />}   />
                            <Route   path='/services'    element={<Services />}   />
                            <Route   path='/contact'    element={<Contact />}   />
                      </Routes>
            </Container>      
              <p>Footer</p>
       </Router>
  );
}

export default App;
