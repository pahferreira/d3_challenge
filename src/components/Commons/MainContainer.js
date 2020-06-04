import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const MainContainer = styled(Grid)(({ theme }) => {
  return {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.main,
  };
});

export default MainContainer;
