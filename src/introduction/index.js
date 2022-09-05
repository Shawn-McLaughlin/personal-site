import {Typography} from "@mui/material"
import PropTypes from "prop-types";
import React from "react";
import data from "./introduction.json"

function Introduction() {
    return (
        <React.Fragment>
            {data.map((fact, index) => {
                return <Typography sx={{marginBottom: "1rem"}} key={"fact_"+index}>{fact}</Typography>
            })}
        </React.Fragment>
    );
}

export default Introduction;