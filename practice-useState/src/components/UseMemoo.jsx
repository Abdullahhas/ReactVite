import React, { useState, useMemo } from "react";

const products = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
}));

function UseMemoo() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const filteredProducts = useMemo(() => {
    console.log("Filtering...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📱 Product List</h2>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>
        Re-render App (Count: {count})
      </button>

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemoo;

// so now we can see that when the search state changes it is filttering only and when we click the re render button it is not filtering 
// if we dont use useMemo then while click on the button it filters every time