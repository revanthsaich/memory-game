import React from "react";

const Home = () => {
  const handleButtonClick = () => {
    window.location.href = "/temp";
  };

  return (
    <div
      style={{
        background: "linear-gradient(325deg, #6d08e9 0%, #fc7900 50%, #fcc700 100%)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "100px",
          width: "800px",
          backgroundColor: "rgba(255, 255, 255, 0.192)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "5px solid rgb(0, 0, 0)",
          padding: "35px 70px",
          borderRadius: "40px",
          position: "absolute",
          top: "40%",
          boxShadow: "0px 0px 33px 2px rgba(0,0,0,0.64)",
        }}
      >
        <span
          style={{
            fontSize: "54px",
            color: "rgb(0, 0, 0)",
            fontFamily: "fangsong",
          }}
        >
          Welcome to BRAIN BLITZ!
        </span>
      </div>
      <button
        onClick={handleButtonClick}
        style={{
          color: "rgba(255, 255, 255, 0.719)",
          position: "absolute",
          bottom: "40px",
          right: "100px",
          fontSize: "35px",
          padding: "15px 35px",
          borderRadius: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.192)",
          border: "2.5px solid rgb(0, 0, 0)",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          boxShadow: "0px 0px 33px 2px rgba(0,0,0,0.64)",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Ready!
      </button>
    </div>
  );
};

export default Home;
