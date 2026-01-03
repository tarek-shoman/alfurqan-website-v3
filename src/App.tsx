import React, { Suspense, useEffect } from 'react'; 
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Hero = React.lazy(() => import('./components/Hero'));
const Features = React.lazy(() => import('./components/Features'));

const About = React.lazy(() => import('./components/About'));
const Programs = React.lazy(() => import('./components/Programs'));
const QuranSchool = React.lazy(() => import('./components/QuranSchool'));
// const Gallery = React.lazy(() => import('./components/Gallery'));
const Contact = React.lazy(() => import('./components/Contact'));
const Jobs = React.lazy(() => import('./components/Jobs'));
const OnlineNursery = React.lazy(() => import('./components/OnlineNursery'));
const NotFound = React.lazy(() => import('./components/NotFound'));

function AppContent() {
  const location = useLocation();
  const isNotFoundPage = location.pathname === "*" || location.pathname.includes("404") || 
    !["/", "/about", "/programs", "/quran-school", "/contact", "/jobs", "/online-nursery"].includes(location.pathname);

  return (
    <div className={`min-h-screen bg-cream-50 dark:bg-dark-surface ${isNotFoundPage ? '' : 'pt-16'}`} dir='ltr'> 
      {!isNotFoundPage && <Navbar />}
      
      <Suspense fallback={<LoadingSpinner />}> 
        <Routes>
          
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Features />
              </>
            } 
          />
          
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/quran-school" element={<QuranSchool />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />}/>
          <Route path="/online-nursery" element={<OnlineNursery />}/>
          
          <Route path="*" element={<NotFound />} />
        
        </Routes>
      </Suspense>
      
      {!isNotFoundPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <HashRouter> 
      <ScrollToTop />
      <AppContent />
    </HashRouter>
  );
}

export default App;

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600 dark:border-accent-600"></div>
      <p className="mr-4 text-primary-700 dark:text-accent-500 font-semibold">جاري التحميل...</p>
    </div>
  );
}