import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../client";

function AddCreator() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });
  const [submitting, setSubmitting] = useState(false);

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
      const { error } = await supabase.from("creators").insert([formData]);

      if (error) throw error;

      navigate("/");
    } catch (error) {
      console.error("Error adding creator:", error);
      alert("Failed to add creator. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          ← Back to Creators
        </Link>
      </nav>
      <header>
        <h1>Add New Creator</h1>
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
              onClick={() => navigate("/")}
              className="secondary"
            >
              Cancel
            </button>
            <button type="submit" disabled={submitting} className="primary">
              {submitting ? "Adding..." : "Add Creator"}
            </button>
          </div>
        </form>
      </article>
    </div>
  );
}

export default AddCreator;
