import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import personalDetails from "./personal-life.json";

const renderFavoritesList = (favoritesObject) => {
    return (
        <React.Fragment>
            <Typography variant="h4">Favorite {favoritesObject.category}</Typography>
            <ul>
                {favoritesObject.items.map((item, index) => {
                    return <li key={`${favoritesObject.category}_${index}`}>{item}</li>
                })}
            </ul>
        </React.Fragment>
    );
}

function PersonalLife() {
    return <React.Fragment>
        <Typography variant="h4">About Me</Typography>
        <ul>
            {personalDetails.funFacts.map((funFact, index) => {
                return <li key={"funFact_"+index}>{funFact}</li>
            })}
        </ul>
        {personalDetails.favorites.map((favoriteObject) => {
            return renderFavoritesList(favoriteObject);
        })}
    </React.Fragment>;
};

PersonalLife.propTypes = {
    personalDetails: PropTypes.object,
}

export default PersonalLife;