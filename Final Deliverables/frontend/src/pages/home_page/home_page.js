import React from 'react';
import './style.css';
import { Button, Typography } from "@mui/material";
import { Route, Routes, useNavigate } from 'react-router';
import Dashboard from '../dashboard_page/dashboard_page';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Profile from '../profile_page/profile_page';
import Expense from '../expense_page/expense_page';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
// import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { createSearchParams } from 'react-router-dom';
// import Expense from '../expense_page/expense_page';

export default function Home() {
  const navigation = useNavigate()
  const inputurl = new URL(window.location.href)
  const email = inputurl.searchParams.get('email')
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#ff9999",
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });
  const dashboardPage = () => {
    toggleDrawer()
    navigation({ pathname: '/expensetracker/dashboard', search: createSearchParams({ email: email }).toString() })
  }
  const profilePage = () => {
    toggleDrawer()
    navigation({ pathname: '/expensetracker/profile', search: createSearchParams({ email: email }).toString() })
  }

  // const expense_Page = () =>{
  //   <Ex
  // }

  const [state, setState] = React.useState({
    isopen: false,
  });

  const toggleDrawer = () => {
    setState({ isopen: !state.isopen });
  };


  const list = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
    >
      <List>
        <ListItem>
          <ListItemButton onClick={dashboardPage}>
            <ListItemIcon>
              <LeaderboardRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={profilePage}>
            <ListItemIcon>
              <LeaderboardRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (<ThemeProvider theme={theme}>
    <div className='background'>
      <IconButton onClick={toggleDrawer} color="primary">
        <MenuRoundedIcon />
      </IconButton>
      <Typography variant='h4' sx={{ marginTop: 1, marginBottom: 1 }} color="primary">
        Personal Expense Tracker
      </Typography>
    </div>
    <div>
      <div>
        <Drawer
          anchor='left'
          open={state.isopen}
          onClose={toggleDrawer}
        >
          {list()}
        </Drawer>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  </ThemeProvider>
  )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// export default function TemporaryDrawer() {
//   const [state, setState] = React.useState({
//     isopen: false,
//   });

//   const toggleDrawer = () => {
//     setState({ isopen: !state });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//     >
//       <List>
//         <ListItem>
//         <ListItemButton onClick={dashboard_page}>
//               <ListItemIcon>
//                 <LeaderboardRoundedIcon/>
//               </ListItemIcon>
//               <ListItemText primary="Dashboard" />
//             </ListItemButton>
//         </ListItem>
//         <ListItem>
//         <ListItemButton onClick={profile_page}>
//               <ListItemIcon>
//                 <LeaderboardRoundedIcon/>
//               </ListItemIcon>
//               <ListItemText primary="Add Expense" />
//             </ListItemButton>
//         </ListItem>
//         <ListItem>
//         <ListItemButton>
//               <ListItemIcon>
//                 <LeaderboardRoundedIcon/>
//               </ListItemIcon>
//               <ListItemText primary="Profile" />
//             </ListItemButton>
//         </ListItem>
//       </List>
//         {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//       <Divider />
//       {/* <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//     </Box>
//   );

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }