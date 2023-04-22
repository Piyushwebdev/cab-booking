import React, { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CancelIcon from '@mui/icons-material/Cancel';
const Navbar = () => {
  const small = useMediaQuery("(min-width:600px)");
  const[menu,setMenu]=useState(false)
  return (
    <div>
      {menu? <div style={{width:"100%",height:"100vh",background:"black",top:"0"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
            <IconButton style={{color:"white"}} aria-label="delete" onClick={() => {setMenu(false)}}>
              <CancelIcon />
            </IconButton>
            </div>
            <div style={{textAlign:"center",cursor:"pointer",fontWeight:"700",color:"white",fontSize:"1.25rem"}}>Get Quote</div>
            <div style={{textAlign:"center",cursor:"pointer",fontWeight:"700",color:"white",fontSize:"1.25rem"}}>About</div>
            <div style={{textAlign:"center",cursor:"pointer",fontWeight:"700",color:"white",fontSize:"1.25rem"}}>Services</div>
            <div style={{textAlign:"center",cursor:"pointer",fontWeight:"700",color:"white",fontSize:"1.25rem"}}>Blog</div>
            <div style={{textAlign:"center",cursor:"pointer",fontWeight:"700",color:"white",fontSize:"1.25rem"}}>Contact</div>
            <div style={{textAlign:"center",cursor:"pointer",fontWeight:"700",color:"white",fontSize:"1.25rem"}}>COVID 19</div>
          </div>:
      small ? (
        <div
          style={{
            paddingBlock: "0.75rem",
            color: "white",
            fontWeight: "800",
            backgroundColor: "#0B1726",
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div>
            <img
              style={{ width: "250px", cursor: "pointer" }}
              src="/logo.png"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.8rem",
              cursor: "pointer",
            }}
          >
            <span>Get Qoute</span>
            <span>About</span>
            <span>Services</span>
            <span>Blog</span>
            <span>Contact</span>
            <span>COVID-19</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span>
              <LocalPhoneIcon />
            </span>
            <span>7891773632</span>
          </div>
        </div>
      ) : (
        <div
          style={{
            paddingBlock: "0.75rem",
            color: "white",
            fontWeight: "800",
            backgroundColor: "#0B1726",
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
            position:"relative",
            color:"white"
          }}
        >
          <div>
            <IconButton aria-label="delete" style={{color:"white"}} onClick={() => {setMenu(true)}}>
              <MenuIcon />
            </IconButton>
          </div>
          <div>
            <img style={{ width: "80px", cursor: "pointer" }} src="/logo.png" />
          </div>
          <div>
            <LocalPhoneIcon />
          </div>    
        </div>
      )}
    </div>
  );
};

export default Navbar;
