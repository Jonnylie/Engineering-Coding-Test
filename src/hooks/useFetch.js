import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({ data: {}, isLoading: true });
  useEffect(() => {
    if (!url) return setState({ isLoading: false }); // If url is empty, means user has clicked "Start New Quote" button and then it sets data to empty
    setState({ data: null, isLoading: true });
    fetch(url)
      .then((res) => res.json())
      .then((obj) => {
        setState({ data: obj, isLoading: false });
      });
  }, [url]);
  return state;
};

export default useFetch;
