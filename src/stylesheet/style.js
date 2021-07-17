import { makeStyles } from '@material-ui/core/styles';

const myStyle = makeStyles(() => ({
  root: {
    width: '67.29rem',
    height: '5.938rem',
    margin: '0 0 2.375rem',
    padding: '0.001rem 6.188rem 1.688rem 0.001rem',
    backgroundColor: 'var(--white)',
  },
  logo: {
    width: '15rem',
    height: '2.313rem',
    margin: '0.375rem 2.938rem 0.125rem 0',
    fontFamily: 'Montserrat, Sans-serif',
    fontSize: '1.875rem',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: 'var(--azure)',
  },
  title: {
      width: '3.688rem',
      height: '1rem',
      margin: '1.125rem 2.563rem 0.688rem 0',
      fontFamily: 'Montserrat',
      fontSize: '0.813rem',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: '1.9px',
      color: 'var(--black-two)',
  },
}));

export default myStyle;
