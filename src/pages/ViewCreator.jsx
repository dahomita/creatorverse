import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "../client";

function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreator();
  }, [id]);
  const fetchCreator = async () => {
    try {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      setCreator(data);
    } catch (error) {
      console.error("Error fetching creator:", error);
      alert("Error fetching creator. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this creator?")) {
      try {
        const { error } = await supabase.from("creators").delete().eq("id", id);
        if (error) throw error;
        navigate("/");
      } catch (error) {
        console.error("Error deleting creator:", error);
        alert("Error deleting creator. Please try again later.");
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading creator</div>;
  }
  if (!creator) {
    return (
      <article>
        <p>Creator not found</p>
        <Link to="/">Back to Creators</Link>
      </article>
    );
  }
  return (
    <div>
      <nav>
        <Link to="/">← Back to Creators</Link>
      </nav>
      <article className="creator-detail">
        {creator.imageURL && (
          <img
            src={creator.imageURL}
            alt={creator.name}
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        )}
        <header>
          <h1>{creator.name}</h1>
        </header>
        {creator.description && (
          <p className="description">{creator.description}</p>
        )}

        <footer style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            className="primary"
          >
            🌐 Visit Creator's Page
          </a>
          <Link to={`/edit/${creator.id}`} role="button" className="secondary">
            ✏️ Edit Creator
          </Link>
          <button onClick={handleDelete} className="contrast">
            🗑️ Delete Creator
          </button>
        </footer>
      </article>
    </div>
  );
}

export default ViewCreator;
