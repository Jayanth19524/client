
import React ,{useState,useEffect}from 'react';
import {TextField,Button,Typography,Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import useStyles from "./styles";
import { useDispatch,useSelector } from 'react-redux';

import { createPost } from '../../actions/posts';
import { updatePost } from '../../actions/posts'
const Form = ({currentId,setCurrentId}) => {
        const classes = useStyles();
        const dispatch =  useDispatch();
        const [postData,setpostData] = useState(
            { title:"", message:"", tags:"", selectedFile:""}
        );
        const post = useSelector((state)=> currentId ? state.posts.find((p)=>p._id===currentId):null)
        const user = JSON.parse(localStorage.getItem('profile'));
        useEffect(()=>{
            if(post) setpostData(post);
        },[post])
        const handleSubmit = (e) => {
            e.preventDefault();
            if(currentId){
                dispatch(updatePost(currentId,{...postData,name: user?.result?.name}));                
            }
            else{
                dispatch(createPost({...postData,name: user?.result?.name}));               
            }
            clear();
        }
        const clear = () => {
            setCurrentId(null);
            setpostData({creator:"", title:"", message:"", tags:"", selectedFile:""});
        }
    if(!user?.result?.name){
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    PLEASE SIGN IN TO CREATE A POST
                </Typography>

            </Paper>
        )
    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ?`edit`:`share`} your experience</Typography>
                {/* <TextField name="creator" variant="outlined" label="creator" value={postData.creator} onChange={(e)=>setpostData({...postData,creator:e.target.value})} fullWidth> </TextField> */}
                <TextField name="title" variant="outlined" label="title" value={postData.title} onChange={(e)=>setpostData({...postData,title:e.target.value})} fullWidth> </TextField>
                <TextField name="message" variant="outlined" label="message" value={postData.message} onChange={(e)=>setpostData({...postData,message:e.target.value})} fullWidth> </TextField>
                <TextField name="tags" variant="outlined" label="tags" value={postData.tags} onChange={(e)=>setpostData({...postData,tags:e.target.value.split(',')})} fullWidth> </TextField>
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({base64})=> setpostData({...postData,selectedFile:base64})}></FileBase>
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>clear</Button>
            </form>


        </Paper>
    )
}
export default Form;