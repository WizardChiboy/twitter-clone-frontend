import React from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import "./Feed.css";
import Picture from "../Profile/Picture";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import NotesIcon from "@mui/icons-material/Notes";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationIcon from "@mui/icons-material/LocationOn";

function Feed() {
  return (
    <>
      <div className="feed__container">
        <div className="feed__container__head">
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
                <textarea
                  type="text"
                  placeholder="What's happening?"
                ></textarea>
              </div>
            </div>

            <div className="feed__tweet__footer">
              <div className="tweet__attributes">
                <CropOriginalIcon />
                <SettingsSystemDaydreamIcon />
                <NotesIcon />
                <SentimentDissatisfiedIcon />
                <AccessTimeIcon />
                <LocationIcon />
              </div>

              <div className="tweet__button">
                <button> Tweet </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
