import { header, footer } from '../components/Layout.js';
import Data from '../utils/data';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NextLink from 'next/link';
import { useContext } from 'react';
import { ModeContext } from '../utils/ModeWrapper.js';

export default function Home() {
  const theme2 = useContext(ModeContext);
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1 rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1 rem 0',
      },
    },
    palette: {
      mode: theme2.isDark ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {header()}
        <h1>Products</h1>
        <Grid container spacing={3} style={{ minHeight: '80vh' }}>
          {Data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      container
                      style={{ maxHeight: '75vh' }}
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>{product.price}</Typography>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {footer()}
      </ThemeProvider>
    </div>
  );
}
