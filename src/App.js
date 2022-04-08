import logo from './logo.svg';
import './App.css';
import Testimonio from './components/Testimonio.jsx';



function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio 
          nombre='Jack Baso'
          pais='USA'
          imagen='jack'
          cargo='Software Engineer'
          empresa='Amazon'
          testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
        <Testimonio 
          nombre='Karina Chiru'
          pais='Canada'
          imagen='karina'
          cargo='Software Engineer'
          empresa='ChatDesk'
          testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
        />
        <Testimonio 
          nombre='Lucia Roterdam'
          pais='Spain'
          imagen='lucia'
          cargo='Frontend Developer'
          empresa='Spotify'
          testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
        />
      </div>
    </div>
  );
}

export default App;
