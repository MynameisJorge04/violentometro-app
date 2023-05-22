import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

//Imagenes:
import AlumnoImagen from "./assets/alumno.png";
import DocenteImagen from "./assets/docente.png";
import OtroImagen from "./assets/otro.png";
import ImagenEncuestaAlumnos from "./assets/encuestaAlumno.png";
import ImagenEncuestaAlumnoDocente from "./assets/encuestaAlumnoDocente.png";

//Componentes:

import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import TodoViolentometroSection from "./TodoViolentometroSection";
import TodoSaberMas from "./TodoSaberMas";
import TodoButtonHome from "./TodoButtonHome";
import TodoSlider from "./TodoSlider";
import TodoTextEncuesta from "./TodoTextEncuesta";
import TodoImageEncuesta from "./TodoImageEncuesta";
import FormAlumno from "./TodoForm";
import TodoNavigationBar from "./TodoNavigationBar";
import TodoCrud from "./TodoCrud";

function App() {
  return (
    <Router>
      <div className="app--general">
        <Routes>
          <Route
            path="/"
            element={
              <section>
                  <TodoNavigationBar/>
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
                    "Para nosotros es importante conocer tu posición en la comunidad escolar, elige alguna de las siguientes opciones que se acomode a tu situación:"
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
                    "Selecciona la opción que se ajuste a la relación en la que estés interesado o a lo que deseas conocer..."
                  }
                />
                <TodoImageEncuesta imgSrc={ImagenEncuestaAlumnos} linkTo="/encuesta-form" caption={"Alumno - Alumno"}/>
                <TodoImageEncuesta imgSrc={ImagenEncuestaAlumnoDocente} caption={"Alumno - Docente"}/>
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

          <Route
            path="/administrador"
            element={
              <section >
                <TodoHeader
                  xd={"Administracion"}
                />
                <TodoCrud/>
                <Link className="button--inicio" to="/">
                  <button>Inicio</button>
                </Link>
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
