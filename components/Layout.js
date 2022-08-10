import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Switch, Toolbar, Typography } from '@mui/material';
import { ModeContext } from '../utils/ModeWrapper';

function header(path, description) {
  let toolbarHeading = 'Amazona';
  if (path) {
    path.map((element) => {
      toolbarHeading = toolbarHeading + '>' + element;
      return 1;
    });
  }

  const { isDark, toggleMode } = useContext(ModeContext);
  return (
    <div>
      <Head>
        <title>Amazona</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar
        position="static"
        style={{
          backgroundColor: '#100F0F',
          '& a': {
            marginLeft: 10,
            color: '#F1F1F1',
          },
        }}
      >
        <Toolbar>
          <NextLink href={'/'} passHref>
            <Typography
              style={{ fontWeight: 'Bold', color: 'white', size: '3rem' }}
            >
              {toolbarHeading}
            </Typography>
          </NextLink>
          <div style={{ flexGrow: 1 }}></div>
          <Switch
            checked={isDark}
            onClick={() => {
              toggleMode();
            }}
          ></Switch>
          <NextLink href={'/login'} passHref>
            <Typography style={{ marginRight: 15 }} component="a">
              Login
            </Typography>
          </NextLink>
          <NextLink href={'/cart'} passHref>
            <Typography component="a">Add to cart</Typography>
          </NextLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function footer() {
  let date = new Date().getFullYear;
  return (
    <Typography style={{ textAlign: 'center' }}>
      Copyright @Amazona{date}
    </Typography>
  );
}

export { header, footer };
