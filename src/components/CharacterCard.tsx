
import { useNavigate } from "react-router-dom";
import type { Character } from "../types/character";

type Props = { character: Character };

function CharacterCard({ character }: Props) {
  const navigate = useNavigate();
  const statusColor =
    character.status === "Vivant" ? "#4ade80" :
    character.status === "Mort" ? "#f87171" : "#94a3b8";

  return (
    <div className="card" onClick={() => navigate(`/character/${character.id}`)}>
      <div className="card-img-wrapper">
        <img src={character.image} alt={character.name} className="card-img" />
        <span className="card-status" style={{ background: statusColor }}>
          {character.status}
        </span>
      </div>
      <div className="card-body">
        <h2 className="card-name">{character.name}</h2>
        <p className="card-species">{character.species}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
