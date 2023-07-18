import {ThemeProvider} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import {theme} from "../ui/theme";
import Header from "../ui/Header";
import Grid from '@mui/material/Unstable_Grid2';
import {Container} from "@mui/material";

// Create RTL cache
const cacheRTL = createCache({key: "muirtl" ,stylisPlugins:[prefixer,rtlPlugin]})



const MainLayout = ({children})=>{
    return (
        <CacheProvider value={cacheRTL} >
            <ThemeProvider theme={theme} >
                <HelmetProvider>
                    <Helmet>
                        <title>پنل ادمین</title>
                    </Helmet>
                    <Header></Header>
                    {/*Grid system*/}
                     
                    <Grid container  sx={{height:"100vh"}}>

                        {children}
                    </Grid>
                      



                </HelmetProvider>

            </ThemeProvider>
        </CacheProvider>
    )
}
export default MainLayout;