import React from 'react';
import './App.css';

import TodoHeader from './TodoHeader';
import ContenidoPrincipal from './TodoContenidoPrincipal'
import TodoFooter from './TodoFooter';
import TodoViolentometroSection from './TodoViolentometroSection';
import TodoSaberMas from './TodoSaberMas';
import TodoButtonHome from './TodoButtonHome';
import TodoSlider from './TodoSlider';


function App() {
  return (

    <div className="app--general">

      <TodoHeader
      xd={"Instituto Politecnico Nacional"}
      />
      <TodoSlider/>
      <TodoViolentometroSection/>
      <TodoSaberMas/>
      <TodoButtonHome/>
      <TodoFooter/>
    </div>


    
  );
}

export default App;
