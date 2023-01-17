import { BrowserRouter  as Router, Routes, Route, Link }  from 'react-router-dom'
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Services from './Components/pages/Services';
import Contact from './Components/pages/Contact';

import Container from './Components/layout/Container';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';

function App() {
  return (
       <Router>
                <Navbar />
              <Container  customClass="min-height">
                      <Routes>
                            <Route   path='/'    element={<Home />}   />
                            <Route   path='/about'    element={<About />}   />
                            <Route   path='/services'    element={<Services />}   />
                            <Route   path='/contact'    element={<Contact />}   />
                      </Routes>
            </Container>      
               <Footer />
       </Router>
  );
}

export default App;
