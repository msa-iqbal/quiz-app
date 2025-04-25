import { useEffect, useState } from "react";

export default function useFetch(url, method, headers) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null); // Use `null` as the initial state for better clarity

  useEffect(() => {
    async function requestFetch() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(url, {
          method: method || "GET",
          headers: headers,
        });
        const data = await response.json(); // Await the JSON parsing
        setLoading(false);
        setResult(data); // Set the parsed data
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setError(true);
      }
    }

    if (url) {
      requestFetch(); // Only fetch if a URL is provided
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Add dependencies to re-run the hook if these values change

  return { loading, error, result };
}
