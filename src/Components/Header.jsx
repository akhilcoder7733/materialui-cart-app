import React from "react";
import { styled } from "@mui/system";
import { Box, Button, Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../CardContext/CartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const HeaderBox = styled(Box)(({ theme }) => ({
  minHeight: "20vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor:"yellow",
  gap: theme.spacing(3),
}));

const HeaderButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 7),
  borderRadius: "25px",
  backgroundColor: "#2864fc",
  color: "#000a24",
  fontFamily: "Madimi One, sans-serif",
}));
function Header() {
  const navigate = useNavigate();
  const { cartCount } = useCartContext();
  return (
    <HeaderBox>
      <HeaderButton variant="outlined" onClick={() => navigate("/")}>
        Home
      </HeaderButton>
      <HeaderButton variant="outlined" onClick={() => navigate("/cart")}>
        Cart
        <Badge badgeContent={cartCount} color="error">
          <AddShoppingCartIcon sx={{ fontSize:"20px", marginLeft:"5px"}}/>
        </Badge>
      </HeaderButton>{" "}
      <HeaderButton variant="outlined" onClick={() => navigate("/orders")}>
        Orders
      </HeaderButton>
    </HeaderBox>
  );
}

export default Header;
