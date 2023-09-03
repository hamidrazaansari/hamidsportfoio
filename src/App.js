import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';
import Main from './components/Home/Main';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Project from './components/Project/Project';
import Skill from './components/Skill/Skill';
import Navbar from './components/Navbar/Navbar'
import ContactUs from './components/Contact Us/ContactUs';



function App() {

  return (
    <div  >

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path={'/'} element={<ErrorBoundary>  <Main />   </ErrorBoundary>} />
          <Route path={'/services'} element={<ErrorBoundary> <Services /> </ErrorBoundary>} />
          <Route path={'/project'} element={<ErrorBoundary> <Project /> </ErrorBoundary>} />
          <Route path={'/skill'} element={<ErrorBoundary> <Skill /> </ErrorBoundary>} />
          <Route path={'/contact'} element={<ErrorBoundary> <ContactUs /> </ErrorBoundary>} />

        </Routes>
        <Footer />
      </BrowserRouter>




    </div>
  );
}

export default App;
