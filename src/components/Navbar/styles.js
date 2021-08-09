import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(108, 122, 137, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down('sm')]:{
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '10px 50px',
    },
    logout: {
      display: 'flex',
      justifyContent: 'flex-center',
      alignItems:'center',
      width : '40%',
    },
    heading: {
      color: 'rgba(108, 122, 137, 1)',
      textDecoration: 'none',
      padding: '10px',
    },
    image: {
      marginLeft: '15px',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'center',
      width: '200px',
    },
    profile: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
    userName: {
      display: 'flex',
      alignItems: 'center',
    },
    brandContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }
}));