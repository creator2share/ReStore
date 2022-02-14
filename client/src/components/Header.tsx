import { AppBar, Switch, ToggleButton, Toolbar, Typography } from "@mui/material";

type Props = {
    setDarkMode: () => void
}

export default function Header({ setDarkMode }: Props) {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant="h6">RE-STORE</Typography>
                <Switch onChange={(e) => { setDarkMode() }} />
            </Toolbar>
        </AppBar>
    )
}