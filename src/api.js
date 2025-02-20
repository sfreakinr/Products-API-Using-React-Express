export async function fetchProducts() {
    try {
      const response = await fetch("https://products-api-express.onrender.com/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  }
  