import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import GitHub from "@mui/icons-material/GitHub";
import Email from "@mui/icons-material/Email";
import owlPicture from "./me-and-owl.jpg"

function SiteHeader() {
    return (
        <Grid container spacing={0} alignItems="center">
            <Grid item xs={4}>
                <Container>
                    <Typography variant="h4">Shawn McLaughlin</Typography>
                    <Typography variant="subtitle1">Husband, Father, Software Engineer</Typography>
                    <Typography>
                        <Grid container>
                            <Email/>
                            <Link href="mailto:shawn@shawnmclaughlin.dev">
                                Shawn@ShawnMcLaughlin.dev
                            </Link>
                        </Grid>
                        <Grid container>
                            <GitHub/>
                            <Link href="https://www.github.com/Shawn-McLaughlin">
                                GitHub
                            </Link>
                        </Grid>
                    </Typography>

                </Container>
            </Grid>
            <Grid item xs={8}>
                <img
                    src={owlPicture}
                    alt="me-and-owl"
                    style={{
                        height: "auto",
                        width: "100%"
                    }}/>
            </Grid>
        </Grid>
    );
}

export default SiteHeader;