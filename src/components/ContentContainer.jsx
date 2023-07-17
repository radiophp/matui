import {Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const ContentContainer = ()=> {
    return (
        <>
            <Grid xs={12} sm={10} lg={10} sx={{backgroundColor:"primary.second"}}>
                <Typography variant="h5">وسط صفحه</Typography>
            </Grid>
        </>

    );
}
export default  ContentContainer;