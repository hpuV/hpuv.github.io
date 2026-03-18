/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CV from './components/CV';
import Projects from './components/Projects';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import { ThemeProvider } from './components/ThemeProvider';

function Home() {
  return (
    <>
      <Hero />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <div className="min-h-screen bg-bg flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/highlights" element={<Highlights />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}
