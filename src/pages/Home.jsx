import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsSubwayFilledIcon from "@mui/icons-material/DirectionsSubwayFilled";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import SailingIcon from "@mui/icons-material/Sailing";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TaxiCard from "../components/TaxiCard";
import Alert from '@mui/material/Alert';
const Home = () => {
  const [ans1, setAns1] = useState(false);
  const [alert,setAlert]=useState(false)
  const [alertMessage,setAlertMessage]=useState("")
  return (
    <div>
      <Navbar />
     {alert? <Alert severity="error" onClose={() => {setAlert(false);setAlertMessage("")}}>{alertMessage}</Alert>:""}
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          position:"relative"
        }}
      >
        <TaxiCard setAlert={setAlert} setAlertMessage={setAlertMessage}/>
        <img style={{ opacity: "0.75" }} src="/bg.jpg" />
      </div>
      <div style={{ paddingInline: "10%" }}>
        <h1 className="rideHeading"
          // style={{
          //   textAlign: "center",
          //   paddingInline: "5%",
          //   paddingBlock: "5rem",
          //   fontSize: "48px",
          // }}
        >
          Enjoy comfortable ride in Maxi Taxi, Outstation maxi taxi and Airport
          taxi. Book Maxi Taxi Perth hassle free at fixed price
        </h1>
        <img
          src="/cab.webp"
          style={{
            width: "60%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <div
        className="ourService"
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",  
            gap: "8px",
            marginBlock: "7rem",
          }}
        >
          <span>Our</span>{" "}
          <span style={{ color: "#4C74B9", textDecoration: "underline" }}>
            Services
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: "3rem",
            marginBottom: "5rem",
          }}
        >
          <div
            className="taxicard"
            style={{
              width: "320px",
              cursor: "pointer",
              height: "230px",
              borderRadius: "30px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              className="taxicardcircle"
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "pink",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DirectionsSubwayFilledIcon
                className="taxiIcon"
                sx={{ color: "#4C74B9", fontSize: "48px" }}
              />
            </div>
            <div
              className="taxiheadig"
              style={{ marginTop: "12px", fontWeight: "600" }}
            >
              Maxi Taxi Perth
            </div>
          </div>
          <div
            className="taxicard"
            style={{
              width: "320px",
              cursor: "pointer",
              height: "230px",
              borderRadius: "30px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              className="taxicardcircle"
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "pink",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AirplanemodeActiveIcon
                className="taxiIcon"
                sx={{ color: "#4C74B9", fontSize: "48px" }}
              />
            </div>
            <div
              className="taxiheadig"
              style={{ marginTop: "12px", fontWeight: "600" }}
            >
              Airplane Perth
            </div>
          </div>
          <div
            className="taxicard"
            style={{
              width: "320px",
              cursor: "pointer",
              height: "230px",
              borderRadius: "30px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              className="taxicardcircle"
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "pink",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SailingIcon
                className="taxiIcon"
                sx={{ color: "#4C74B9", fontSize: "48px" }}
              />
            </div>
            <div
              className="taxiheadig"
              style={{ marginTop: "12px", fontWeight: "600" }}
            >
              Sailing Perth
            </div>
          </div>
          <div
            className="taxicard"
            style={{
              width: "320px",
              cursor: "pointer",
              height: "230px",
              borderRadius: "30px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              className="taxicardcircle"
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "pink",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <WheelchairPickupIcon
                className="taxiIcon"
                sx={{ color: "#4C74B9", fontSize: "48px" }}
              />
            </div>
            <div
              className="taxiheadig"
              style={{ marginTop: "12px", fontWeight: "600" }}
            >
              Wheel Chair Perth
            </div>
          </div>
          <div
            className="taxicard"
            style={{
              width: "320px",
              cursor: "pointer",
              height: "230px",
              borderRadius: "30px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              className="taxicardcircle"
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "pink",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DirectionsBusIcon
                className="taxiIcon"
                sx={{ color: "#4C74B9", fontSize: "48px" }}
              />
            </div>
            <div
              className="taxiheadig"
              style={{ marginTop: "12px", fontWeight: "600" }}
            >
              Bus Taxi Perth
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "3rem",
            flexWrap: "wrap",
            marginBlock: "2.5rem",
            marginTop:"7rem"
          }}
        >
          <div
            className="imageBox"
            style={{
              // flex: "1",
              height: "300px",
              overflow: "hidden",
              borderRadius: "20px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="/wheelchair.webp"
            />
          </div>
          <div style={{ flex: "1.5" }}>
            <h1 className="headBox" >Wheelchair Taxi Perth</h1>
            <p
            className="para"
            >
              We offer transportation services that are truly for everyone. This
              includes same-day wheelchair accessible taxi, on-demand wheelchair
              transport, and any other special needs. Whether it’s helping a
              customer in a wheelchair, assisting a visually impaired customer,
              or making sure that a customer with special needs feels
              comfortable and safe Maxi Taxi is here to assist.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "3rem",
            flexWrap: "wrap",
            marginBlock: "2.5rem",
          }}
        >
          <div
           className="imageBox"
            style={{
              // flex: "1",
              height: "300px",
              overflow: "hidden",
              borderRadius: "20px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="/airport-transfer.webp"
            />
          </div>
          <div style={{ flex: "1.5" }}>
            <h1 className="headBox">Airport Taxi Perth</h1>
            <p
            className="para"
            >
              A better way for your airport transfer is to travel by maxi taxi
              since you don’t need to worry about taking the car to Perth
              airport. Your airport transfer will be hassle-free if you choose a
              good service for your transport, We also provide airport taxi
              services in Perth Just book a ride with Call Maxi Cab to ensure a
              maxi taxi is waiting for you when your flight arrives.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "3rem",
            flexWrap: "wrap",
            marginBlock: "2.5rem",
          }}
        >
          <div
           className="imageBox"
            style={{
              // flex: "1",
              height: "300px",
              overflow: "hidden",
              borderRadius: "20px",

            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="/MaxiTaxiPerth.webp"
            />
          </div>
          <div style={{ flex: "1.5" }}>
            <h1 className="headBox" >Maxi Taxi Perth</h1>
            <p
              className="para"
            
            >
              Travelling with a large group is a hassle, especially when you
              choose a normal taxi for your ride, When you are travelling with a
              large group, maxi taxis are the right choice for your ride since
              the maxis taxis are spacious and it has plenty of room for
              everyone to fit comfortably and there is space for your luggage.
              CallMaxiCab is among the leading maxi taxi service providers in
              Perth so whenever travelling with a large group always consider
              maxi taxis as your first choice.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "3rem",
            flexWrap: "wrap",
            marginBlock: "2.5rem",
          }}
        >
          <div
           className="imageBox"
            style={{
              // flex: "1",
              height: "300px",
              overflow: "hidden",
              borderRadius: "20px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="/fremantle.webp"
            />
          </div>
          <div style={{ flex: "1.5" }}>
            <h1 className="headBox" >Perth Airport to Fremantle</h1>
            <p
            className="para"
            >
              Fremantle is a very famous port city that's part of the Perth
              metropolitan area, Thousands of visitors go there every year. It
              is well-known for its maritime history and the largest
              convict-built prison in Australia, Perth's port city of Fremantle
              is also well-known for supporting the arts, from local to national
              (and some international) artists. We offer our pick-up and
              drop-off taxi service from Perth airport to Fremantle and vice
              versa, No Need To Walk Miles Carrying Heavy Bags! Just cab it with
              Call Maxi Cab! And enjoy your ride with us.
            </p>
          </div>
        </div>
        <div
        className="paraBox"
          style={{
            borderTop: "1px solid grey",
            paddingBlock: "3rem",
            color: "grey", 
          }}
        >
          CallMaxiCab always offers you the best maxi taxi service in Perth with
          our cognitive and reliable driver make your trip easy and hassle-free,
          Whether you are going for a night out with a large group or need a
          city tour with your friends and family we are always there to assist
          you and make your travel comfortable and reliable with our maxi taxis.
          <br />
          Our fleet is driven by our friendly and experienced drivers and they
          take all the safety measures to make your travel safer and convenient
          makes us one of the leading maxi taxi service providers in Perth.
          <br /> You can book our maxi taxi service anytime using our booking
          form which will take a few seconds you can also call us.
          <br /> CallMaxiCab offers fixed fares based on our vehicle types and
          pick-up locations there is no hidden or extra charge for your luggage
          and travel time, we provide you with the best quote. Our punctual and
          polite drivers understand you and your needs and they are always
          committed to your safety and comfort. Enjoy Safe and hassle-free maxi
          taxi perth ride with CallMaxiCab. Grace. Space. Peace, Choose the best
          wheelchair taxi service in Perth…. Call Maxi Cab top is the rated and
          reviewed maxi taxi service in Perth with Over 10 Years of Trust &
          Thousands of Satisfied Customers we provide you with the best quote so
          book your ride hassle-free with us.
        </div>
        <div style={{ textAlign: "center" }}>
          <h1 className="h1exprience" style={{paddingBlock:"2rem"}}>A ride experience people love to talk about</h1>
          <p className="pexprience" style={{fontWeight:"600",color:"grey"}}>
            "Vehicle perfect and luxury style, driver really professional and
            funny.<br/> We had a very short and fast ride despite the traffic jam."
            Andrea Panzeri "It was the best transfer I’ve ever had! Pankaj
            helped with lots “starting” things, that makes much more easier our
            first days here. It’s not just a ride from A to B, but also “Perth
            guide for the beginners” 🙂 Thank you!"
          </p>
          <p style={{color:"blue",fontWeight:"700",fontSize:"1rem",paddingTop:"1rem"}}>Lauri Jaari</p>
        </div>
      </div>
      {/* <div style={{height:"60vh",paddingBlock:"5rem",backgroundColor:"#F3F3F3",paddingInline:"12.5%"}}>
          <h1 style={{textAlign:"center"}}>Questions & Answers</h1>
          <div style={{display:"flex",gap:"1rem"}}>
            <div>
            <div>When I will get booking confirmation?</div>
            {ans1?<div>As soon as we will receive your request within 5 to 10 min, we will send you the booking confirmation.</div>:""}
            </div>
              <IconButton onClick={()=>setAns1(!ans1)}> {ans1?<RemoveIcon />:<AddIcon/>}</IconButton>
          </div>
      </div> */}
      <div className="footer" style={{backgroundColor:"#4C74B9",color:"white",marginTop:"8rem"}}>
        <div className="footerdiv">
            <div style={{display:"flex",gap:"1rem",alignItems:"center",cursor:"pointer"}}><FacebookIcon/><WhatsAppIcon/><TwitterIcon/></div>
            <div >
              <h3>Links</h3>
              <p style={{cursor:"pointer"}}>Airport Taxi Perth</p>
              <p style={{cursor:"pointer"}}>Wheelchair Taxi Perth</p>
              <p style={{cursor:"pointer"}}>Contact</p>
              <p style={{cursor:"pointer"}}>About Us</p>
            </div>
            <div>
              <h3>Contact Us</h3>
              <div style={{display:"flex",gap:"8px",alignItems:"center",cursor:"pointer"}}><span><EmailIcon/></span><span>booking@callmaxicab.com.au</span></div>
              <div style={{display:"flex",gap:"8px",alignItems:"center",cursor:"pointer"}}><span><LocalPhoneIcon/></span><span>+61 53535236</span></div>
            </div>
        </div>
        <p className="footerend">CallMaxiCab ©2022, ODBS 1005667</p>
      </div>
    </div>
  );
};

export default Home;
