import Stack  from '@mui/material/Stack'
import React from 'react'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack direction='row' alignItems='center' p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png' alt="logo" height={45} />
        <SearchBar/>
    </Stack>
  )
}

export default Navbar