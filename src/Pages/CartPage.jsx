import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useCartContext } from "../CardContext/CartContext";
import { useNavigate } from "react-router-dom";

const CartBox = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(3),
  padding: theme.spacing(3),
}));

const CartItemBox = styled(Box)(({ theme }) => ({
  height: 300,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.99)",
}));

const CartItemCard = styled(Card)(({ theme }) => ({
  height: "100%",
  width: "100",
}));
const CartItemImageBox = styled(Box)(({ theme }) => ({
  height: 300,
  width: 400,
  display: "flex",
}));
const CartItemDetailsBox = styled(Box)(({ theme }) => ({
  height: 300,
  width: 600,
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#f5d98c",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(3),
}));

const BuyBox = styled(Box)(({ theme }) => ({
  minHeight: 150,
  width: "70%",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#f5d98c",
  flexDirection: "column",
  padding: theme.spacing(3),
}));

const CardButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: "25px",
  backgroundColor: "#2864fc",
  color: "#000a24",
  width: 280,
  alignSelf: "center",
  fontFamily: "Madimi One, sans-serif",
}));

function CartPage() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCartContext();
  const [open, setOpen] = useState(false);
  // const [orderDetails, setOrderDetails] = useState(null);

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseInt(item.productPrice),
    0
  );

  const handleClose = () => {
    setOpen(false);
  };

  const handleBuyNow = () => {
    setOpen(true);
  };

  const handleProceedToCheckout = () => {
    setOpen(false);
    const order = {
      products: cartItems.map((item) => ({
        productName: item.productName,
        productPrice: item.productPrice,
      })),
      userDetails: {
        fullName: document.getElementById("full-name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        pincode: document.getElementById("pincode").value,
        landmark: document.getElementById("landmark").value,
      },
    };
    navigate("/orders", { state: order });
  };

  return (
    <CartBox>
      <Typography
        variant="h1"
        sx={{
          fontSize: "102px",
          fontWeight: 600,
          textDecoration: "underline",
          fontFamily: "Madimi One, sans-serif",
          letterSpacing: 1,
        }}
      >
        Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography
          variant="h3"
          sx={{
            fontSize: "52px",
            fontFamily: "Madimi One, sans-serif",
          }}
        >
          Uff.! Cart is empty!
        </Typography>
      ) : (
        cartItems.map((item, index) => (
          <CartItemBox key={index}>
            <CartItemImageBox>
              <CartItemCard>
                <CardMedia
                  src={item.productImage} // Assuming productImage is in the item object
                  component="img"
                  alt="selected-product"
                  height="100%"
                />
              </CartItemCard>
            </CartItemImageBox>
            <CartItemDetailsBox>
              <Typography
                variant="h4"
                sx={{ fontFamily: "Madimi One, sans-serif" }}
              >
                {item.productName}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Madimi One, sans-serif" }}
              >
                {item.productDetail}
              </Typography>
              {item.productRating}
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: "Madimi One, sans-serif",
                  color: "rgba(71,71,71, 0.7)",
                }}
              >
                {item.productBuyed}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Madimi One, sans-serif" }}
              >
                {item.productPrice}/-
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <CardButton
                  variant="outlined"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </CardButton>
              </Box>
            </CartItemDetailsBox>
          </CartItemBox>
        ))
      )}
      <BuyBox>
        <Typography
          variant="body1"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Madimi One, sans-serif",
          }}
        >
          Total items: <span> {totalItems}</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Madimi One, sans-serif",
          }}
        >
          Total Price: <span>{totalPrice}/-</span>
        </Typography>
        <Divider />
        <CardButton variant="outlined" onClick={handleBuyNow}>
          Buy Now
        </CardButton>
      </BuyBox>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Checkout</DialogTitle>
        <DialogContent>
          <TextField
            id="full-name"
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="pincode"
            label="Pincode"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="landmark"
            label="Landmark"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <CardButton onClick={handleClose}>Cancel</CardButton>
          <CardButton onClick={handleProceedToCheckout}>
            Proceed to Checkout
          </CardButton>
        </DialogActions>
      </Dialog>
    </CartBox>
  );
}

export default CartPage;
