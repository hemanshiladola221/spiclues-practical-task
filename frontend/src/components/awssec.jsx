import React, { useContext } from "react";
import { stateContext } from "../context/context";


export const Awesec = () => {
    const authcontext = useContext(stateContext);
    const { awesecdata } = authcontext;
    return (
        <>
            <section className="paddingclass">
                <div className="container colorclass">
                <div className="d-flex justify_content_between paadingtwo">
                    <div className="cols">
                         <div className="awstext">
                            <h2>獲得眾多企業認可</h2>
                         </div>
                    </div>
                    <div className="cols">
                        <div className="awsbutton">
                            <button>
                            立即免費試堂
                            </button>
                        </div>
                        </div>

                    </div>
                    <div className="d-flex  paddingclass">
                    <div className="col_100">
                            <div className="imgs d-flex justify_content_between">
                                {awesecdata && awesecdata.map((item,index)=>
                                <img src={item.img} alt="Card cap" key={index} />
                                )}
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </>
    )
}