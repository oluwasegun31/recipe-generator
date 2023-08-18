import { useEffect, useState } from "react";
function UseFetch(url){
    const [displayCards, setDisplayCards] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [recipeArr, setRecipeArr] = useState([])

    useEffect(()=> {
        const searchRecipe = async()=> {
            try{
                const response = await fetch(url);
                //throw error if the response.ok is false
                if(!response.ok){
                    throw new Error('Unable to fetch');
                }
                const responseData = await response.json();
                // to get the array of object for all search results
                setDisplayCards(responseData.hits)
                setRecipeArr(responseData.hits)
                
                // to display the error and loading as false
                setIsError(false)
                setIsLoading(false)
            }catch(error){
                console.error(error.message)
                // to set the loading as false and the error as true for only 4 seconds
                setIsLoading(false)
                setIsError(true)
                setTimeout(()=> {
                    setIsError(false)
                }, 4000)
            }
        }
        searchRecipe();
    }, [url])
    return {displayCards, isLoading, isError, setIsLoading, setIsError, recipeArr}
}

export default UseFetch