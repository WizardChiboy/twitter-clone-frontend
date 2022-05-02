import React from "react";
import "./Widget.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widget() {
  return (
    <>
      <div className="widget">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Donmart25924229"
          options={{ height: 400 }}
        />
      </div>

      <TwitterTweetEmbed tweetId={"1183658189037936641"} />

      <TwitterShareButton
        url={"https://facebook.com/don.martins.902"}
        options={{ text: "#reactjs is awesome", via: "@Donmart25924229" }}
      />
    </>
  );
}

export default Widget;
