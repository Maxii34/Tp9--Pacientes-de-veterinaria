import "bootstrap/dist/css/bootstrap.min.css";
import NavVeterinaria from "./Components/NavVeterinaria";
import FooterVeterinaria from "./Components/FooterVeterinaria";
import ImputFormulario from "./Components/ImputFormulario";
import "./App.css";


function App() {
  return (
    <>
      <NavVeterinaria />
      <main>
        <ImputFormulario />
      </main>
      <FooterVeterinaria />
    </>
  );
}

export default App;
