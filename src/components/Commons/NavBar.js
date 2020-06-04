import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const NavBar = styled(Grid)(({ theme }) => {
  return {
    padding: '0 5%',
    height: '15vh',
    maxHeight: '80px',
    backgroundColor: theme.palette.background.second,
    boxShadow: `5px 5px 5px 0px ${theme.palette.boxShadow}`,
  };
});

export default NavBar;
