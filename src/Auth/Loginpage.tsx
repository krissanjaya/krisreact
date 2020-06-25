import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './Login.css';
import {AuthForm} from './Auth.components';
import {onLogin} from './auth.api';
import { useNavigation } from 'react-navi';
import { createMemoryNavigation } from 'navi';

const LoginPage = () => {
    const navigation = useNavigation();
    const [{username, password}, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState('');

    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Kris Sanjaya
            </Link>{' '}
            {new Date().getFullYear()}
            </Typography>
        );
    }

    const login = async(event: React.FormEvent) => {
        event.preventDefault();

        // localStorage.setItem('token', 'asdsadsad')

        const {error, token} = await onLogin({
            username,
            password
        })

        if(token){
            setError(error);
        }else{
            navigation.setContext({token})
            navigation.navigate('/');
        }
    }

    return(
        <div className="Login">
        <Container className="cardLogin" component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Card className="cardLoginInner" elevation={10}>
                    <CardContent>
                        <Avatar className="avatar">
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" style={{fontWeight:'bold'}} color="primary" variant="h5" align="center">
                            Sign in
                        </Typography>
                        <form onSubmit={login}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                value={username}
                                onChange={(event) => setCredentials({
                                    username:event.target.value,
                                    password
                                })}
                            />
                            
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(event) => setCredentials({
                                    username,
                                    password: event.target.value
                                })}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                style={{marginTop:10, fontWeight:'bold'}}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs style={{paddingTop:10}}>
                                    <Link href="#" variant="body2" >
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    {/* <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link> */}
                                </Grid>
                            </Grid>
                            {error.length > 0 && <p>{error}</p>}
                        </form>
                    </CardContent>
                </Card>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
        </div>
    );
}

export default LoginPage;