import {useState} from 'react';
import {Box} from '@mui/material';
import Card from './Home/Card';
import Sidenav from '../Sidenav';
import Navbar from '../Navbar'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddPost from './Home/AddPost';


const Home = () => {
  const [openAddPost,setOpenAddPost] = useState(false);
  return (
    <>
        <Navbar/>
        <Box height={70} backgroundColor="var(--backGroundColor)"></Box>
        <Box sx={{display:'flex',minHeight:"100vh",minWidth:"100vw", backgroundColor:"var(--backGroundColor)"}}>
          <Sidenav/>
          <Box component="main" sx={{flexGrow:1,p:1}}>  
            <div className="cardlist" style={{display: "flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
              <Card/><br />
              <Card/><br />
              <Card/><br />
              <Card/><br />
            </div> 
                    
          </Box>
          <Box sx={{ '& > :not(style)': { m: 1 }, position:"fixed", right:50 , bottom:50 }} onClick={()=>setOpenAddPost(true) }>
              <Fab color="primary" aria-label="add" sx={{backgroundColor: "var(--clr-DarkColor)" }}>
                <AddIcon />
              </Fab>
              <p>Add Post</p>
            </Box>  
         

        </Box>
        <AddPost
        openAddPost={openAddPost}
        setOpenAddPost={setOpenAddPost}
        >
        </AddPost>
        
    </>
   
  )
}

export default Home