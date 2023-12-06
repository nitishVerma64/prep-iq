import * as React from 'react';
import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function AddPost(props) {
  const {openAddPost,setOpenAddPost }=props;

  return (
    <Dialog open={openAddPost} onClose={()=>setOpenAddPost(false)}>
      <DialogTitle  sx={{ m: 0, p: 1.5 , width:"40vw", display:"flex" ,justifyContent:"center", fontWeight:"600",backgroundColor:"var(--backGroundColor)"}} id="customized-dialog-title">
          Create Post
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={()=>setOpenAddPost(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 6,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider variant="middle" />
      <DialogContent  sx={{ m: 0, p: 2 , width:"40vw", height:380,backgroundColor:"var(--backGroundColor)", }}>
          <Box sx={{p:1, display:"flex"}}>
            <Avatar
              alt="Remy Sharp"
              src=""
              sx={{ width: 56, height: 56 }}
            />
            <Box sx={{paddingLeft:2}}>
              <Typography variant="h6" component="h1" fontSize={20}>
                Nitish Verma
              </Typography>
              <Typography variant="p" component="p" fontSize={14}>
                Student||Rajkiya Engineering College
              </Typography>
            </Box>
          </Box>
          <Box sx={{display:"flex", justifyContent:"center"}}>
            <TextField sx={{width:"95%",mt:2}}
              placeholder='Wrirte Something...'
              multiline
              rows={5}

            />
          </Box>
          <Box sx={{mt:2,display:"flex", justifyContent:"center", gap:2,mb:2}}>
              <InsertPhotoIcon sx={{ fontSize: 35 ,cursor:"pointer"}}/>
              <CameraAltIcon sx={{ fontSize: 35,cursor:"pointer" }}/>
              <AttachFileIcon sx={{ fontSize: 35,cursor:"pointer" }}/>
          </Box>
          <Box sx={{display:"flex", justifyContent:"center"}}>
            <button  className='btn'>
              Post
            </button>
          </Box>
      </DialogContent>
    </Dialog>
  );
}