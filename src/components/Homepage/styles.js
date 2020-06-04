import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.background.second,
      boxShadow: `5px 5px 5px 0px ${theme.palette.boxShadow}`,
      borderRadius: '10px',
      height: '350px',
      overflow: 'hidden',
      margin: '30px 0',
      [theme.breakpoints.up('sm')]: {
        maxWidth: '250px',
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '275px',
      },
      '&:hover': {
        cursor: 'pointer',
      },
    },
    bold: {
      fontWeight: '600',
    },
    bolder: {
      fontWeight: '800',
    },
    media: {
      width: '100%',
      height: '50%',
    },
    filterSelect: {
      width: '200px',
      backgroundColor: theme.palette.background.second,
      color: theme.palette.primary.main,
      boxShadow: `5px 5px 5px 0px ${theme.palette.boxShadow}`,
      borderColor: theme.palette.background.second,
      paddingBottom: '17px',
      height: '50px',
    },
    filterLabel: {
      color: theme.palette.primary.main,
    },
    searchAndFilter: {
      width: '100%',
      margin: '20px 0',
    },
    searchInput: {
      backgroundColor: theme.palette.background.second,
      boxShadow: `5px 5px 5px 0px ${theme.palette.boxShadow}`,
      padding: '10px 20px',
      fontSize: '14px',
      borderRadius: '5px',
      color: theme.palette.primary.main,
      width: '100%',
      height: '100%',
      [theme.breakpoints.down('md')]: {
        marginBottom: '40px',
      },
    },
    formControl: {
      padding: '10px 20px',
      minWidth: 120,
    },
  };
});

export default useStyles;
