import React, { useState } from "react";
import { TbBookmark } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {

  const [status , setStatus] = useState(true);
  return (
    <div 
      className="header"
      style={{
        fontFamily: "sans-serif",
        height: "6vw",
        width: "100%",
        backgroundColor: "white",
        zIndex: "100",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className="profile left"
        style={{
          height: "100%",
          width: "50%",
          margin: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="profile-image"
          style={{
            width: "10%",
            height: "80%",
            borderRadius: "50px",
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="http://tbrnewsmedia.com/wp-content/uploads/2018/08/Bureau-Collective-Diversity-of-the-Human-Face-Thumbnail-2.jpg"
            alt="Profile Pic"
          />
        </div>
        <div
          className="user-info"
          style={{
            width: "auto",
            height: "100%",
            padding: "0 1vw ",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div
            className="user-name"
            style={{ fontSize: "1.5vw", fontWeight: "600" }}
          >
            Gaurav
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span
              style={{
                width: ".8vw",
                height: ".8vw",
                backgroundColor: status ? "green" : "red",
                borderRadius: "10px",
              }}
            />

            <div
            
              className="user-status"
              style={{ color: status ? "green" : "red", fontWeight: "200", fontSize: "1.2vw" }}
            >
              
              {status ? "Available for work" : "Not Available"}
            </div>
          </div>
        </div>
        <div
          className="follow"
          style={{
            height: "100%",
            width: "20%",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <button
            class="btn success"
            style={{
              border: "none",
              fontWeight: "bold",
              backgroundColor: "inherit",
              height: "3vw",
              color: "grey",
              width: "6vw",
              fontsize: "16px",
              cursor: "pointer",
              fontSize: "1.2vw",
            }}
          >
            Follow
          </button>
        </div>
      </div>
      <div
        className="right"
        style={{
          height: "100%",
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "10px",
          marginRight: "20px",
        }}
      >
        <button
          style={{
            width: "3.2vw",
            height: "3.2vw",
            borderRadius: "50%",
            cursor: "pointer",
            border: "1px solid grey",
          }}
        >
          <AiOutlineHeart style={{ width: "60%", height: "60%" }} />
        </button>
        <button
          style={{
            width: "3.2vw",
            height: "3.2vw",
            borderRadius: "50%",
            cursor: "pointer",
            border: "1px solid grey",
          }}
        >
          <TbBookmark style={{ width: "60%", height: "60%" }} />
        </button>
        <button
          style={{
            width: "9vw",
            height: "3.4vw",
            borderRadius: "50px",
            padding: "1vw",
            cursor: "pointer",
            border: "none",
            backgroundColor: "#0C0B4F",
            color: "white",
            fontWeight: "600",
            fontSize: "1.1vw",
          }}
          onClick={() => alert("Success!")}
        >
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Header;
