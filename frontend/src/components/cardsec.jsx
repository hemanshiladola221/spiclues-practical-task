import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { stateContext } from "../context/context";

export const Cardsec = () => {

    const authcontext = useContext(stateContext);
    const { cardsecdata } = authcontext;
    // const isMobile = window.innerWidth <= 425;
    const [isMobile,setMobile] = useState(false);

    useEffect(()=>{
        window.addEventListener("resize",()=>{
            if(window.innerWidth <= 768){
                setMobile(true)
            }
            else{
                setMobile(false)
            }
        })
    },)

    if (isMobile) {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <section className="paddingclass cardsec">
                <div className="">
                    <div className="customerow justify-content-center">
                        <div className="col_100">
                            <div className="text">
                                <h2>如何免費試堂體驗</h2>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {cardsecdata && cardsecdata.map((item, index) =>
                            <div className="col_30" key={index}>
                                <div className="card">
                                    <img className="card-top" src={item.img} alt="Card cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.h5text}</h5>
                                        <p className="card-text">{item.ptext}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </Slider>
                    <div className="customerow">
                        <div className="col_100">
                            <div className="button" style={{marginTop: isMobile ? "2rem": "1rem"}}>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <section className="paddingclass cardsec">
                <div className="container">
                    <div className="customerowx justify-content-center">
                        <div className="col_100">
                            <div className="text">
                                <h2>如何免費試堂體驗</h2>
                            </div>
                        </div>
                    </div>
                    <div className="customerow justify-content-center paddingclass carditems">
                        {cardsecdata && cardsecdata.map((item, index) =>
                            <div className="col_30" key={index}>
                                <div className="card">
                                    <img className="card-top" src={item.img} alt="Card cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.h5text}</h5>
                                        <p className="card-text">{item.ptext}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="customerow">
                        <div className="col_100">
                            <div className="button">
                                <button>立即免費試堂</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};
