// src/pages/HomePage.tsx
import { useEffect, useState } from "react";
import type { Character, ApiInfo } from "../types/character";
import { fetchCharacters, FIRST_PAGE } from "../services/characterApi";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";

function HomePage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<ApiInfo | null>(null);
  const [currentUrl, setCurrentUrl] = useState(FIRST_PAGE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetchCharacters(currentUrl)
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((err) => setError(err.message || "Une erreur est survenue, réessayez."))
      .finally(() => setLoading(false));
  }, [currentUrl]);

  const handlePrev = () => { if (info?.prev) setCurrentUrl(info.prev); };
  const handleNext = () => { if (info?.next) setCurrentUrl(info.next); };

  return (
    <main className="home">
      <div className="home-header">
        <h1 className="home-title">Personnages</h1>
        {info && (
          <p className="home-count">{info.count} personnages dans le multivers</p>
        )}
      </div>

      {loading && <p className="state-msg">Chargement…</p>}
      {error && <p className="state-msg error">{error}</p>}

      {!loading && !error && characters.length === 0 && (
        <p className="state-msg">Aucun personnage trouvé.</p>
      )}

      {!loading && !error && characters.length > 0 && (
        <>
          <div className="grid">
            {characters.map((c) => (
              <CharacterCard key={c.id} character={c} />
            ))}
          </div>
          <Pagination
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={!!info?.prev}
            hasNext={!!info?.next}
            loading={loading}
          />
        </>
      )}
    </main>
  );
}

export default HomePage;
