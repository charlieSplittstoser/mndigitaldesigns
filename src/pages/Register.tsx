import { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FormControl } from '@mui/material';
import axios from 'axios'

const styles = {
    formComponent: {
        margin: 10,
        width: 300
    },
    formText: {
        color: 'white'
    }
}

const Register: FC = () => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleRegister = async () => {
        try {
           await axios.post('https://tkk4ch2k56.execute-api.us-east-1.amazonaws.com/Prod/users/register', {
               email: email,
               username: username,
               password: password
           })
           alert('Registration successful!')
        } catch(err) {
            alert('Failed to register user!')
            console.log(err)
        }
    }

    return (
        <Box
            sx={{
                border: '1px solid black',
                borderRadius: 1,
                width: 'fit-content',
                padding: 5,
                paddingTop: 5,
                margin: '0 auto',
                marginTop: 10,
                backgroundColor: '#30353f'
            }}
        >
            <FormControl margin='dense'>
                <Typography style={styles.formComponent} variant='h3' align='center'>Register</Typography>
                <TextField style={styles.formComponent} variant='outlined' placeholder='Email' onChange={e => setEmail(e.target.value)} />
                <TextField style={styles.formComponent} variant='outlined' placeholder='Username' onChange={e => setUsername(e.target.value)} />
                <TextField
                    style={styles.formComponent}
                    variant='outlined'
                    placeholder='Password'
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                />
                <TextField
                    style={styles.formComponent}
                    variant='outlined'
                    placeholder='Confirm Password'
                    type='password'
                />
                <Button style={styles.formComponent} variant='outlined' onClick={handleRegister}>Register</Button>
            </FormControl>
        </Box>
    );
};

export default Register;
