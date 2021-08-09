import { Avatar,Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React,{useState, Fragment} from 'react';
import useStyle from './styles';
import Input from './Input';
import { Button } from '@material-ui/core';
import {GoogleLogin } from 'react-google-login';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup,signin } from '../../actions/auth';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
const Auth = () => {
    const state = null ;
    const classes = useStyle();
    const dispatch = useDispatch(); 
    const [isSignup,setisSignup] = useState(false);
    const history = useHistory();
    const [showPassword,setshowPassword]=useState(false);
     const [formData,setformData]= useState(initialState);
    const switchMode=()=>{
        
        setisSignup((previsSignup)=>!previsSignup);
        setshowPassword(false);
    };
    const googleSuccess = async (res) => {
            console.log(res);
            const result = res.profileObj;
            const token = res.tokenId;

            try {
                dispatch({type:'AUTH',data:{result,token}});
                history.push('/')
            } catch (error) {
                console.log(error)
            }
           
    }
    const googleFailure = () => {
            console.log("no");
    }
    const handleShowPassword = () => setshowPassword((prevShowPassword)=>!prevShowPassword);
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if(isSignup){
            dispatch(signup(formData,history));
        }
        else{
            dispatch(signin(formData,history));
        }

    }
    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setformData({...formData,[e.target.name]:e.target.value})
    }
    return (
       <Container component="main" maxWidth="xs">
           <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon></LockOutlinedIcon>
                </Avatar>
                <Typography variant="h5">{isSignup?`sign up`:`sign in`}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                    {isSignup&&(
                        <Fragment>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                        </Fragment>
                    )}
                    
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" type={showPassword?'text':'password'} handleChange={handleChange} handleShowPassword={handleShowPassword}/>
                    {isSignup&&<Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup?`sign up`:`sign in`}
                    </Button>
                    <GoogleLogin 
                     clientId="565551954008-h9a47mosnsbmq65hnkqta8r8ks5ilsuv.apps.googleusercontent.com"
                     render={(renderProps)=>(
                         <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />}  variant="contained">
                             Google Sign In</Button>
                     )}
                     onSuccess={googleSuccess}
                     onFailure={googleFailure}
                     cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup?'have an account sign-in':'dont have an account sign-up'}
                                </Button>
                            </Grid>
                    </Grid>
                     
                </form>
           </Paper>
       </Container>
    )
}
export default Auth;