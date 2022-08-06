import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Menu from './components/layout/Menu/Menu';

// Lazy load - Code splitting
const Home = React.lazy(() => import('./views/Home'));
const Post = React.lazy(() => import('./views/Post'));
const Categogy = React.lazy(() => import('./views/Categogy'));
const Contact = React.lazy(() => import('./views/Contact'));
const NotFound = React.lazy(() => import('./views/NotFound'));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<>Loading ...</>}>
        <BrowserRouter>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/*" element={<Post />} />
            <Route path="/categogies/*" element={<Categogy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
}
export default App;
