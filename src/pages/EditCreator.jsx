import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "../client";

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

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
      setFormData({
        name: data.name || "",
        url: data.url || "",
        description: data.description || "",
        imageURL: data.imageURL || "",
      });
    } catch (error) {
      console.error("Error fetching creator:", error);
      alert("Failed to load creator");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase
        .from("creators")
        .update(formData)
        .eq("id", id);

      if (error) throw error;

      navigate(`/view/${id}`);
    } catch (error) {
      console.error("Error updating creator:", error);
      alert("Failed to update creator. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading creator</div>;
  }

  return (
    <div>
      <nav>
        <Link to={`/view/${id}`} style={{ textDecoration: "none" }}>
          ← Back to Creator
        </Link>
      </nav>
      <header>
        <h1>Edit Creator</h1>
      </header>

      <article>
        <form onSubmit={handleSubmit} className="creator-form">
          <label htmlFor="name">
            Name *
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Creator's name"
            />
          </label>

          <label htmlFor="url">
            URL *
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
              placeholder="https://example.com"
            />
          </label>

          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about this creator..."
            />
          </label>

          <label htmlFor="imageURL">
            Image URL
            <input
              type="url"
              id="imageURL"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </label>

          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "flex-end",
            }}
          >
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="secondary"
            >
              Cancel
            </button>
            <button type="submit" disabled={submitting} className="primary">
              {submitting ? "Updating..." : "Update Creator"}
            </button>
          </div>
        </form>
      </article>
    </div>
  );
}

export default EditCreator;
