import { makeStyles } from '@material-ui/core/styles';

const myStyle = makeStyles(() => ({
  appbar: {
    width: '100%',
    height: '5.938rem',
    margin: '0 0 2.375rem',
    padding: '0.001rem 6.188rem 1.688rem 0.001rem',
    backgroundColor: 'var(--white)',
  },
  logo: {
    width: '29rem',
    height: '2.313rem',
    margin: '0.375rem 2.938rem 0.125rem 6.25rem',
    fontFamily: 'Montserrat, Sans-serif',
    fontSize: '0.475rem',
    fontWeight: 'bold',
    letterSpacing: 'normal',
    color: 'var(--azure)',
  },
  title: {
    width: '3.688rem',
    height: '1rem',
    margin: '1.125rem 2.563rem 0.688rem 0',
    fontFamily: 'Montserrat',
    fontSize: '0.813rem',
    letterSpacing: '1.9px',
    color: 'var(--black-two)',
    border: 'solid 1px blue',
    marginLeft: '2rem',
    marginRight: '8rem',
  },
  catInput: {
    width: '9.5rem',
    height: '3.41rem',
  },
  formControl: {
    marginTop: '1rem',
    outline: 'none',
  },
  account: {
    width: '2.813rem',
    height: '2.813rem',
    color: 'var(--azure)',
    margin: '0 0 0 21.5rem',
    position: 'relative',
    right: '-6rem',
    top: '0.5rem',
    border: 'solid 1px #e8e8e8',
    borderRadius: '50%',
  },
  textInput: {
    width: '65%',
  },
  bookBtn: {
    width: '11.5rem',
    height: '3.293rem',
    backgroundColor: '#0290ff',
  },
}));

export default myStyle;
