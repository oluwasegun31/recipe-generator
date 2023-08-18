import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Search.module.css';
import SearchCard from './SearchCard';
import Loader from './Loader';
import UseFetch from '../Hooks/useFetch';
import Error from './Error';


function SearchInput(){
    // query for input data, my app ID and Key
    const [query, setQuery] = useState("random");
    const YOUR_APP_ID = `82e453da`;
    const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";
    const {displayCards, isLoading, isError, setIsLoading, setIsError, recipeArr} = UseFetch(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);

    // useRef to handle input data without rerendering with adding loading animation on submit
    const inputRef = useRef();
    const handleSubmit = (e)=> {
        e.preventDefault();
        setIsLoading(true)
        setIsError(false)
        setQuery(inputRef.current.value);
    }

    // A function that returns whole number
    const wholeNumber = val=> {
        return Math.floor(val)
    }
    // A function that truncate a string to 20 characters
    const truncateStr = (str)=> {
        return str.length <= 20 ? str : str.slice(0, 20) + "..."
    }
    // An array of colors to be used for backgrounds
    const bgStyle = ["#e9faf4", "#f8eaea", "#feffeb", "#e6f4fa", "#f9e6fa"];
    // the navigate function
    const navigate = useNavigate()
    return(
        <>
        <section className={classes.searchContainer}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    ref={inputRef}
                    placeholder='Input text here'
                />
                <button type='submit'>Search</button>
            </form>
        </section>

        {isError ? <Error /> : null}

        {isLoading ? <Loader /> :
            <section className={classes.infoContainer}>
                { displayCards && (displayCards.length === 0 ? <h1 className={classes.displayTxt}>No result Available</h1> :
                    displayCards.map((item, pos) => { 
                    return <SearchCard key={pos} 
                                cardImg={item.recipe.image} 
                                cardCalories={wholeNumber(item.recipe.calories)} 
                                cardName={truncateStr(item.recipe.label)} 
                                style={{backgroundColor: bgStyle[Math.floor(Math.random() * bgStyle.length)]}}
                                onClick={()=> navigate(`details/${pos}`, {state: recipeArr})}
                            />
                    }))
                }
            </section>
        }
        </>
    )
}

export default SearchInput