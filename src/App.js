import React from 'react';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Home from './components/Home';
import Quote from './components/Quote';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <Home ></Home>
        <About></About>
        <Services></Services>
        <Quote></Quote>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
