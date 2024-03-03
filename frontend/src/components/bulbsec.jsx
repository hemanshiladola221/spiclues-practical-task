import React from "react";
import img from '../images/Asset 313@2x.png'
import img1 from '../images/Asset 312@2x.png'
import img2 from '../images/kechengAsset 113@2x (1).png'

export const Bulbsec = () => {
    return (
        <>
            <section className="paddingclass steps">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="col_100">
                            <div className="text">
                                <h2>量身定制的 <span>「四大課程體系」</span></h2>
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5 stepitem">
                        <div className="col_70">
                            <div className="d-flex justify-content-center " style={{ alignItems: "center" }}>
                                <div className="col_70">
                                    <div className="col45text">
                                        <h3>01</h3>
                                        <h2 style={{ color: "#FF587C" }}>精英寫作課程 STRUCTURED WRITING</h2>
                                        <h3>拓展思維 能說會道</h3>
                                        <p>適合7-12歲</p>
                                        <div className="awsbutton">
                                            <button style={{ backgroundColor: "#FF587C", color: "white" }}>
                                            立即免費試堂
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className="col_30">
                                    <div className="col30img" style={{ textAlign: "left " }} >
                                        <img src={img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col_30">
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5 stepitem">
                        <div className="col_30">
                        </div>
                        <div className="col_70">
                            <div className="d-flex justify-content-center " style={{ alignItems: "center" }}>
                                <div className="col_70">
                                    <div className="col45text">
                                        <h3>02</h3>
                                        <h2 style={{ color: "#8DC63F" }}>閱讀課程 GUIDED READING</h2>
                                        <h3>聽說讀寫 融會貫通</h3>
                                        <p>適合5-12歲</p>
                                        <div className="awsbutton">
                                            <button style={{ backgroundColor: "#8DC63F", color: "white" }}>
                                            立即免費試堂
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className="col_30">
                                    <div className="col30img" style={{ textAlign: "right" }} >
                                        <img src={img1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-center mt-5 stepitem">
                        <div className="col_70">
                            <div className="d-flex justify-content-center " style={{ alignItems: "center" }}>
                                <div className="col_70">
                                    <div className="col45text">
                                        <h3>03</h3>
                                        <h2 style={{ color: "#05B9F6" }}>自然拼讀課程 SUPER PHONICS CURRICULUM</h2>
                                        <h3>聽音能寫 見字能讀</h3>
                                        <p>適合4-7歲</p>
                                        <div className="awsbutton">
                                            <button style={{ backgroundColor: "#05B9F6", color: "white" }}>
                                            立即免費試堂
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className="col_30">
                                    <div className="col30img" style={{ textAlign: "left " }} >
                                        <img src={img2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col_30">
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}