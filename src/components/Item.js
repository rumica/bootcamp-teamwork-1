import { useHistory } from "react-router-dom";
import "./item.css";

function Item({ post }) {
  let history = useHistory();
  const { id, title, body } = post;
  console.log("title", title);
  function handleClick() {
    history.push("/ItemDetailPage/" + id);
  }

  return (
    <div className="card-item">
        <img src={`https://picsum.photos/id/${id}/200/200`} />
       <div className="info-border">
        <h3>{title.toUpperCase()}</h3>
        <p>{body}</p>
      </div>
        <button className="btn2" onClick={handleClick}>Click!</button>

    </div>
  );
}

export default Item;
