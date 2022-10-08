import React from "react";
import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";
const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?cs=srgb&dl=pexels-hamann-la-1192609.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sam Tailor</span>
            <span className="widgetSmUserTitle">UI/UX developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/2058659/pexels-photo-2058659.jpeg?cs=srgb&dl=pexels-humphrey-muleba-2058659.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kayle Rami</span>
            <span className="widgetSmUserTitle">Graphic Designer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/2896428/pexels-photo-2896428.jpeg?cs=srgb&dl=pexels-konstantin-mishchenko-2896428.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Lia Rodregez</span>
            <span className="widgetSmUserTitle">UI/UX developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1698730/pexels-photo-1698730.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-1698730.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Marah Ali</span>
            <span className="widgetSmUserTitle">CTO</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/8937591/pexels-photo-8937591.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8937591.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Raji Moh</span>
            <span className="widgetSmUserTitle">CEO</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/8217758/pexels-photo-8217758.jpeg?cs=srgb&dl=pexels-rodnae-productions-8217758.jpg&fm=jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Samia Husian</span>
            <span className="widgetSmUserTitle">Co-Founder</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
