import  {createTheme} from "@mui/material/styles";
// Create Custom theme
export const theme = createTheme({
    direction: "rtl",
    palette : {
      mode : "dark",
      primary : { main : "#000"},
      secondary : {main : "#388E3C"}
    },
    typography :{ fontFamily: "vazir , roboto"},
    components:{
        MuiButton :{
            defaultProps:{
                disableRipple :true
            }
        }
    }
});