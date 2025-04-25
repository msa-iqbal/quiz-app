import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      // @ Database Related Works /
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page), // Adjust starting key logic if needed
        limitToFirst(8)
      );

      try {
        setLoading(true);
        setError(false);

        const snapshot = await get(videoQuery);
        setLoading(false);

        if (snapshot.exists()) {
          const newVideos = Object.values(snapshot.val());
          setVideos((prevVideos) => [...prevVideos, ...newVideos]);
          setHasMore(newVideos.length === 8); // Check if more data is available
        } else {
          setHasMore(false); // No more data to load
        }
      } catch (error) {
        console.error("Error fetching videos:", error.message);
        setLoading(false);
        setError(true);
        setHasMore(false); // Stop further requests on error
      }
    }

    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
}
