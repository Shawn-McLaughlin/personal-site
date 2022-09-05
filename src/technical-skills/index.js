import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import technicalSkills from "./technical-skills.json"

function TechnicalSkills() {
    return <React.Fragment>
        <Typography variant="h4">Languages</Typography>
        <Typography>
            <ul>
                {technicalSkills.languages.map((language, index) => {
                    return <li key={"language_" + index}>{language}</li>
                })}
            </ul>
        </Typography>


        <Typography variant="h4">Databases</Typography>
        <Typography>
            <ul>
                {technicalSkills.databases.map((db, index) => {
                    return <li key={"db" + index}>{db}</li>
                })}
            </ul>
        </Typography>

        <Typography variant="h4">DevOps</Typography>
        <Typography>
            <ul>
                {technicalSkills.devOps.map((tech, index) => {
                    return <li key={"devOpsTech" + index}>{tech}</li>
                })}
            </ul>
        </Typography>

        <Typography variant="h4">Methodologies</Typography>
        <Typography>
            <ul>
                {technicalSkills.methodologies.map((methodology, index) => {
                    return <li key={"methodology_" + index}>{methodology}</li>
                })}
            </ul>
        </Typography>
    </React.Fragment>;
};

TechnicalSkills.propTypes = {
    technicalSkills: PropTypes.object,
}

export default TechnicalSkills;