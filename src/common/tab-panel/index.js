import {Box} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function TabPanel(props) {
    const {children, value, index } = props;

    return (
        <div
            hidden={value !== index}
            id={`simple-tab-panel-${index}`}
            aria-labelledby={`simple-tab-${index}`}>
            { value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

export default TabPanel;