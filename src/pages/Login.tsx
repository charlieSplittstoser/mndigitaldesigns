import { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FormControl } from '@mui/material';
import axios from 'axios';
import { authentication } from '../authentication/authentication';
import CircularProgress from '@material-ui/core/CircularProgress';

interface ILoginProps {
    redirectTo?: string;
}

const styles = {
    formComponent: {
        margin: 10,
        width: 300,
    },
    formText: {
        color: 'white',
    },
    loginError: {
        color: 'red',
        margin: 10,
        width: 300,
    },
};

const Login = ({ redirectTo }: ILoginProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [isLoggingIn, setLoggingIn] = useState(false);

    const handleLogin = async () => {
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        setLoggingIn(true)
        try {
            const response = await axios.post(
                'https://tkk4ch2k56.execute-api.us-east-1.amazonaws.com/Prod/users/login',
                {
                    email: email,
                    password: password,
                }
            );

            console.log(response.data);

            if (response.data.statusCode === 200) {
                setLoginError('');
                authentication.login(email, redirectTo);
            } else {
                throw 'Invalid username or password.';
            }
        } catch (err) {
            setLoginError('Invalid username or password.');
            console.log(err);
        } finally {
            setLoggingIn(false)
        }
    };

    return (
        <>
            <Box
                sx={{
                    border: '1px solid black',
                    borderRadius: 1,
                    width: 'fit-content',
                    padding: 10,
                    paddingTop: 5,
                    margin: '0 auto',
                    marginTop: 10,
                    backgroundColor: '#30353f',
                }}
            >
                <FormControl margin='dense'>
                    <Typography
                        style={styles.formComponent}
                        variant='h3'
                        align='center'
                    >
                        Login
                    </Typography>
                    <Typography
                        style={styles.loginError}
                        variant='caption'
                        align='center'
                    >
                        {loginError}
                    </Typography>
                    <TextField
                        style={styles.formComponent}
                        variant='outlined'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        style={styles.formComponent}
                        variant='outlined'
                        placeholder='Password'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {!isLoggingIn && (
                        <Button
                            style={styles.formComponent}
                            variant='outlined'
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    )}
                    {isLoggingIn && (
                        <CircularProgress style={{color: '#00E776', margin: '0 auto', marginTop: 15}} color='primary' size={36} />
                    )}
                </FormControl>
            </Box>
        </>
    );
};

export default Login;
