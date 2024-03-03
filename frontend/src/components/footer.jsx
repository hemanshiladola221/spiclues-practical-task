import React from "react";
import img from '../images/Group 48096138 (1).png'
import location from '../images/loction.png'
import Frame from '../images/Frame.png'
import Email from '../images/Group.png'
import Clock from '../images/11-Clock.png'

export const Footer = () => {
    return (<>

        <section className="paddingclass bgcolor footer">
            <div className="container">
                <div className="d-flex justify_content_between" style={{ textAlign: "left", paddingBottom: "15px" }}>
                    <div className="cols">
                        <div className="logoimg" style={{ textAlign: "left", paddingBottom: "15px" }}>
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="cols" style={{ textAlign: "left", paddingBottom: "15px" }}>
                        <div className="searchbar">
                            <div className="input-group">
                                <div className="form-outline" data-mdb-input-init>
                                    <input type="search" id="form1" className="form-control" style={{width:"100%",borderTopRightRadius:0, borderBottomRightRadius:0}} placeholder="spicules education" />
                                </div>
                                <button type="button" className="btn" style={{borderTopLeftRadius: 0, borderBottomLeftRadius:0}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="customerow justify_content_between">
                    <div className="col_30">
                        <div className="footertext">
                            <p style={{ textAlign: "left" }}>選擇另一個國家或地區，以獲得適用於閣下所在位置的內容和線上課程選項。</p>
                            <div className="gridstructure">
                                <div className="buttonclass Btn_handle">
                                    <button>香港 </button>
                                    <button>台灣Taiwan</button>
                                    <button>GLOBAL (English) </button>
                                    <button>한국 Korean</button>
                                    <button className="Btn_handle">เมืองไทย（ภาษาไทย）</button>
                                    <br />
                                    <button>日本国 Japan</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col_30">
                        <div className="footerlink">
                            <p>
                                關於我們
                            </p>
                            <p>
                                聯繫我們
                            </p>
                            <p>
                                隱私條例
                            </p>
                            <p>
                                加入我們
                            </p>
                        </div>
                    </div>
                    <div className="col_30 text-start marginclass">

                        <div className="footer_text">
                            <img src={location} alt="" />
                            <p> 星期一至五 13:30-21:30 <br />
                                星期六 15:30-21:30</p>
                        </div>
                        <div className="footer_text">
                            <img src={Frame} alt="" />
                            <p>+852 3905 2905</p>
                        </div>
                        <div className="footer_text">
                            <img src={Email} alt="" />
                            <p>enquiry@Spiculesedu.com</p>
                        </div>
                        <div className="footer_text">
                            <img src={Clock} alt="" />
                            <p> 未來教育科技有限公司 香港金鐘道95號統一中心5樓75室</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>)
}