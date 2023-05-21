import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Imagenes:
import AlumnoImagen from "./assets/alumno.png";
import DocenteImagen from "./assets/docente.png";
import OtroImagen from "./assets/otro.png";
import ImagenEncuestaAlumnos from "./assets/encuestaAlumno.png";
import ImagenEncuestaAlumnoDocente from "./assets/encuestaAlumnoDocente.png";

//COmponentes:

import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import TodoViolentometroSection from "./TodoViolentometroSection";
import TodoSaberMas from "./TodoSaberMas";
import TodoButtonHome from "./TodoButtonHome";
import TodoSlider from "./TodoSlider";
import TodoTextEncuesta from "./TodoTextEncuesta";
import TodoImageEncuesta from "./TodoImageEncuesta";
import FormAlumno from "./TodoForm";

function App() {
  return (
    <Router>
      <div className="app--general">
        <Routes>
          <Route
            path="/"
            element={
              <section>
                <TodoHeader xd={"Instituto Politecnico Nacional"} />
                <TodoSlider />
                <TodoViolentometroSection />
                <TodoSaberMas />
                <TodoButtonHome />
              </section>
            }
          />
          <Route
            path="/encuesta-inicio"
            element={
              <section className="encuesta--imagen">
                <TodoHeader xd={"Conociendote mas"} />
                <TodoTextEncuesta
                  texto={
                    "Elige alguna de las siguientes opciones que se acomode a tu situación:"
                  }
                />
                <TodoImageEncuesta imgSrc={DocenteImagen} caption={"Docente"}/>
                <TodoImageEncuesta imgSrc={AlumnoImagen} caption={"Alumno"}  linkTo="/encuesta-segundopaso" />
                <TodoImageEncuesta imgSrc={OtroImagen} caption={"Otro"} />
              </section>
            }
          />

          <Route
            path="/encuesta-segundopaso"
            element={
              <section className="encuesta--imagen">
                <TodoHeader
                  xd={"VIOLENTOMETRO, SÍ LA VIOLENCIA TAMBIEN SE MIDE"}
                />
                <TodoTextEncuesta
                  texto={
                    "Elige alguna de las siguientes opciones quese acomoden a tus necesidades o de lo que quieras saber..."
                  }
                />
                <TodoImageEncuesta imgSrc={ImagenEncuestaAlumnos} linkTo="/encuesta-form"/>
                <TodoImageEncuesta imgSrc={ImagenEncuestaAlumnoDocente} />
              </section>
            }
          />

          <Route
            path="/encuesta-form"
            element={
              <section >
                <TodoHeader
                  xd={"VIOLENTOMETRO, SÍ LA VIOLENCIA TAMBIEN SE MIDE"}
                />
                <FormAlumno/>
              </section>
            }
          />
        </Routes>
        <TodoFooter />
      </div>
    </Router>
  );
}

export default App;
