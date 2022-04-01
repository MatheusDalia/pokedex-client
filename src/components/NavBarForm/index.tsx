import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './assets/navbar-logo.svg';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export default function SearchAppBar() {
  const router = useRouter();

  const createLink = (e) => {
    e.preventDefault();
    router.push('/createForms');
  };

  const homeLink = (e) => {
    e.preventDefault();
    router.push('/');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                sm: 'flex',
                display: 'flex',
                alignItems: 'center'
              }
            }}
          >
            {' '}
            <Button onClick={homeLink}>
              <Image
                // marginRight="2rem"
                src={logo}
                width="100px"
                alt="nav-bar=logo"
              ></Image>
            </Button>
            <Box ml={8} mt={1}>
              <Button
                onClick={createLink}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'flex',

                  fontSize: '14px'
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 1 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                Criar pokemon
              </Button>
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
