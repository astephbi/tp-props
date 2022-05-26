import "./App.css";
import MonProfil from "./profile/MonProfil";
import Profil from "./profile/Profile";

function App() {
  return (
    <div>
      <MonProfil
        fullName="Alex"
        bio="Alex le dev rédouté"
        profession="React Dev"
      >
        <img src="./teille.jpg" alt="Bouteille" />
      </MonProfil>
    </div>
  );
}

export default App;
