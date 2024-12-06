import React, { useState } from "react";

const sampleData = [
  { id: 1, title: "Understanding React", category: "JavaScript" },
  { id: 2, title: "Introduction to Inline CSS", category: "CSS" },
  { id: 3, title: "Getting Started with Next.js", category: "JavaScript" },
  { id: 4, title: "The Basics of GraphQL", category: "API" },
  { id: 5, title: "How to Build a Mobile-Friendly App", category: "UX" },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "JavaScript", "CSS", "API", "UX"];

  const filteredData = sampleData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>Blog Search</h1>

        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.input}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={styles.select}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.resultsContainer}>
          {filteredData.length > 0 ? (
            <ul style={styles.list}>
              {filteredData.map((item) => (
                <li key={item.id} style={styles.listItem}>
                  <h2 style={styles.title}>{item.title}</h2>
                  <p style={styles.category}>{item.category}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p style={styles.noResults}>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f7f7f7",
    padding: "16px",
    fontFamily: "'Arial', sans-serif",
  },
  wrapper: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "24px",
    color: "#333",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "24px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  select: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  resultsContainer: {
    backgroundColor: "#fff",
    padding: "16px",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  listItem: {
    padding: "12px 0",
    borderBottom: "1px solid #eee",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  category: {
    fontSize: "14px",
    color: "#666",
  },
  noResults: {
    textAlign: "center",
    color: "#999",
    fontSize: "16px",
  },
};

export default App;
