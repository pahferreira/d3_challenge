import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const Content = styled(Grid)(({ theme }) => {
  return {
    minHeight: '85vh',
    padding: '20px 5%',
    width: '100%',
  };
});

export default Content;
