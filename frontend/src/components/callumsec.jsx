import React, { useContext } from "react";
import { stateContext } from "../context/context";


export const Callumsec = () => {
    const authcontext = useContext(stateContext);
    const { callumsecdata } = authcontext;
    return (
        <>

            <section className="paddingclass prosec">
                <div className="container">
                    <div className="d-flex justify_content_between paadingtwo">
                        <div className="cols">
                            <div className="awstext">
                                <h4>100%專業北美10年以上教學經驗註冊教師</h4>
                            </div>
                            <div className="awstext">
                                <p>我們採用100%全部美國、加拿大、英國、澳洲超過10年教學經驗以上的註冊教師</p>
                            </div>
                        </div>
                        <div className="cols">
                            <div className="awsbutton">
                                <button>
                                    立即免費試堂 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="d-flex justify_content_between paddingclass proitems">
                        {callumsecdata && callumsecdata.map((item, index) =>
                            <div className="col_40" key={index}>
                                <div className="card" style={{borderRadius:0}}>
                                    <img className="card-top" src={item.img} alt="Card cap" style={{borderTopLeftRadius:0, borderTopRightRadius:0}} />
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}