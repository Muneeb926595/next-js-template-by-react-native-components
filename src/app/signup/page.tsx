'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Colors, Layout } from '@/globals';

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

const Signup = () => {
    const classes = useStyles();
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // Validate inputs
            if (!name || !email || !password) {
                setError('Please fill in all fields.');
                return;
            }

            //  make api call
        } catch (error) {
            console.error(error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSignup}>
                <TextField
                    label="Name"
                    type="text"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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
                    Signup
                </Button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Signup;
