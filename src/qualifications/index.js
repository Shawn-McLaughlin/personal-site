import {Grid, Typography} from "@mui/material"
import React from "react";
import qualifications from "./qualifications.json"

const renderQualification = (qualification, index) => {
    return (<Grid container spacing={0} alignItems="center">
        <Grid item xs={8}>
            {qualification.description}
        </Grid>
        <Grid item xs={4}>
            <img
                src={require(`./${qualification.image}`)}
                alt={qualification.image}
                style={{
                    maxHeight: "100px",
                    width: "auto"
                }}/>
        </Grid>
    </Grid>);
}

function EducationQualifications() {
    return (
        <React.Fragment>
            <Typography variant="h4">Education</Typography>
            {renderQualification(qualifications.education)}

            <Typography variant="h4">Additional Qualifications</Typography>
            {qualifications.additionalQualifications.map((additionalQualification) => {
                return renderQualification(additionalQualification);
            })}
        </React.Fragment>
    );
}

export default EducationQualifications;