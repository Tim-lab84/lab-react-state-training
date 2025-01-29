import  { useState } from "react";

const LikeButton = () => {
  const [likeCounter, setLikeCounter] = useState(0);

  const handleClick = () => {
    setLikeCounter(likeCounter + 1);
  };

  return (
    <button onClick={handleClick}>
      {likeCounter} Likes
    </button>
  );
};

export default LikeButton;