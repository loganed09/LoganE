import './App.css';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <body>
      <header>
        <NavBar />
      </header>
      <div>
        <About />
        <Projects />
      </div>
    </body>
  );
}

export default App;
