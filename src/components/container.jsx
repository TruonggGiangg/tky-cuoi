import React from "react";

const Container = ({ children }) => {
    return (
        <div
            style={{
                width: "100%",
                maxWidth: "1400px", // Mặc định cho màn hình lớn hơn 1200px
                margin: "0 auto",
                padding: "20px",
                boxSizing: "border-box",
                transition: "all 0.3s ease-in-out",

                // Responsive
                ...(window.innerWidth > 1600 && {
                    maxWidth: "1600px", // Màn hình > 1600px rộng hơn
                    padding: "24px",
                }),
                ...(window.innerWidth > 1800 && {
                    maxWidth: "1800px", // Màn hình > 1800px rộng hơn nữa
                    padding: "28px",
                }),
                ...(window.innerWidth <= 1200 && {
                    maxWidth: "1200px",
                    padding: "20px",
                }),
                ...(window.innerWidth <= 1024 && {
                    maxWidth: "900px",
                    padding: "16px",
                }),
                ...(window.innerWidth <= 768 && {
                    maxWidth: "100%",
                    padding: "12px",
                }),
            }}
        >
            {children}
        </div>

    );
};

export default Container;