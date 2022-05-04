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
import ForumIcon from "@mui/icons-material/Forum";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UploadIcon from "@mui/icons-material/Upload";

function Feed() {
  const feeds = [
    {
      displayPicture: require("../../assets/images/manu.png"),
      username: "Manchester United",
      isVerified: "true",
      nick: "@ManUtd",
      timestamp: "2h",
      text: "Christiano Ronaldo has scored 17 goals in the Premier League this season",
      img: require("../../assets/images/celebration.jpg"),
      comment: "50",
      share: "100",
      likes: "600",
      upload: "30",
    },

    {
      displayPicture: require("../../assets/images/chelsea.png"),
      username: "chelsea",
      isVerified: "false",
      nick: "@chelsea",
      timestamp: "10sec",
      text: "Kante has scored 10 goals in the UEFA this season",
      img: require("../../assets/images/chelsea.jpg"),
      comment: "5",
      share: "10",
      likes: "60",
      upload: "300",
    },
  ];

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

          {feeds.map((feed) => {
            return (
              <>
                <div className="feed__body__section__content">
                  <div className="feed__body__section__content__side__content">
                    <div className="feed__body__section__content__side__content__photo">
                      <img src={feed.displayPicture} alt="manulogo" />
                    </div>

                    <div className="feed__body__section__content__side__content__text">
                      <span id="username">{feed.username}</span>
                      <span id="verified">
                        {feed.isVerified == "true" ? <VerifiedIcon /> : ""}
                        <span id="nick">{feed.nick}</span>
                        <span id="timestamp">. {feed.timestamp}</span>
                      </span>
                      <p>{feed.text}</p>
                      <div className="feed__body__section__content__side__content__text__img">
                        <img src={feed.img} alt="celebration" />
                      </div>

                      <div className="feed__body__section__content__side__content__text__react__icons">
                        <ForumIcon />
                        <span id="reactdigits">{feed.comment}</span>
                        <LoopIcon /> <span id="reactdigits">{feed.share}</span>
                        <FavoriteBorderIcon />
                        <span id="reactdigits">{feed.likes}</span>
                        <UploadIcon />
                        <span id="reactdigits">{feed.upload}</span>
                      </div>
                    </div>
                  </div>

                  <div className="feed__body__section__content__side__icon">
                    <MoreHorizIcon />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Feed;
