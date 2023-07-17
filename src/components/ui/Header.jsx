import  {AppBar , Toolbar , Button } from "@mui/material";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {cloneElement} from "react";
import logomain from "../../assets/logo/logo.png";
import styles   from "../../assets/cssModules/Header.module.css";

import { styled, alpha } from '@mui/material/styles';


import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,

    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),

        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const Header = ()=>{
    function ElevationScroll(props: Props) {
        const { children } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,

        });

        return cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    return (
     <>
         <ElevationScroll>
             <AppBar>
                 <Toolbar>

                     <img src={logomain}  className={styles.logo } alt="Health and Travel" />
                     <Button variant="contained" color="primary" className="flo" >کلیک کن</Button>
                     <Search>
                         <SearchIconWrapper>
                             <SearchIcon />
                         </SearchIconWrapper>
                         <StyledInputBase
                             placeholder="Search…"
                             inputProps={{ 'aria-label': 'search' }}
                         />
                     </Search>
                 </Toolbar>
             </AppBar>

         </ElevationScroll>

     </>
    )
}
export default  Header;