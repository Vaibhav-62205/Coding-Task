export default function Card({ character, onClick }) {
  return (
    <div className="card" onClick={() => onClick(character)}>
      {character.name}
    </div>
  );
}
