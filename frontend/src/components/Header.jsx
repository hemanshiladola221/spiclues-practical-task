import React from "react";

export const Header = () => {
    return (
        <>
            <section id="topbar" className="customerow align_center" style={{ backgroundColor: "Gray", color: "white", padding:"5px 10px" }}>
                <div className="container customerow topbar_header">
                    <div className="contact-info customerow align_center">
                        <i className="bi bi-envelope row align_center"><a href="mailto:contact@example.com" style={{ color: "white", border: "none" }}>選擇另一個國家或地區，以獲得適用於閣下所在位置的內容和線上課程選項。</a></i>
                        {/* <i className="bi bi-phone row align_center ms-4"><span>+1 5589 55488 55</span></i> */}
                    </div>
                    <div className="social-links customerow align_center">
                        <a href="/" className="facebook"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg></a>
                        <a href="/" className="facebook"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-messenger" viewBox="0 0 16 16">
                            <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                        </svg></a>
                        <a href="/" className="facebook"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-messenger" viewBox="0 0 16 16">
                            <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                        </svg></a>

                        <button className="btn" style={{ backgroundColor: "white", color: "black", borderRadius: "20px", border: "none" }} type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Hong kong
                        </button>
                        <div className="button" style={{ padding: "5px" }}>
                            <button>
                                Go
                            </button>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}