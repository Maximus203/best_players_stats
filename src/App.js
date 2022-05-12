import MyPlayer from "./components/MyPlayer";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="bg-primary text-center text-white display-1 p-3">
        Best players stat
      </h1>
      <MyPlayer
        id={1}
        name="Sadio Mane"
        team="Liverpool"
        goal={52}
        assist={34}
      />
      <MyPlayer
        id={2}
        name="Abdoul Khoudouss Diop"
        team="Senegal"
        goal={44}
        assist={16}
      />
      <MyPlayer
        id={3}
        name="Angel Tukur"
        team="Real Madrid"
        goal={36}
        assist={20}
      />
      <MyPlayer
        id={4}
        name="Matar Mbow"
        team="Real Madrid"
        goal={24}
        assist={30}
      />
      <MyPlayer
        id={5}
        name="Mansour Sy"
        team="Barcelone"
        goal={45}
        assist={5}
      />
      <MyPlayer
        id={6}
        name="Askia Mouhamed Dieye"
        team="Manchester United"
        goal={15}
        assist={35}
      />
      <MyPlayer
        id={7}
        name="Cherif Diouf"
        team="ASC Manko"
        goal={0}
        assist={2}
      />
    </div>
  );
}
