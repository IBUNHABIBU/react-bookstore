import { makeStyles } from '@material-ui/core/styles';

const myStyle = makeStyles((theme) => ({
  logo: {
    color: '#0290ff',
    fontFamily: 'Montserrat',
    fontSize: '1.875rem',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    // paddingLeft: '6.25rem',
  },
  title: {
    color: '#121212',
    fontSize: '0.813rem',
    // paddingLeft: '6.25rem',
    flexGrow: 1,
  },
  cat: {
    // paddingLeft: '3.25rem',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  label: {
    border: 'none',
    outline: 'none',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default myStyle;
