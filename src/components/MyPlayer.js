export default function MyPlayer(params) {
  return (
    <div>
      <h3 className="text-center alert-info text-info p-2 display-1 rounded">
        Player {params.id}
      </h3>
      <ul type="square">
        <li className="alert-success text-success p-2 display-2 rounded">
          Name : {params.name}
        </li>
        <li className="alert-dark text-dark p-2 display-2 rounded">
          Team : {params.team}
        </li>
        <li className="alert-danger text-danger p-2 display-2 rounded">
          Goal : {params.goal}
        </li>
        <li className="alert-danger text-danger p-2 display-2 rounded">
          Assist : {params.assist}
        </li>
        <li className="bg-danger text-white p-2 display-2 rounded">
          Trophees : {params.goal + params.assist}
        </li>
      </ul>
    </div>
  );
}
