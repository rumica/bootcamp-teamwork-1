import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getData } from "../../services/api";
import "./itemdetail.css";

const ItemDetailPage = (props) => {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let history = useHistory();

  function handleClick() {
  history.push("/home");
}

  useEffect(() => {
    (async () => {
      const { data, error } = await getData(id);
      setFetchedData(data);
      setError(error);
      setIsLoading(false);
    })();
  }, []);

  console.log("log ozi", fetchedData);
  console.log("log ozi", id);

  if (error) {
    return <div>{error}</div>;
  }
  if (isLoading) {
    return <div> Loading.... </div>;
  }

  return (
    <div>
      <div>
        <img className="img2" src={`https://picsum.photos/id/${id}/300/300`} />
        <h2> {fetchedData.title.toUpperCase()} </h2>
        <h5> {fetchedData.body} </h5>
        <button className="btn3"  onClick={handleClick}>Back</button>
      </div>
    </div>
  );
};

export default ItemDetailPage;
