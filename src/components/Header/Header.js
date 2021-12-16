import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material' 
import { Link as RouterLink } from 'react-router-dom'


const headersData = [
    {
        label: "Listings",
        href: "/listings"
    },
    {
        label: "Mentors",
        href: "/mentors"
    },
    {
        label: "My Account",
        href: "/account"
    },
    {
        label: "Log Out",
        href: "/logout"
    }
]

const getMenuButtons = () => {
    return headersData.map(({label,href})=>{
        return (
            <Button
            {
                ...{
                    key: label,
                    color: "inherit",
                    to: href,
                    component: RouterLink
                }
            }>
                {label}
            </Button>
        )
    })
}

const Header = () => {

    const tlanetiaLogo = (
        <Typography
            variant="h6"
            component="h1"
        >
            Tlanetia
        </Typography>
    )

    const display = () => {
        return (
            <Toolbar>
                {tlanetiaLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        )
    }

    return (
        <header>
            <AppBar
            >
                {display()}
            </AppBar>
        </header>
    )
}

export default Header