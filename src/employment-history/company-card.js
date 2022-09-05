import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from "prop-types";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const renderRole = (roleInformation) => {
    return (
        <React.Fragment>
            <Typography variant="h5">{roleInformation.title}</Typography>
            <Typography variant="subtitle1">{roleInformation.startDate} - {roleInformation.endDate}</Typography>
            <Typography>
                <ul>
                    {roleInformation.responsibilities.map((responsibility) => {
                        return (<li>{responsibility}</li>);
                    })}
                </ul>
            </Typography>
        </React.Fragment>
    );
}

function CompanyCard(props) {
    const {companyInfo} = props;
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (<Card sx={{mb:2}}>
        <CardHeader
            avatar={
                <img
                    alt={companyInfo.logo}
                    src={require(`./${companyInfo.logo}`)}
                    style={{
                        height: "auto",
                        maxWidth: "180px",
                        maxHeight: "80px"
                    }}
                />
            }
            title={companyInfo.name}
            titleTypographyProps={{variant: "h5"}}
            subheader={
                <React.Fragment>
                    <Typography>{companyInfo.location}</Typography>
                    <Typography>{companyInfo.roles[companyInfo.roles.length - 1].startDate} - {companyInfo.roles[0].endDate}</Typography>
                </React.Fragment>
            }
            action={
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            }
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                {companyInfo.roles.map((role) => {
                    return renderRole(role);
                })}
            </CardContent>
        </Collapse>
    </Card>);
};

CompanyCard.propTypes = {
    companyInfo: PropTypes.object,
};

export default CompanyCard;