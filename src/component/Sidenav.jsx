import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import { styled, useTheme,CssBaseline,createTheme } from '@mui/material';
import {Box} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupsIcon from '@mui/icons-material/Groups';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useAppStore } from './appStore';
import '../index.css';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
  },
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
   
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    
  }
};



const screen=600;

export default function Sidenav() {
  const open=useAppStore((state)=> state.dopen);  
  const updateOpen= useAppStore((state)=>state.updateOpen);
  const navigate = useNavigate();
  const mobClassName = open ? 'make-mob-responsive' : '';
  return (
    <>
      <Box sx={{ display: 'flex' }}>  
      <Drawer variant="permanent" className={mobClassName} open={open}>
          <DrawerHeader>
          </DrawerHeader>
          <List sx={{backgroundColor:"var(--backGroundColor)", height:"100vh" }}>
            <ListItem className='Sidenav-listitem' key="Home" disablePadding sx={{ display: 'block' }}  onClick={()=>{navigate("/"); if(screen<600){} updateOpen( open?!open:open)}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  } }
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                  <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              <ListItem className='Sidenav-listitem' key="Profile" disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/Profile"); updateOpen(open?!open:open)}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                  <AccountBoxIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Profile" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              <ListItem className='Sidenav-listitem' key="TestSeries" disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/Testseries"); updateOpen(open?!open:open)}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                  <StickyNote2Icon/>
                  </ListItemIcon>
                  <ListItemText primary="TestSeries" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              <ListItem className='Sidenav-listitem' key="Group" disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/Group"); updateOpen(open?!open:open)}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                  <GroupsIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Group" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              <ListItem className='Sidenav-listitem' key="Friend" disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/Friend"); updateOpen(open?!open:open)}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  } }
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                  <PersonAddIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Friend" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              <ListItem className='Sidenav-listitem' key="Notifications" disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/Notifications"); updateOpen(open?!open:open)}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  } }
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <NotificationsIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Notifications" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              <ListItem className='Sidenav-listitem' key="Setting" disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/Setting"); updateOpen(open?!open:open)}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  } }
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <Settings/>
                  </ListItemIcon>
                  <ListItemText primary="Setting" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              <ListItem className='Sidenav-listitem' key="LogOut" disablePadding sx={{ display: 'block' }} onClick={()=>{ updateOpen(open?!open:open)}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                  <Logout/>
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
          </List>
          <Divider />
          
        </Drawer>
      </Box>
    </>
  );
}