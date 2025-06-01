import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Paper,
    Link,
    CircularProgress,
} from '@mui/material';
import { Visibility, VisibilityOff, Email } from '@mui/icons-material';
import { loginUser } from '../services/authService';
import Header from './Header';
import Swal from 'sweetalert2';
import loginImage from '../assets/image.jpg'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

               try {
            const response = await loginUser(username, password);
            console.log('Login successful', response);

            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: `Welcome, ${username}`,
                timer: 2000,
                showConfirmButton: false,
            });

        } catch (err) {
            console.error('Login failed', err);
            setError('Invalid username or password.');

            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid username or password. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                bgcolor: '#f5f7fa',
            }}
        >
            <Paper
                elevation={10}
                sx={{
                    display: 'flex',
                    width: '90%',
                    maxWidth: 1200,
                    minHeight: 600,
                    mx: 'auto',
                    my: 'auto',
                    overflow: 'hidden',
                    borderRadius: 4,
                }}
            >
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Header />

                    <Box sx={{ mt: 6, mb: 3, px: 2 }}>
                        <Typography variant="caption" fontWeight="medium" color="text.secondary">
                            START FOR FREE
                        </Typography>

                        <Typography variant="h3" component="h1" fontWeight="bold" sx={{ mt: 1 }}>
                            Login to account
                            <Box component="span" sx={{ color: '#4285F4' }}>.</Box>
                        </Typography>

                        <Box sx={{ mt: 1 }}>
                            <Typography variant="body2" color="text.secondary" component="span">
                                New to Anywhere?
                            </Typography>

                            <Link href="#" underline="hover" ml={1} color="#4285F4">
                                Create an account
                            </Link>

                        </Box>
                    </Box>

                    <Box component="form" onSubmit={handleLogin} sx={{ px: 2 }}>
                        <TextField
                            sx={{
                                width: '350px',      
                                mb: 2,
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#e3f2fd',
                                    borderRadius: '12px',
                                },
                            }}
                            margin="normal"
                            label="Email"
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Email color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            sx={{
                                width: '350px',     
                                mb: 2,
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#e3f2fd',
                                    borderRadius: '12px',
                                },
                            }}
                            margin="normal"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                sx: {
                                    backgroundColor: '#e3f2fd', 
                                    borderRadius: '12px',

                                },

                            }}
                        />
                        {error && (
                            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                                {error}
                            </Typography>
                        )}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                            <Button variant="text" sx={{ color: 'text.secondary' }}>
                                Forgot password?
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={loading}
                                sx={{
                                    bgcolor: '#4285F4',
                                    px: 4,
                                    py: 1.5,

                                    borderRadius: 28,
                                    '&:hover': {
                                        bgcolor: '#3367d6',
                                    },
                                }}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Login now'}
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        width: '50%',
                        backgroundImage: `url(${loginImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 20,
                            right: 20,
                            color: 'white',
                            fontSize: 30,
                            fontWeight: 'bold',
                        }}
                    >
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default LoginForm;
