import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Ring1 from "../assets/Ring1.jpg";
import Ring2 from "../assets/Ring2.jpg";
import Clock from "../assets/Clock.jpg";
import RedShoe from "../assets/RedShoe.jpg";
import YellowShoe from "../assets/YelllowShoe.jpg";
import WhiteShoe from "../assets/WhiteShoe.jpg";
import { useCartContext } from "../CardContext/CartContext";
import React from "react";

const ProductsBox = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  flexWrap: "wrap",
  gap: theme.spacing(4),
  // backgroundColor:"yellow"
}));

const ProductCard = styled(Card)(({ theme }) => ({
  minHeight: 320,
  width: 250,
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  //   backgroundColor: "yellow",
  borderRadius: "20px",
  flexDirection: "column",
  boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.55)",
  fontFamily: "Madimi One, sans-serif",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover ": {
    transform: "translateY(-3px)",
    boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.99)",
  },
}));

const CardButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 7),
  borderRadius: "25px",
  backgroundColor: "#2864fc",
  color: "#000a24",
  fontFamily: "Madimi One, sans-serif",
  marginLeft: theme.spacing(1),
}));

const productData = [
  {
    productImage: Clock,
    productName: "Clock",
    productDetail: "Best Clock to know the time.",
    productRating: <Rating value={1.5} readOnly />,
    productBuyed: "(11,287)",
    productPrice: "799",
  },
  {
    productImage: Ring1,
    productName: "Silver Ring",
    productDetail: "Best Ring to wear your fingers.",
    productRating: <Rating value={3.5} readOnly />,
    productBuyed: "(4,287)",
    productPrice: "1599",
  },
  {
    productImage: Ring2,
    productName: "Gold Ring",
    productDetail: "One and only Ring to know youre rich.",
    productRating: <Rating value={4.5} readOnly />,
    productBuyed: "(1,287)",
    productPrice: "1455",
  },
  {
    productImage: RedShoe,
    productName: "Red Shoe",
    productDetail: "Best Shoe to wear in your Leg.",
    productRating: <Rating value={5} readOnly />,
    productBuyed: "(15,287)",
    productPrice: "799",
  },
  {
    productImage: YellowShoe,
    productName: "Yellow Shoe",
    productDetail: "Best Yellow shoe to know the personality.",
    productRating: <Rating value={4} readOnly />,
    productBuyed: "(7,987)",
    productPrice: "2099",
  },
  {
    productImage: WhiteShoe,
    productName: "White Shoe",
    productDetail: "Best White color Shoe.",
    productRating: <Rating value={3.5} readOnly />,
    productBuyed: "(4,765)",
    productPrice: "2000",
  },
];

function Home() {
  const { addToCart } = useCartContext();

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          minHeight: 150,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            background: `linear-gradient(153deg, rgba(255,0,56,1) 0%, rgba(45,77,255,1) 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 600,
            fontFamily: "Madimi One, sans-serif",
          }}
        >
          Terminal Wizard
        </Typography>
      </Box>
      <ProductsBox>
        {productData.map((product, index) => (
          <ProductCard key={index}>
            <CardMedia
              component="img"
              src={product.productImage}
              alt="productimages"
              height={150}
            />
            <CardContent>
              <Typography
                variant="h5"
                style={{ fontFamily: "Madimi One, sans-serif" }}
              >
                {product.productName}
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ fontFamily: "Madimi One, sans-serif" }}
              >
                {product.productDetail}
              </Typography>
              {product.productRating}
              <Typography
                variant="body2"
                style={{
                  fontFamily: "Madimi One, sans-serif",
                  color: "rgba(71, 71, 71, 0.7)",
                  fontSize: "13px",
                }}
              >
                {product.productBuyed}
              </Typography>
              <Typography
                variant="h6"
                style={{ fontFamily: "Madimi One, sans-serif" }}
              >
                {product.productPrice}/-
              </Typography>
              <CardButton
                variant="outlined"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </CardButton>
            </CardContent>
          </ProductCard>
        ))}
      </ProductsBox>
    </>
  );
}

export default Home;
