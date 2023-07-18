import Grid from "@mui/material/Unstable_Grid2";
import {Typography,Tab,Tabs} from "@mui/material";
import {HomeRounded} from "@mui/icons-material"
const Sidebar = ({value,handleChange}) => {

    const tabProps = (index)=>{
        return {
            id :`sidebar-tab-${index}` ,
            "aria-controls": `tabpanle-${index}`
        };
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
                    textColor="secondary"
                    indicatorColor="secondary"
                >
                    <Tab label={"صفحه اصلی"} icon={<HomeRounded />} iconPosition={"start"} {...tabProps(0)}></Tab>
                    <Tab label={"صفحه دوم"} icon={<HomeRounded />} iconPosition={"start"} {...tabProps(1)}></Tab>
                    <Tab label={"صفحه سوم"} icon={<HomeRounded />} iconPosition={"start"} {...tabProps(2)}></Tab>
                    <Tab label={"صفحه چهارم"} icon={<HomeRounded />} iconPosition={"start"} {...tabProps(3)}></Tab>
                    <Tab label={"صفحه پنجم"} icon={<HomeRounded />} iconPosition={"start"} {...tabProps(4)}></Tab>
                    <Tab label={"صفحه ششم"} icon={<HomeRounded />} iconPosition={"start"} {...tabProps(5)}></Tab>
                    <Tab label={"صفحه ششم"} icon={<HomeRounded />} iconPosition={"start"} {...tabProps(6)}></Tab>
                </Tabs>
         
            </Grid>
        </>


    );
}
export default Sidebar