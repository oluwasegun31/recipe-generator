import { useParams, useLocation } from "react-router-dom";
import classes from './RecipeDetails.module.css';
import diamond from '../Assets/Images/icons8-diamond-48.png';
import blueDiamond from '../Assets/Images/icons8-diamond-blue.png';

function RecipeDetails(){

    // to get the pos in the params from the useNavigate, the data from the location.state 
    const {pos} = useParams();
    const location = useLocation();
    const data = location.state;
    const recipeData = data[pos].recipe;
    console.log(recipeData)

    return(
        <section className={classes.detailsContainer}>
            <section className={classes.detailsHeading}>
                <h1 className={classes.detailName}>{recipeData.label}</h1>
                <div className={classes.type}>
                    <p className={classes.dishType}>Dish Type: {recipeData.dishType}</p>
                    <p className={classes.mealType}>Meal Type: {recipeData.mealType}</p>
                    <p className={classes.calories}>Calories: {(recipeData.calories).toFixed()} Cal</p>
                </div>
            </section>
            <section className={classes.ingredient}>
                <h3>
                    <img src={diamond} alt="diamond" />
                    Ingredient
                </h3>
                <div className={classes.ingredientList}>
                    <div className={classes.list}>
                        {recipeData.ingredientLines.map((item, pos) => {
                            return <p key={pos}>
                                        <img src={blueDiamond} alt="blue" />
                                        {item}
                                    </p>
                        })}
                    </div>
                    <div className={classes.detailImg}>
                        <img src={recipeData.image} alt="recipeImg" />
                    </div>
                </div>
                
            </section>
        </section>
    )
}

export default RecipeDetails