import { ShoppingCart } from "@mui/icons-material";
import { Badge, Box, IconButton, List } from "@mui/material";
import { AppBar, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

type Props = {
    setDarkMode: () => void
}

const navStyles = {
    color: 'inherit', typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

export default function Header({ setDarkMode }: Props) {

    const midLinks = [
        { title: 'catalog', path: '/catalog' },
        { title: 'about', path: '/about' },
        { title: 'contact', path: '/contact' }]

    const rightLinks = [
        { title: 'login', path: '/login' },
        { title: 'register', path: '/register' }]

    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography variant="h6" component={NavLink} to='/'
                        sx={navStyles}
                    >RE-STORE</Typography>
                    <Switch onChange={(e) => { setDarkMode() }} />
                </Box>

                <List sx={{ display: 'flex' }}>
                    {
                        midLinks.map(({ title, path }) => (
                            <ListItem component={NavLink} to={path} key={path}
                                sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))
                    }
                </List>
                <Box display='flex' alignItems='center'>
                    <IconButton size="large" sx={{ color: 'inherit' }}>
                        <Badge badgeContent={4} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {
                            rightLinks.map(({ title, path }) => (
                                <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                                    {title.toUpperCase()}
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}