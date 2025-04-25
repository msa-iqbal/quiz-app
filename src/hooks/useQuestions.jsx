import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      // @ Database Related Works /
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setLoading(true);
        setError(false);
        // TODO: Request Firebase Database /
        const snapshot = await get(quizQuery);
        setLoading(false);

        if (snapshot.exists()) {
          const newQuestions = Object.values(snapshot.val());
          setQuestions((prevQuestions) => [...prevQuestions, ...newQuestions]);
        }
      } catch (error) {
        console.error("Error fetching videos:", error.message);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}
