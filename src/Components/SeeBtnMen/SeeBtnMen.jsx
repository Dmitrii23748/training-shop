import { Link } from "react-router-dom";
import "./SeeBtn.css";

function SeeBtnMen() {
  return (
    <section className="btn-block">
      <div className="container">
        <Link to={`/men`}>
          <div className="see__btn-block">
            <button className="see-btn">see all</button>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default SeeBtnMen;
