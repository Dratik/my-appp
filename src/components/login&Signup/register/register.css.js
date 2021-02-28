/* eslint-disable quotes */
/* eslint-disable no-useless-computed-key */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Poppins',
    height: 'var(--height-100vh)',
    '& label.Mui-focused': {
      color: 'var(--gray)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'var(--gray)',
    },
  },
  wrapLogo: {
    paddingBottom: 'var(--padding-60px)',
    '& img': {
      width: 'var(--width-50-percent)',
      margin: 'var(--margin-auto)',
      display: 'var(--display-block)',
    },
  },
  form: {
    width: 'var(--width-100-percent)',
    marginTop: theme.spacing(1),
  },

  sideSpace: {
    margin: 'var(--margin-auto)',
    width: 'var(--width-500px)',
    padding: 'var(--padding-30px)',
    background: 'var(--dark-smoke)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'var(--text-center)',
    backgroundSize: 'var(--width-40-percent)',
    borderRadius: 'var(--border-radius-8px)',
    position: 'var(--position-absolute)',
    top: 'var(--top-50)',
    left: 'var(--left-0)',
    right: 'var(--right-0)',
    transform: 'translateY(-50%)',
    backdropFilter: 'blur(1.0625rem)',
    ['@media (max-width:991px)']: {
      width: 'var(--width-90-percent)',
    },
  },
  enterNote: {
    color: 'var(--gray-90)',
    fontWeight: 'var(--font-weight-600)',
    textAlign: 'var(--text-center)',
    marginTop: 'var(--margin-20px)',
    marginBottom: 'var(--margin-50px)',
    ['@media (max-width:991px)']: {
      textAlign: 'var(--text-center)',
    },
  },

  textCenter: {
    margin: 'var(--margin-auto)',

    ['@media (max-width:991px)']: {
      textAlign: 'var(--text-center)',
      width: 'var(--width-100-percent)',
    },
  },

  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'var(--background-size-cover)',
    backgroundPosition: 'var(--text-center)',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'var(--display-flex)',
    flexDirection: 'column',
    alignItems: 'var(--text-center)',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  color: {
    backgroundColor: 'var(--gray-9)',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: 'var(--white)',
    backgroundColor: 'var(--black-dark)',
    borderRadius: 'var(--border-radius-16px)',
    marginTop: 'var(--margin-32px)',
    '&:hover': {
      backgroundColor: 'var(--black-dark-09)',
    },
  },
  gridWidth: {
    width: 'var(--width-100-percent)',
  },
  forgotPassword: {
    color: 'var(--denim-blue)',
    cursor: 'pointer',
    float: 'var(--float-right)',
    '&:hover': {
      color: 'var(--denim-blue)',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  noteMessage: {
    marginTop: 'var(--margin-16px)',
    textAlign: 'var(--text-center)',
  },
  linkNote: {
    color: 'var(--gray-90)',
    cursor: 'pointer',
    fontSize: 'var(--font-size-16px)',
    '&:hover': {
      color: 'var(--gray-90)',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },

  signin: {
    fontSize: 'var(--font-size-14px)',
    fontWeight: 'var(--font-weight-500)',
    textAlign: 'var(--text-center)',
    color: 'var(--gray-90)',
  },
  activeSpan: {
    color: 'var(--denim-blue)',
    cursor: 'pointer',
    fontWeight: 'var(--font-weight-bold)',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'var(--white)',
  },
}));

export default useStyles;
