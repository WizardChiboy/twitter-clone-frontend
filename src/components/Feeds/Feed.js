import React from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import "./Feed.css";
import Picture from "../Profile/Picture";

function Feed() {
  return (
    <>
      <div className="feed__container">
        <div className="feed__container__header">
          <div className="feed__container__home__text">Home</div>

          <div className="feed__container__star">
            <StarBorderPurple500Icon />
          </div>
        </div>

        <div className="feed__tweet">
          <div className="feed__container__tweet__section">
            <div className="tweet__profile__picture">
              <Picture />
            </div>

            <div className="tweet__happenings">
              <textarea type="text" placeholder="What's happening?"></textarea>
            </div>
          </div>

          <div className="feed__tweet__footer">
            <div className="tweet__attributes"></div>

            <div className="tweet__button">
              <button> Tweet </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
