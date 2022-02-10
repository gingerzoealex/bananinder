import react from "react";
import React, { Fragment, useEffect, useState } from "react";
import { createApi } from 'unsplash-js';
import ReactionButton from "../ReactionButton";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const api = createApi({
  accessKey: "bWz7COIaW9oSK632a05uhEj-VwoyN87pM86FlBeKeuQ" // plz ignore this o_o,
});

const BananaCard = () => {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: "bananas", orientation: "landscape" })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("Could not find any banana images :(");
      });
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  } else if (data.errors) {
    return (
      <>
        <p>{data.errors[0]}</p>
        <p>Oh no, API error</p>
      </>
    );
  } else {
    
    return (
      <section className="photo-card">
        {data.response.results.map(photo => (
          <>
            <PhotoComp photo={photo} />
          </>
        ))}
      </section>
    );
  }
};

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;
  return (
    <div className="banana-container">
        <ReactionButton {...photo} reaction="like" liked="false" />
        <img className="banana-photo" src={urls.regular} />
        <a
          className="credit"
          target="_blank"
          href={`https://unsplash.com/@${user.username}`}
        >
          {user.name}
        </a>
        <ReactionButton {...photo} reaction="dislike" liked="true" />
    </div>
  );
};

export default BananaCard;