import React from "react";
import img from '../images/baozhengAsset 122@2x Copy.png'
import img1 from '../images/Frame 1261155148.png'


export const Imagesec = () => {
    return (<>
        <section className="paddingclass slidersec" >
            <div className="container">
                <div className="customerow row_revser">
                    <div className="col_50_custome">
                        <div className="col50text">
                            <h2>我們的服務承諾</h2>
                            <img src={img} alt="" />
                            <h4>免費試學承諾</h4>
                            <p>如不滿意首次購買的課程，可於首個上課日30天內，而且扣減的課節少於或等於6節，申請全數退款，退費政策不適用於月付型客戶。</p>
                            <div className="button">
                                <button>立即免費試堂</button>
                            </div>
                        </div>
                    </div>
                    <div className="col_50_custome">
                        <div className="col50img">
                            <h3>1</h3>
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>)
}