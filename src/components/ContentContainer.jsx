import Grid from "@mui/material/Unstable_Grid2";


const ContentContainer = (props)=> {
    const {children } = props;
    return (
        <>
            <Grid  xs={12} sm={10} lg={10} sx={{backgroundColor:"#335"}}>
                {children}
            </Grid>
        </>

    );
}
export default  ContentContainer;