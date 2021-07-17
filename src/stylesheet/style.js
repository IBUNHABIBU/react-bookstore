import { makeStyles } from '@material-ui/core/styles';

const myStyle = makeStyles(() => ({

  toolbar: {
    width: '73.3rem',
    height: '5.938rem',
    margin: '0 0 2.375rem',
    padding: '0.001rem 6.188rem 1.688rem 0.001rem',
    backgroundColor: 'var(--white)',
  },
  logo: {
    width: '15rem',
    height: '2.313rem',
    margin: '0.375rem 2.938rem 0.125rem 6.25rem',
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
  catInput: {
    width: '9.5rem',
    // height: '5.938rem',
    // margin: '0 0 2.375rem',
    // padding: '1.438rem 6.188rem 1.688rem 6.25rem',
    // marginTop: '1rem',
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
}));

export default myStyle;
