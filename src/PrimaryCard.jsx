import { useState } from "react";
import "./PrimaryCard.css";
import starLogo from "../public/icon-star.svg"
import completedLogo from "../public/illustration-thank-you.svg"

export function PrimaryCard() {
  const ratingButton = [
    {
      id: 1,
      name: 1,
    },
    {
      id: 2,
      name: 2,
    },
    {
      id: 3,
      name: 3,
    },
    {
      id: 4,
      name: 4,
    },
    {
      id: 5,
      name: 5,
    },
  ];
  // useStates
  const [isCompleted, setIsCompleted] = useState(false);
  const [rating, setRating] = useState("");
  const [chooseRating, setChooseRating] = useState(ratingButton);

  // paragraph text
  const primaryParagraph =
    "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
  const completedParagraph =
    "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";

  function getValue(e) {
    // reset
    setRating("");
    // sets actual value
    setRating(e.target.id);
  }


  return (
    <>
      {!isCompleted ? (
        // primary card details
        <>
          <button className="button" data-type="round">
            <img src={starLogo} alt="" />
          </button>
          <h1 className="heading-1" data-type="primary">
            How did we do?
          </h1>
          <p>{primaryParagraph}</p>

          <div className="rating">
            {chooseRating.map((item) => (
              <button
                className="rating-button | button"
                data-type="round"
                onClick={getValue}
                key={item.id}
                id={item.id}
              >
                {item.name}
              </button>
            ))}
          </div>
          {console.log(rating)}
          <button
            className="button"
            data-type="primary"
            // changes to completed screen
            onClick={() => {
              if (rating === "") return;

              setIsCompleted(true);
            }}
          >
            Submit
          </button>
        </>
      ) : (
        // completed card details
        <>
          <div className="text-center">
            <img
              className="mx-auto"
              src={completedLogo}
              alt=""
            />

            <div>
              <p className="review">You selected out {rating} of 5</p>
            </div>

            <h1 className="heading-1">Thank you!</h1>
            <p>{completedParagraph}</p>
          </div>
        </>
      )}
    </>
  );
}
