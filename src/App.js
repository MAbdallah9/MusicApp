
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Experience from './Experience';
import Search from './Search';
import Download from './Download';
import Footer from './Footer';

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
