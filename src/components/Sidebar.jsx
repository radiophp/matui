import Grid from "@mui/material/Unstable_Grid2";
import {Typography,Tab,Tabs} from "@mui/material";
import {HomeRounded} from "@mui/icons-material"
const Sidebar = ({value,handleChange}) => {

    const tabProps = (index)=>{
        let ret = {
            id :`sidebar-tab-${index}` ,
            "aria-controls": `tabpanle-${index}`
        };
        console.log(ret);
        return ret;
    };

    return (
        <>
            <Grid   xs={0} md={2} lg={2}   sx={{backgroundColor:"primary.main" ,display: {xs:  'none', sm: 'none', md: 'block' } }}>
                <Typography variant="h5">منوی راست</Typography>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"

                    allowScrollButtonsMobile
                    value={parseInt(value)}
                    onChange={handleChange}
                    TabIndicatorProps={{
                        style: {
                            color: ""
                        }
                    }}
                >
                    <Tab label={"صفحه اصلی"} icon={<HomeRounded />} iconPosition={"start"} {...tabProps(1)}></Tab>
                    <Tab label={"صفحه دوم"} icon={<HomeRounded />} iconPosition={"start"} {...tabProps(2)}></Tab>
                    <Tab label={"صفحه سوم"} icon={<HomeRounded />} iconPosition={"start"} {...tabProps(2)}></Tab>
                </Tabs>
            </Grid>
        </>


    );
}
export default Sidebar