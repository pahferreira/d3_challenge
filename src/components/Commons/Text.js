import { Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const NavBar = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
  };
});

export default NavBar;
