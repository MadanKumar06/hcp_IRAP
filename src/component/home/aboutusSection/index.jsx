import React from "react";
import "./styles.scss";

import Rating from "../../../common/rating";
const AboutUsAection = () => {
  const data = [
    {
      title: "Sandy",
      rating: "3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecation Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecation",
    },
    {
      title: "Hugh & Anita",
      rating: "2",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat",
    },
    {
      title: "Alyson",
      rating: "1",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat",
    },
  ];
  return (
    <div className="aboutus-container">
      <p className="title">What Our Client Says about Us</p>
      <div className="section">
        {data?.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item?.title}</h3>
              <Rating value={item?.rating} ratingValue={""} />
              <p>{item?.description}</p>
              <span>Read more</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUsAection;
