import './App.css';
import './ContenidoPrincipal/Principal.css'
import './ContenidoPrincipal/Principal'
import './Footer/Footer.css'
import './Footer/Footer'

import TodoHeader from './TodoHeader';

import ContenidoPrincipal from './ContenidoPrincipal/Principal';
import Footer from './Footer/Footer';


function App() {
  return (

    <div>
      <TodoHeader
      xd={"Conociendote mas"}
      />

      <TodoHeader/>

        <ContenidoPrincipal/>

        <Footer/>
    </div>


    
  );
}

export default App;
