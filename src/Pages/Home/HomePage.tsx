import React, { useState } from 'react';
import clsx from 'clsx';
import {
	Typography,
	Box,
	CssBaseline,
	Toolbar,
	AppBar,
	IconButton,
	Badge,
	Drawer,
	Divider,
	List,
	Avatar,
} from '@material-ui/core';
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import MenuOpenTwoToneIcon from '@material-ui/icons/MenuOpenTwoTone';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link } from 'react-navi';
import { mainListItems, secondaryListItems } from '../Components/ListItem';
import './Home.css';
import '../../assets/css/App.css';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link href="https://material-ui.com/">krissanjaya</Link> {new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const drawerWidth = 240;

const StyledBadge = withStyles((theme) => ({
	badge: {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: '$ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}))(Badge);

const useStyles = makeStyles((theme) => ({
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
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
		height: '100%',
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
}));

const HomePage = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className="root">
			<CssBaseline />
			<AppBar position="absolute" elevation={10} className={clsx(classes.appBar, open && classes.appBarShift)}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
					>
						<MenuTwoToneIcon />
					</IconButton>
					<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
						Dashboard
					</Typography>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<NotificationsNoneTwoToneIcon />
						</Badge>
					</IconButton>
					<IconButton color="inherit">
						<StyledBadge
							overlap="circle"
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							variant="dot"
						>
							<Avatar alt="My Profile" />
						</StyledBadge>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				style={{ minHeight: '100%' }}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<MenuOpenTwoToneIcon />
					</IconButton>
				</div>
				<Divider />
				<List>{mainListItems}</List>
				<Divider />
				<List>{secondaryListItems}</List>
			</Drawer>
			{/* <Box pt={4}>
				<Copyright />
			</Box> */}
		</div>
	);
};

export default HomePage;
