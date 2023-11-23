import React from "react";
import "./styles.scss";

import Rating from "../../../common/rating";
const AboutUsAection = (props) => {
  const { gold_rating_icon, silver_rating_icon, title, reviews } = props;

  return (
    <div className="aboutus-container">
      <p className="title">{title}</p>
      <div className="section">
        {reviews?.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item?.name}</h3>
              <Rating value={item?.ratings} ratingValue={""} />
              <p dangerouslySetInnerHTML={{ __html: item?.comment }} />
              <span>Read more</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUsAection;
