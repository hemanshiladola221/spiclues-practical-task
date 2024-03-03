import React, { useState } from "react";
import img from '../images/Group 48096138.png'
import '../header.css'

export const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsMenuOpen(false);
            setIsHeaderActive(true);
        }
        else {
            setIsHeaderActive(false);
        }
    };
    window.addEventListener('scroll', handleScroll);


    return (
        <header className={isHeaderActive ? ' headeractive' : ''} style={{ padding: "10px" }}>
            <div className="container">
                <div className="customerow justify_content_between align_center">
                    <div className="col_20">
                        <div className="logo">
                            <img src={img} alt="" />
                        </div>
                    </div>

                    <div className="col_50">
                        <div className={`header_text ${isMenuOpen ? 'active' : ''}`}>
                            <ul>
                                <li><a className="dot_active" href="/">如何上課</a></li>
                                <li><a href="#about">北美外教</a></li>
                                <li><a href="#skills">北美外教</a></li>
                                <li><a href="#work">下載中心</a></li>
                                <li><a href="#contact">媒體動態</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="customerow btn_box col_30" >
                        <div className="button" style={{ padding: "5px" }}>
                            <button>
                                註冊
                            </button>
                        </div>
                        <div className="button data_btn" style={{ padding: "5px" }}>
                            <button style={{ backgroundColor: "aliceblue", color: "#99CA3A", border: "1px solid #99CA3A" }}>
                                登入
                            </button>
                        </div>
                        <div className="bar_col">
                            <button className="bar" onClick={handleMenuClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

