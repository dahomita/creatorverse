import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreators();
  }, []);
  const fetchCreators = async () => {
    try {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .order("name", { ascending: true });
      if (error) throw error;
      setCreators(data || []);
    } catch (error) {
      console.error("Error fetching creators:", error);
      alert("Error fetching creators. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this creator?")) {
      try {
        const { error } = await supabase.from("creators").delete().eq("id", id);
        if (error) throw error;
        fetchCreators();
      } catch (error) {
        console.error("Error deleting creator:", error);
        alert("Error deleting creator. Please try again later.");
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading creators</div>;
  }

  return (
    <div>
      <header className="page-header">
        <h1>CreatorVerse</h1>
        <Link to="/add" role="button" className="primary">
          ➕ Add New Creator
        </Link>
      </header>

      {creators.length === 0 ? (
        <article className="empty-state">
          <p>No creators found. Add your first creator!</p>
          <Link to="/add" role="button" className="primary">
            Add Creator
          </Link>
        </article>
      ) : (
        <div className="creators-grid">
          {creators.map((creator) => (
            <div key={creator.id}>
              <CreatorCard creator={creator} />
              <div className="card-actions">
                <Link
                  to={`/edit/${creator.id}`}
                  role="button"
                  className="secondary"
                >
                  ✏️ Edit
                </Link>
                <button
                  onClick={() => handleDelete(creator.id)}
                  className="contrast"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default ShowCreators;
