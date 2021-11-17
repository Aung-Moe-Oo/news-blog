import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FeaturedPostCard } from "../components";
import { getFeaturedPosts } from "../services";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      {/* <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAVNJREFUaEPt2btKBDEUBuBvwUILGzvRFxJbBQtB0bfQUl9Cay8I+lQ2KnaKWCjIFC7LuoKTZHORmT7J/+WEmUNmpPFn1Hh+A6B0BYcKDBWI3IHcR2gFb3iPzD0enhNwiiO84gC3KRC5AN3OPzN+bX9gFzexiFyARTxheSJwEkQuQJd7C9dYSInICfgN8Yl9XIQcp9yA5IgSgKSIUoBkiJKAJIjSgGhEDYAoRC2AYERNgCBEbYDeiFmATZxhLeTLOMcxXe+0g7vJNWYB7rE+xyAxUz9g9d8DNnBeYRX+fIRiSpxi7DauptrurmPdw+X0ArW9hXqF7zA1AXqHrwkQFL4WQHD4GgBR4UsDosOXBCQJXwqQLHwJQNLwuQFNX2wt4bHlq8XmL3e743qCY7zgsLXr9e8msukfHCla7R9z1NSNBgEHQNC2JRw0VCDhZgZN1XwFvgA/ZmIxTP9xoAAAAABJRU5ErkJggg=="
        alt=""
      /> */}
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
      {/* <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAVNJREFUaEPt2btKBDEUBuBvwUILGzvRFxJbBQtB0bfQUl9Cay8I+lQ2KnaKWCjIFC7LuoKTZHORmT7J/+WEmUNmpPFn1Hh+A6B0BYcKDBWI3IHcR2gFb3iPzD0enhNwiiO84gC3KRC5AN3OPzN+bX9gFzexiFyARTxheSJwEkQuQJd7C9dYSInICfgN8Yl9XIQcp9yA5IgSgKSIUoBkiJKAJIjSgGhEDYAoRC2AYERNgCBEbYDeiFmATZxhLeTLOMcxXe+0g7vJNWYB7rE+xyAxUz9g9d8DNnBeYRX+fIRiSpxi7DauptrurmPdw+X0ArW9hXqF7zA1AXqHrwkQFL4WQHD4GgBR4UsDosOXBCQJXwqQLHwJQNLwuQFNX2wt4bHlq8XmL3e743qCY7zgsLXr9e8msukfHCla7R9z1NSNBgEHQNC2JRw0VCDhZgZN1XwFvgA/ZmIxTP9xoAAAAABJRU5ErkJggg=="
        alt=""
      /> */}
    </div>
  );

  return (
    <div className="mb-8">
      <Carousel
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass="px-4"
      >
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;
