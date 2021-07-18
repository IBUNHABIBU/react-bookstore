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
    width: '41.5rem',
    height: '2.813rem',
    margin: '1.188rem 2.125rem 0 0',
    padding: '0.813rem 35.688rem 0.813rem 1.063rem',
    borderRadius: '4px',
    border: 'solid 1px #e8e8e8',
    backgroundColor: 'var(--white)',
  },
  catInputForm: {
    width: '17.813rem',
    height: '2.813rem',
    margin: '1.188rem 2.125rem 0',
    padding: '0.375rem 0.938rem 0.563rem 1rem',
    borderRadius: '4px',
    border: 'solid 1px #e8e8e8',
    backgroundColor: 'var(--white)',
  },
  bookBtn: {
    width: '11.5rem',
    height: '2.813rem',
    margin: '1.188rem 0 0 2.125rem',
    padding: '0.801rem 1.188rem 0.886rem 1.375rem',
    borderRadius: '3px',
    backgroundColor: 'var(--azure)',
  },
}));

export default myStyle;
