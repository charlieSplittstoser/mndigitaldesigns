import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import '../styles/App.css';
import { authentication } from '../authentication/authentication';

const styles = {
    link: {
        textDecoration: 'none',
        color: '#222222',
    },
    button: {
        marginRight: 5,
    },
};

export const Header = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    return (
        <>
            <Drawer
                anchor={'left'}
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box className='drawer'>
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <InboxIcon />
                                        ) : (
                                            <MailIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' color='secondary'>
                    <Toolbar>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon
                                onClick={() => setDrawerOpen(!drawerOpen)}
                            />
                        </IconButton>
                        <Typography
                            variant='h6'
                            component='div'
                            sx={{ flexGrow: 1 }}
                        >
                            MN Digital Designs
                        </Typography>
                        <Link style={styles.link} to='/'>
                            <Button
                                style={styles.button}
                                color='inherit'
                                variant='outlined'
                            >
                                Home
                            </Button>
                        </Link>
                        <Link style={styles.link} to='/tweets'>
                            <Button
                                style={styles.button}
                                color='inherit'
                                variant='outlined'
                            >
                                Tweets
                            </Button>
                        </Link>
                        {!authentication.isLoggedIn() && (
                            <Link style={styles.link} to='/login'>
                                <Button
                                    style={styles.button}
                                    color='inherit'
                                    variant='outlined'
                                >
                                    Login
                                </Button>
                            </Link>
                        )}
                        {!authentication.isLoggedIn() && (
                            <Link style={styles.link} to='/register'>
                                <Button
                                    style={styles.button}
                                    color='inherit'
                                    variant='outlined'
                                >
                                    Register
                                </Button>
                            </Link>
                        )}
                        {authentication.isLoggedIn() && (
                            <Button
                                style={styles.button}
                                color='inherit'
                                variant='outlined'
                                onClick={authentication.logout}
                            >
                                Logout
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
            {/* <Box className='headingContainer' bgcolor='secondary.main'>
                    <Box className='heading'>
                        <h1>MN Digital Designs</h1>
                        <p className='headingDescription'>
                            The most reliable MN website solutions available
                        </p>
                    </Box>
                </Box> */}
        </>
    );
};
