import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

const OrderBox = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(3),
  padding: theme.spacing(3),
}));

const ContactBox = styled(Box)(({ theme }) => ({
  minHeight: "40vh",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: "20px",
  boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.99)",
}));

const CardButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 7),
  borderRadius: "25px",
  backgroundColor: "#2864fc",
  color: "#000a24",
  fontFamily: "Madimi One, sans-serif",
}));

function Orders() {
  const location = useLocation();
  const order = location.state;
  const navigate = useNavigate();

  if (!order) {
    return (
      <OrderBox>
        <Typography
          variant="h1"
          sx={{
            fontSize: "102px",
            fontWeight: 600,
            fontFamily: "Madimi One, sans-serif",
          }}
        >
          Order Details
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, fontFamily: "Madimi One, sans-serif" }}
        >
          No orders for now..!
        </Typography>
      </OrderBox>
    );
  }

  return (
    <OrderBox>
      <Typography
        variant="h1"
        sx={{
          fontSize: "102px",
          fontWeight: 600,
          fontFamily: "Madimi One, sans-serif",
        }}
      >
        Order Details
      </Typography>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            textAlign: "center",
            fontFamily: "Madimi One, sans-serif",
          }}
        >
          Product Details:
        </Typography>
        {order.products &&
          order.products.map((product, index) => (
            <Box key={index}>
              <Typography
                variant="body1"
                style={{ fontFamily: "Madimi One, sans-serif" }}
              >
                Name:{" "}
                <span style={{ fontWeight: 600 }}>{product.productName}</span>
              </Typography>
              <Typography style={{ fontFamily: "Madimi One, sans-serif" }}>
                Price:{" "}
                <span style={{ fontWeight: 600 }}>{product.productPrice}</span>
                /-
              </Typography>
            </Box>
          ))}
      </Box>
      <ContactBox>
        <Typography
          variant="h5"
          style={{ fontFamily: "Madimi One, sans-serif" }}
        >
          Contact Details:
        </Typography>
        {order.userDetails && (
          <>
            <Typography style={{ fontFamily: "Madimi One, sans-serif" }}>
              Name:{" "}
              <span style={{ fontSize: "22px" }}>
                {order.userDetails.fullName}{" "}
              </span>
            </Typography>
            <Typography style={{ fontFamily: "Madimi One, sans-serif" }}>
              Email: {order.userDetails.email}
            </Typography>
            <Typography style={{ fontFamily: "Madimi One, sans-serif" }}>
              Phone: {order.userDetails.phone}
            </Typography>
            <Typography style={{ fontFamily: "Madimi One, sans-serif" }}>
              Address: {order.userDetails.address}
            </Typography>
            <Typography style={{ fontFamily: "Madimi One, sans-serif" }}>
              Pincode: {order.userDetails.pincode}
            </Typography>
            <Typography style={{ fontFamily: "Madimi One, sans-serif" }}>
              Landmark: {order.userDetails.landmark}
            </Typography>
          </>
        )}
        <CardButton
          variant="outlined"
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        >
          Back to Home
        </CardButton>
      </ContactBox>
    </OrderBox>
  );
}

export default Orders;
