import { Link } from "react-router-dom";
import "../App.css";

function CreatorCard({ creator }) {
  const { name, url, description, imageURL } = creator;

  return (
    <article className="creator-card">
      {imageURL && <img src={imageURL} alt={name} className="creator-image" />}
      <header>
        <h3>
          <Link to={`/view/${creator.id}`} className="creator-name-link">
            {name}
          </Link>
        </h3>
      </header>
      {description && <p>{description}</p>}
      <footer>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="secondary"
        >
          🌐 Visit Channel
        </a>
      </footer>
    </article>
  );
}

export default CreatorCard;
