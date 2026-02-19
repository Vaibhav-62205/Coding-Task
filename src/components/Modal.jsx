export default function Modal({ character, onClose }) {
  const heightMeters = (character.height / 100).toFixed(2);
  const date = new Date(character.created);
  const formattedDate = date
    .toLocaleDateString("en-GB")
    .split("/")
    .join("-");

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{character.name}</h2>

        <p><b>Height:</b> {heightMeters} m</p>
        <p><b>Mass:</b> {character.mass} kg</p>
        <p><b>Birth Year:</b> {character.birth_year}</p>
        <p><b>Films:</b> {character.films.length}</p>
        <p><b>Added:</b> {formattedDate}</p>

        <button className="closeBtn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
