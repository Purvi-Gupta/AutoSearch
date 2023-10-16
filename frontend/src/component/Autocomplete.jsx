import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import Suggestions from "./Suggestions";
import axios from "axios";

const AutoComplete = () => {
    
  const navigate = useNavigate();
  const [fetchString,setfetchstring] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState("");


  useEffect(()=>{
    const fetch = async() =>{
      try {
        const data = await axios.post(`http://localhost:5000/api/user/?query=${fetchString}`);
      // console.log("fetch");
      setSuggestions(data.data);
      setSuggestionsActive(true);
      } catch (error) {
        setSuggestionsActive(false);
        console.log(`error`);
      }
    }
    fetch()
    if(!fetchString){
      setSuggestionsActive(false)
    }
  },[fetchString])


  const handleChange = (e) =>{
    setValue(e.target.value);
    setfetchstring(value);
    
  }

const mouseHandler = (e) =>{
  let index = e.target.id;
  setSuggestionIndex(index);
  let val = suggestions[suggestionIndex]?.name;
  val != "undefined" && setValue(val);
}


  const handleKeyDown = (e) => {
    // for arrow up
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        let index = suggestions.length-1;
        setSuggestionIndex(index);
        return;
      }
      let index = suggestionIndex - 1;
      setSuggestionIndex(index);
      let val = suggestions[suggestionIndex].name;
      setValue(val);
      }
      // for arrow down
      else if (e.keyCode === 40) {
      if (suggestionIndex == suggestions.length-1) {
        setSuggestionIndex(0);
        return;
      }
      let index = Number(suggestionIndex)+1 ;
      setSuggestionIndex(index);
    
      let val = suggestions[suggestionIndex].name;
      setValue(val);
    }
    // for enter
    else if (e.keyCode === 13) {
      let val = suggestions[suggestionIndex]["nor-id"];
      setfetchstring("");
      navigate(`/final/${val}`);
    }
  };


  return (
    <div className="autocomplete">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="🔍 Search users by ID,address,name..."
      />
      {
      suggestionsActive && <Suggestions suggestions={suggestions} suggestionIndex={suggestionIndex}
      mouseHandler={mouseHandler} 
      />}
    </div>
  );
  
};

export default AutoComplete;