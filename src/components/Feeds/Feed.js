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
import CommentIcon from "@mui/icons-material/Comment";
import CloseIcon from "@mui/icons-material/Close";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import manuLogo from "../../assets/images/manu.png";
import celebration from "../../assets/images/celebration.jpg";

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
        <div className="feed__body__section">
          <div className="feed__body__section__more">
            <div className="feed__body__section__more__text">
              <CommentIcon />
              <span>
                You might like . <span id="see__more">See more</span>
              </span>
            </div>

            <div className="feed__body__section__more__icon">
              <CloseIcon />
            </div>
          </div>

          <div className="feed__body__section__content">
            <div className="feed__body__section__content__side__content">
              <div className="feed__body__section__content__side__content__photo">
                <img src={manuLogo} alt="manulogo" />
              </div>

              <div className="feed__body__section__content__side__content__text">
                <span id="username">Manchester United</span>
                <span id="verified">
                  <VerifiedIcon />
                  <span id="nick">@ManUtd</span>
                  <span id="timestamp">. 2h</span>
                </span>
                <p>
                  Christiano Ronaldo has scored 17 goals in the Premier League
                  this season
                </p>
                <div className="feed__body__section__content__side__content__text__img">
                  <img src={celebration} alt="celebration" />
                </div>
              </div>
            </div>

            <div className="feed__body__section__content__side__icon">
              <MoreHorizIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
