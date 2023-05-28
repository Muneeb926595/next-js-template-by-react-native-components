'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Colors, Layout } from '@/globals';
import StorageHelper from '@/utils/StorageHelper';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from '@/stores/auth/AuthActions';
import { Modal } from '@material-ui/core';
import { Signup } from '@/view/components';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    border: '1px solid',
    borderColor: Colors.primary['DEFAULT'],
    borderRadius: Layout.mini,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButton-root': {
      margin: theme.spacing(1),
      width: '200px',
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { authenticated } = useSelector(({ Sooq }: any) => Sooq.auth);

  const checkUserAuthentication = async () => {
    const userId = await StorageHelper.getItem(
      StorageHelper.StorageKeys.USER_ID,
    );
    const accessToken = await StorageHelper.getItem(
      StorageHelper.StorageKeys.Access_Token,
    );

    if (!authenticated) {
      if (userId && accessToken) {
        dispatch(authenticateUser(true) as any)
      } else {
        // alert("Need to register")
        setVisible(true)
        dispatch(authenticateUser(false) as any)
      }
    }
  };
  useEffect(() => {
    checkUserAuthentication();
  }, [authenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Validate inputs
      if (!email || !password) {
        setError('Please fill in all fields.');
        return;
      }
      // make api call
      router.push('/signup')
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleLogin}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
        {error && <p>{error}</p>}
        <Modal open={visible}>
          <Signup />
        </Modal>
      </form>
    </div>
  );
};

export default Login;
