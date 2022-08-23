import React from "react";
import ListItem from "./ListItem";

const Reviews = () => {
  const arr = [
    { title: "Mr. Duking", description: "I highly resepect Fateen. All the town citizens know about her." },
    { title: "Pokemon trainer", description: "10/10 I caught them all!" },
    {
      title: "Town citizen",
      description: "I think she's alright. Her predictions are a little ominous - she said something about my Pikachu turning on me.",
    }
  ];

  return (
    <section id="reviews">
      <div>
        <h2>Reviews</h2>
        <a href="#top">Top</a>
      </div>
      <h3>Reviews from my customers!</h3>
      <ul>
        {arr.map(({ title, description }, id) => (
          <ListItem key={id} title={title} description={description}></ListItem>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
