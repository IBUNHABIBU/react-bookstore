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
    paddingLeft: '6.25rem',
    marginRight: theme.spacing(2),
  },
  title: {
    color: '#121212',
    fontSize: '0.813rem',
    paddingLeft: '6.25rem',
  },
  cat: {
    // paddingLeft: '3.25rem',
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
  account: {
    flexGrow: 1,
    paddingLeft: '28.25rem',
    color: '#0290ff',
    width: '2.063rem',
    height: '2.063rem',
  },
}));

export default myStyle;
