import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Card from '@material-ui/core/Card';
import { Avatar } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import { green } from '@material-ui/core/colors';
import CardContent from '@material-ui/core/CardContent';
import Dates from './date';
import BusinessSharpIcon from '@material-ui/icons/BusinessSharp';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MaterialTable from "material-table";
import Edit from '@material-ui/icons/Edit';
import bphc from './images/Bphc.jpg';
import {useHistory} from 'react-router-dom';
import MenuListComposition from './Profile';
import MasterButton from './masterbutton';
import Kotta from './components/Kotta';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  // tools:{
  //   color: "red"
  // },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    backgroundImage:`url(${bphc})`,
    backgroundSize: 'cover',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  main:{
      textAlign:'right',
  },
  announcementpanel:{
    width:1000,
    marginBottom:theme.spacing(3),
  },
  heading:{
    paddingleft:theme.spacing(4),
    bottom:20,
  },
  avatar:{
    backgroundColor:green[500],
  }
}));



export default function Dashboard() {
  const history=useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const gotomaster = () => {
    history.push('/master');
  };
  const gotoPitched18 = () => {
    history.push('/pc18');
  };
  
  const gotoPitched19 = () => {
    history.push('/pc19');
  };

  const gotoPitched20 = () => {
    history.push('/pc20');
  };
  
  const gotoPast19 = () => {
    history.push('/pr19');
  };

  const gotoPast20 = () => {
    history.push('/pr20');
  };

  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  

  return (
    

    <div className={classes.root}>
      <AppBar style={{background:'#9591e3'}} position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        {/* <div className={classes.tools}> */}
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard
            </Typography>
            
            <Avatar  src="/broken-image.jpg"  />
                <MenuListComposition />
          </Toolbar>
        {/* </div> */}
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
         
        </div>
        <div> <IconButton onClick={gotoPitched18} variant="outlined" color="primary">
            PC 2018
          </IconButton></div>

          <div> <IconButton  onClick={gotoPitched19}variant="outlined" color="primary">
            PC 2019
          </IconButton></div> 
        
          <div> <IconButton  onClick={gotoPitched20}variant="outlined" color="primary">
            PC 2020
          </IconButton></div>

          <div> <IconButton  onClick={gotoPast19}variant="outlined" color="primary">
            PR 2019
          </IconButton></div>

          <div> <IconButton  onClick={gotoPast20}variant="outlined" color="primary">
            PR 2020
          </IconButton></div>
          
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}> 
            <div className={classes.main}>
              <MasterButton />     
            </div>
        </Container>
        <Container maxWidth="lg" className={classes.container}> 
            <div className={classes.main}>
            <Button
            variant="contained"
             color="primary"
                onClick={gotoPitched18}>
          Add Table <AddBoxIcon />
         </Button>

      <div>
        <Kotta>

        </Kotta>
        </div>       
            </div>
        </Container>
        
            {/* <Grid Wrap container spacing={3}>
            {notes.map(item => (
              <Grid item key={item.id} md={4} backgroundColor={"green"}>
                <Card spacing="3"> 
                <CardHeader avatar={
                  <Avatar aria-label="add" className={classes.avatar}>A</Avatar>
                } title={item.written} subheader={<Dates />} /><CardContent>Name: {item.title}
                </CardContent></Card>
              </Grid>
            ))}
                <Container>
                 <Fab color="primary" aria-label="add">
                    <AddIcon />
                  </Fab>
                </Container>
          </Grid> */}
          <br />
          <br />   
      </main>
    </div>
  );
}