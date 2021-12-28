import { Card, Container, Grid, LinearProgress } from "@mui/material";
import StoneDetailsCard from './components/stone-details-card';
import StoneMedia from './components/stone-media';
import Item from './components/Item'
import React from 'react';
import { useState } from 'react';
import { useQuery } from "react-query";
import { StyledButton, Wrapper } from "./stone-details.styles";
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import Cart from './components/Cart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

//data types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

//sample API
const getProducts = async (): Promise<CartItemType> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

  
 //Test data 
const stoneEntity = {
  id: '1235',

  details1: [
    { id: 'Key1', value: 'Value1' },
    { id: 'Key2', value: 'Value2' },
    { id: 'Key3', value: 'Value3' },
    { id: 'Key4', value: 'Value4' },
    { id: 'Key5', value: 'Value5' },
    { id: 'Key6', value: 'Value6' },
    { id: 'Key7', value: 'Value7' },
    { id: 'Key8', value: 'Value8' },
    { id: 'Key9', value: 'Value9' },

  ],

  details2: [
    { id: 'Key1', value: 'Value1' },
    { id: 'Key2', value: 'Value2' },
    { id: 'Key3', value: 'Value3' },
    { id: 'Key4', value: 'Value4' },
    { id: 'Key5', value: 'Value5' },
    { id: 'Key6', value: 'Value6' },
    { id: 'Key7', value: 'Value7' },
    { id: 'Key8', value: 'Value8' },
    { id: 'Key9', value: 'Value9' },
   ],

  details3: [
    { id: 'Key1', value: 'Value1' },
    { id: 'Key2', value: 'Value2' },
    { id: 'Key3', value: 'Value3' },
    { id: 'Key4', value: 'Value4' },
    { id: 'Key5', value: 'Value5' },
    { id: 'Key6', value: 'Value6' },
    { id: 'Key7', value: 'Value7' },
    { id: 'Key8', value: 'Value8' },
    { id: 'Key9', value: 'Value9' },
  ],

  details4: [
    { id: 'Key1', value: 'Value1' },
    { id: 'Key2', value: 'Value2' },
    { id: 'Key3', value: 'Value3' },
    { id: 'Key4', value: 'Value4' },
    { id: 'Key5', value: 'Value5' },
    { id: 'Key6', value: 'Value6' },
    { id: 'Key7', value: 'Value7' },
    { id: 'Key8', value: 'Value8' },
    { id: 'Key9', value: 'Value9' },
  ],

  certificateUrl: "https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf",
  imageUrl: "https://via.placeholder.com/1000?text=Stone Image",
  videoUrl: "https://pckpb.blob.core.windows.net/dim/hd/Vision360.html?d=308-11-A",
}

//main----------------------------------------------------------------------------
export default function IndexPage() {
  const[cartOpen,setCartOpen]= useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products', getProducts);
 
  //cart total
  const getTotalItems = (items: CartItemType[]) =>
  items.reduce((ack: number, item) => ack + item.amount, 0);

  //loading page during initial loading
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Diamonds are being polished..Please visit later</div>;


  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];

    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };


  return (
    <Wrapper>
      <Container>
      <Grid container rowSpacing={3} columnSpacing={2}>
        <Grid item xs={12}>
          <h1> Stone {stoneEntity.id}</h1>
        </Grid>
        <Grid item xs={12}>
          <StoneMedia stone = {stoneEntity}/>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <StoneDetailsCard stoneDetails = {stoneEntity.details1}/>
            </Grid>
            <Grid item xs={3}>
              <StoneDetailsCard stoneDetails = {stoneEntity.details2}/>
            </Grid>
            <Grid item xs={3}>
              <StoneDetailsCard stoneDetails = {stoneEntity.details3}/>
            </Grid>
            <Grid item xs={3}>
              <StoneDetailsCard stoneDetails = {stoneEntity.details4}/>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <iframe
              src="https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf"
              height="500"
              width="100%"
              ></iframe>
          </Card>
        </Grid>
        </Grid>
      </Container>
        
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

      <StyledButton onClick={() =>setCartOpen(true)    }>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <div style={{ padding: 20 }}>

    <Grid container spacing = {3}>
      {data?.map(item =>(
        <Grid item key ={item.ud} xs={12} sm={4}>
          <Item item={item} handleAddToCart={handleAddToCart}/>
          </Grid>
        
      ))}
    </Grid>
    </div>
    </Wrapper>
  );
}
