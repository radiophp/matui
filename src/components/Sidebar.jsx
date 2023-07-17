import Grid from "@mui/material/Unstable_Grid2";
import {Typography,Tab,Tabs} from "@mui/material";
import {HomeRounded} from "@mui/icons-material"
const Sidebar = () => {
    return (
        <Grid   xs={0} md={2} lg={2}   sx={{backgroundColor:"primary.main" ,display: {xs:  'none', sm: 'none', md: 'block' } }}>
             <Typography variant="h5">منوی راست</Typography>
            <Tabs orientation="vertical" variant="scrollable" scrollButton="auto" allowScrollButtonsMobile >
                <Tab label={"صفحه اصلی"} icon={<HomeRounded />} iconPosition={"start"}></Tab>

            </Tabs>
        </Grid>

    );
}
export default Sidebar