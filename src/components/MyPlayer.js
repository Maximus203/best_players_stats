export default function MyPlayer({ id, name, team, goal, assist }) {
  return (
    <div>
      <h3 className="text-center alert-info text-info m-2 display-1 rounded">
        Player {id}
      </h3>
      <ul type="square">
        <li className="alert-success text-success m-2 display-2 rounded">
          Name : {name}
        </li>
        <li className="alert-dark text-dark m-2 display-2 rounded">
          Team : {team}
        </li>
        <li className="alert-danger text-danger m-2 display-2 rounded">
          Goal : {goal}
        </li>
        <li className="alert-danger text-danger m-2 display-2 rounded">
          Assist : {assist}
        </li>
        <li className="bg-danger text-white m-2 display-2 rounded">
          Trophees :
          {goal + assist >= 70 ? "Give him its BO" : "Needs to work !"}
        </li>
      </ul>
    </div>
  );
}
