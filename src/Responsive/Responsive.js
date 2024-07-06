import { useState, useEffect } from "react";

function Responsive(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.removeEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export default Responsive;
