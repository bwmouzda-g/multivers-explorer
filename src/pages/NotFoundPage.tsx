
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="introuvable">
      <h1>404</h1>
      <p>Page introuvable dans ce multivers.</p>
      <Link to="/"><button>← Retour à l'accueil</button></Link>
    </main>
  );
}

export default NotFoundPage;
