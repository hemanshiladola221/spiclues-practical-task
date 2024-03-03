import React, { useContext } from "react";
import { stateContext } from "../context/context";

export const Eightsec = () => {

    const authcontext = useContext(stateContext);
    const { datas } = authcontext;

    return (<>
        <section className="paddingclass">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col_100">
                        <div className="text">
                            <h2>為什麼選擇 <span>博星教育</span>?</h2>
                        </div>

                    </div>
                </div>
                <div className="customerow custome_text paddingclassss">
                    {datas && datas.map((item, index) =>
                        <div className="col_20" key={index}>
                            <div className="h2text">
                                <h2>{item.h2eight}</h2>
                                <p>{item.peight}</p>
                            </div>
                        </div>
                    )}

                </div>
                <div className="d-flex justify-content-center">
                    <div className="col_100">
                        <div className="button">
                            <button>立即免費試堂</button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    </>)
}