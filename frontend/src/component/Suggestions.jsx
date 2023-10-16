import { useRef } from "react";
import { Link } from "react-router-dom";

const Suggestions = ({suggestions,suggestionIndex,mouseHandler}) => {

  const selectRef = useRef(null);

  const selected = selectRef?.current?.querySelector(".active");
  if (selected) {
    selected?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  return (
    <>
      {(suggestions.length === 0)
      ? <div className="nouser">Their is no user</div>
      :
      <ul className="suggestions" ref={selectRef}>
        {suggestions.map((suggestion, index) => {

          return (

            <Link to={`/final/${suggestion["nor-id"]}`}  key={index} >
            <li
            onMouseEnter={mouseHandler} id={index}
            className={index == suggestionIndex ? "active" : ""}
             >
            <h3>{suggestion["nor-id"]}</h3>
            <h4>{suggestion.name}</h4>
            <p>{suggestion.address}</p>
            </li>
            </Link>
          );
        })}
      </ul>
    }
    </>

    );
  };

  export default Suggestions;