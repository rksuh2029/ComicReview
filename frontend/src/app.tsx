import { useEffect, useState } from "react";

type Comic = {
  id: number;
  title: string;
};

function Home() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/comics")
      .then((response) => {
        if (!response.ok) throw new Error(`API returned ${response.status}`);
        return response.json();
      })
      .then((data: Comic[]) => setComics(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Comicboxd</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Couldn't reach the API: {error}</p>}
      {!loading && !error && comics.length === 0 && <p>No comics yet.</p>}

      {comics.map((comic) => (
        <p key={comic.id}>{comic.title}</p>
      ))}
    </div>
  );

  
}


import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navigation">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Home; Header;