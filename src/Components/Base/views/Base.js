import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChurchIcon from '@mui/icons-material/Church';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Collapse, Menu, MenuItem } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionTypes from "../../../Store/Menu/ActionTypes"
import { useEffect } from 'react';
import { useState } from 'react';
import { ExpandLess, ExpandMore, Logout, PersonAdd, Settings } from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
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

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
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

export default function Base({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const { open, fixedMenu, isMobile } = useSelector(state => state?.MenuReducer);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState();

    useEffect(() => {
        setSelectedIndex(sessionStorage.getItem("selectedMenu") || 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDrawerOpen = () => {
        dispatch({ type: ActionTypes.OPEN_MENU })
    };

    const handleDrawerClose = () => {
        dispatch({ type: ActionTypes.CLOSE_MENU })
        setConfigCollapse(false)
        setMasterCollapse(false)
    };
    const menuItemData = [
        { id: '1', name: "Dashboard", to: "/dashboard", icon: <DashboardIcon fontSize='small' /> },
        { id: '2', name: "About", to: "/about", icon: <ChurchIcon fontSize='small' /> },
        { id: '3', name: "Users", to: "/users", icon: <ChurchIcon fontSize='small' /> },
        { id: '4', name: "Master", to: "/master", icon: <ChurchIcon fontSize='small' /> },
        { id: '5', name: "Blood Group", to: "/bloodgroup", icon: <ChurchIcon fontSize='small' /> }
    ]

    const handleListItemClick = (event, index, url) => {
        navigate(url);
        sessionStorage.setItem("selectedMenu", index);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Popup menu
    const [configCollapse, setConfigCollapse] = useState(false);
    const [masterCollapse, setMasterCollapse] = useState(false);
    const [anchorEl1, setAnchorEl1] = useState(null);
    const openMenu = Boolean(anchorEl1);
    const handleMenuClick = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl1(null);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        HRMS
                    </Typography>
                    {(
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {menuItemData.map((menuItem, index) => (
                        <ListItem key={menuItem?.id} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                selected={selectedIndex === menuItem?.id}
                                onClick={(event) => handleListItemClick(event, menuItem?.id, menuItem?.to)}
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
                                    {menuItem?.icon}
                                </ListItemIcon>
                                <ListItemText primary={menuItem?.name} sx={{ opacity: open ? 1 : 0, fontWeight: 400 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <ListItemButton selected={selectedIndex === 'user'}
                        onClick={(event) => handleListItemClick(event, 'user', "/users")} >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Users"} />
                    </ListItemButton>
                    {/* Configurations */}
                    <ListItemButton onClick={(event) => !open ? handleMenuClick(event) : setConfigCollapse(!configCollapse)}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Configurations" />
                        {configCollapse ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={configCollapse} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton selected={selectedIndex === "config1"}
                                onClick={(event) => handleListItemClick(event, "config1", "/bloodgroup")} sx={{ pl: 4, justifyContent: "center" }}>
                                <ListItemIcon>
                                    <span style={{
                                        width: "4px",
                                        height: "4px",
                                        borderRadius: "50%",
                                        backgroundColor: theme.palette.primary.main,
                                        transition: "transform 200ms cubicBezier(0.4, 0, 0.2, 1) 0ms",
                                        transform: "scale(2)"
                                    }}></span>
                                </ListItemIcon>
                                <ListItemText primary="Blood Group" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    {/* Masters */}
                    <ListItemButton onClick={(event) => !open ? handleMenuClick(event) : setMasterCollapse(!masterCollapse)}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Masters" />
                        {masterCollapse ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={masterCollapse} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton selected={selectedIndex === "master1"}
                                onClick={(event) => handleListItemClick(event, "master1", "/about")} sx={{ pl: 4, justifyContent: "center" }}>
                                <ListItemIcon>
                                    <span style={{
                                        width: "4px",
                                        height: "4px",
                                        borderRadius: "50%",
                                        backgroundColor: theme.palette.primary.main,
                                        transition: "transform 200ms cubicBezier(0.4, 0, 0.2, 1) 0ms",
                                        transform: "scale(2)"
                                    }}></span>
                                </ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Drawer>
            <Menu
                anchorEl={anchorEl1}
                id="account-menu"
                open={openMenu}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
                PaperProps={{
                    elevation: 1,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        ml: 6.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 15,
                            left: -4.5,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <div><Toaster position='top-right' /></div>
                {children}
            </Box>
        </Box>
    );
}
