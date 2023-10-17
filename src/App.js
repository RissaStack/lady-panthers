import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './Page';

const pages = ["Freshman", "Home", "Jv", "Photogallery", "Schedule", "Varsity"];

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  return (
    <div className="wrapper">
      <Header pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
