import { Grid, List, ListItem, Typography, Card, Button } from '@mui/material';
import { Link } from '@mui/icons-material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React from 'react';
import Data from '../../utils/data';
import { header, footer } from '../../components/Layout';
import NextLink from 'next/link';

export default function ProductScreen() {
  const route = useRouter();
  const { slug } = route.query;
  const product = Data.products.find((a) => a.slug === slug);
  if (!product) {
    return <Typography>Product not found</Typography>;
  } else {
    return (
      <div>
        {header(['products', product.name], product.description)}
        <div style={{ minHeight: '80vh', margin: '10px' }}>
          <NextLink href="/" passHref>
            <Typography component="a" style={{ fontWeight: 'Bold' }}>
              Home
            </Typography>
          </NextLink>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Image
                src={product.image}
                alt={product.name}
                width={640}
                height={640}
                layout="responsive"
              ></Image>
            </Grid>
            <Grid item md={3} xs={12}>
              <List>
                <ListItem>
                  <Typography
                    component={'h1'}
                    variant="h1"
                    style={{ fontWeight: 'bold' }}
                  >
                    {product.name}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ fontWeight: 'bold' }}>
                    Category:{product.category}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ fontWeight: 'bold' }}>
                    Brand:{product.brand}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ fontWeight: 'bold' }}>
                    Rating:{product.rating} stars from {product.numOfReviews}{' '}
                    reviews
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography style={{ fontWeight: 'bold' }}>
                    Description:{product.description}
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3} xs={12}>
              <Card>
                <List>
                  <ListItem>
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <Typography>Price: </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{product.price}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <Typography>Status:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>
                          {product.countInStock > 0
                            ? 'In stock'
                            : 'Out of stock'}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Button fullWidth variant="contained" color="primary">
                      Add to cart
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </div>
        {footer()};
      </div>
    );
  }
}
