import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Picture from "../Profile/Picture";

function Sidebar() {
  return (
    <>
      <div className="sidebar__container">
        <div className="twitter-logo">
          <TwitterIcon />
        </div>

        <div className="navigations">
          <div className="home">
            <div className="home__icon">
              <HomeIcon />
            </div>

            <div className="home__text">home</div>
          </div>

          <div className="explore">
            <div className="explore__icon">
              <TagIcon />
            </div>

            <div className="explore__text">explore</div>
          </div>

          <div className="notification">
            <div className="notification__icon">
              <NotificationsIcon />
            </div>

            <div className="notification__text">notification</div>
          </div>

          <div className="message">
            <div className="message__icon">
              <MailOutlineIcon />
            </div>

            <div className="message__text">messages</div>
          </div>

          <div className="bookmark">
            <div className="bookmark__icon">
              <BookmarkBorderIcon />
            </div>

            <div className="bookmark__text">bookmarks</div>
          </div>

          <div className="list">
            <div className="list__icon">
              <ListAltIcon />
            </div>

            <div className="list__text">lists</div>
          </div>

          <div className="profile">
            <div className="profile__icon">
              <PersonIcon />
            </div>

            <div className="profile__text">profile</div>
          </div>

          <div className="more">
            <div className="more__icon">
              <MoreHorizIcon />
            </div>

            <div className="more__text">more</div>
          </div>

          <div className="tweet__btn">
            <button> Tweet </button>
          </div>
        </div>

        <div className="bottom__profile">
          <div className="profile__photo">
            <Picture />
          </div>

          <div className="profile__info">
            <h5>donmartins</h5>
            <p>@Donmart25924229</p>
          </div>

          <div className="profile__readmore">
            <MoreHorizIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
