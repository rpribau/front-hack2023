import React from "react";
import Chatbot from "@/components/chat";

const DocView = () => {
  return (
    <html style={{ height: "100%" }}>
      <body style={{ height: "100%", margin: 0, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flex: "1", height: "100%" }}>
          <div style={{ flex: "2", borderRight: "1px solid #ccc", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="h-96 carousel carousel-vertical rounded-box">
              <div className="carousel-item h-full">
                <img src="https://www.esports.net/wp-content/uploads/2020/05/kekw-emote-2.jpg" alt="Image 1" />
              </div>
              <div className="carousel-item h-full">
                <img src="https://i.redd.it/c01tk9yv0mu11.jpg" alt="Image 2" />
              </div>
              <div className="carousel-item h-full">
                <img src="https://i.pinimg.com/originals/a7/e4/59/a7e4599cecc1dd399b7d1a8b2fbf6be2.png" alt="Image 3" />
              </div>
            </div>
          </div>

          <div style={{ flex: "1" }}>
            <Chatbot />
          </div>
        </div>
      </body>
    </html>
  );
};

export default DocView;
