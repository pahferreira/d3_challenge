import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    backButton: {
      backgroundColor: theme.palette.background.second,
      color: theme.palette.primary.main,
      boxShadow: `5px 5px 5px 0px ${theme.palette.boxShadow}`,
      height: '40px',
      padding: '10px 30px',
      textTransform: 'capitalize',
    },
    borderButton: {
      backgroundColor: theme.palette.background.second,
      color: theme.palette.primary.main,
      boxShadow: `5px 5px 5px 0px ${theme.palette.boxShadow}`,
      margin: '5px',
      padding: '5px 30px',
    },
    backContainer: {
      marginBottom: '60px',
    },
    container: {
      maxHeight: '400px',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    infoContainer: {
      maxHeight: '400px',
      padding: '0 5% 0 0',
    },
    bold: {
      fontWeight: '800',
    },
    rightInfoContainer: {
      [theme.breakpoints.down('md')]: {
        margin: '30px 0px',
      },
    },
  };
});

export default useStyles;
