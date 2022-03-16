import Landingpage from '../src/Pages/Landingpage/Landingpage'
import Singlepage from './Pages/Singlepage/Singlepage';
import{Route,Routes } from 'react-router-dom'

function App() {
  return (
   
    <div className="App">
       <Routes>
    <Route exact path="/" element={<Landingpage/>}/>
    <Route exact path="/post/:id" element={<Singlepage/>}/>

       </Routes>
      
    </div>
  );
}

export default App;
