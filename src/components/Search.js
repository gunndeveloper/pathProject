import React,{useState} from "react";
import { FaSistrix, FaMicrophone } from  "react-icons/fa";
import Autosuggest from "react-autosuggest";


import { key, cx } from "../API";
import axios from "axios";
import Show from "./Show";

const Search = (props) =>{

    const goBack= ()=>{
       props.history.push("/");
    };

    const[state, setState] = React.useState(
        props.location.state ? props.location.state : ""
    );

    const[previousSearches, setSearchItem] = useState([]);

    const [results,setResults] = React.useState([]);

    const [info,setInfo]= React.useState("");

    const searchGoogle = async (e) =>{
        try{
            e.preventDefault();
        }
        catch{}
        try{
            setSearchItem(...previousSearches, {state})
            const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
            );
        
        if (response){
            setResults(response.data.items);
            setInfo(response.data.searchInformation);
        }
        }
        catch(error){
            console.log(error);
        }
    };

    const renderSuggestion = suggestion => (
        <div className="suggestion">
            <span>{suggestion}</span>
        </div>
    );

    const getSuggestionValue = state;

    const deleteSearchItem = (state) => {
        return previousSearches.filter((search) => search !== state)
    };

React.useEffect(() => {
    async function getPosts(){
        if(props.location.state){
            try{

 //               console.log('searching for term:  ', state);
               
                const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
                );
             
             if (response){
                 setResults(response.data.items);
                 setInfo(response.data.searchInformation);
             }
            }
            catch(error){
                console.log(error);
            }
        }
    }
    getPosts();
},[]);

return(
    <div className="search">
        <div className= "search__form">
            <div className= "search__from-logo">
                <img src="/images/psmall.png" alt="logo" onClick={goBack} height="40px" width="100px"/>
            </div>
            <div className="search__form-input">
                <form className="home__form" onSubmit={searchGoogle}>

                    <Autosuggest
                        suggestions={previousSearches}
                        onSuggestionsFetchRequested={({ value }) =>
                            setSearchItem({value})
                        }
                        onSuggestionsClearRequested={() => setSearchItem([])}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={{
                            className: "home__input",
                            placeholder: "Search...",
                            value: { state } || "",
                            onChange: (e, { newValue }) => setState(e.target.value)

                        }}
                    />
                    {/* <input
                    type="text"
                    className="home__input"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    /> */}

                    <FaSistrix className="search__icon"/>
                    <FaMicrophone className="microphone"/>
                </form>
            </div>

        </div>
        <Show results={results} info={info} />
    </div>
);
 
};

export default Search;