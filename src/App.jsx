import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Pagination from "./components/Pagination";
import "./App.css";

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);

  const updatePage = (p) => {
    setSearchParams({ page: p });
  };

  const fetchCharacters = async (pageNum) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`https://swapi.dev/api/people/?page=${pageNum}`);
      if (!res.ok) throw new Error();

      const data = await res.json();

      setCharacters(data.results.slice(0, 9));
      setTotalPages(Math.ceil(data.count / 10));
    } catch {
      setError("⚠️ Failed to fetch data. API might be down.");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  return (
    <div className="container">
      <h1 className="title">Star Wars Characters</h1>

      {loading && <Loader />}
      {error && <Error message={error} />}

      <div className="grid">
        {characters.map((c, i) => (
          <Card key={i} character={c} onClick={setSelected} />
        ))}
      </div>

      <Pagination page={page} setPage={updatePage} totalPages={totalPages} />

      {selected && (
        <Modal character={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
