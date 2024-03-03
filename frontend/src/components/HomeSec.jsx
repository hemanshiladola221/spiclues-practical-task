import axios from "axios";
import React, { useContext, useState } from "react";
import { stateContext } from "../context/context";

export const HomeSec = () => {
    const {
        openRegisterPage,
        setOpenRegisterPage,
        openLoginPage,
        setOpenLoginPage,
        formData,
        setFormData,
    } = useContext(stateContext);

    const [emailerror, setEmailError] = useState(false);
    const [passworderror, setpasswordError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);

    // Handle changes in form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // login API
    const fetchUserLogin = async () => {
        if (formData.email === "") {
            return setEmailError(true);
        }
        if (formData.password === "") {
            return setpasswordError(true);
        }
        try {
            setEmailError(false);
            setpasswordError(false);
            const response = await axios.post("http://localhost:3001/login", {
                email: formData.email,
                password: formData.password,
            });
            console.log(response.data, "..login");
            alert(response.data.message);
            setFormData({
                username: "",
                email: "",
                password: ""
            });
        } catch (error) {
            console.log(error);
        }
    };

    // signup API
    const fetchUserSignup = async () => {
        if (formData.username === "") {
            return setUsernameError(true);
        }
        if (formData.email === "") {
            return setEmailError(true);
        }
        if (formData.password === "") {
            return setpasswordError(true);
        }
        try {
            setEmailError(false);
            setpasswordError(false);
            setUsernameError(false);
            const response = await axios.post("http://localhost:3001/signup", {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });
            console.log(response.data, "..signup");
            alert(response.data.message);
            setFormData({
                username: "",
                email: "",
                password: ""
            });
            setOpenRegisterPage(!openRegisterPage);
            setOpenLoginPage(!openLoginPage);
        } catch (error) {
            console.log(error);
        }
    };
    return (<section className="home_sec">
        <div className="container">
            <div className="d-flex  align_center">
                <div className="col_50">
                    <div className="home_text_box">
                        <h2>榮獲</h2>
                        <h4>年度最佳學術教育機構</h4>
                        <h2>獎項</h2>
                        <div/>
                        <p>HKOEB Awards 2022年度最佳學術教育機構</p>
                    </div>
                </div>
                <div className="col_50">
                    <form className="form_box_bg">
                        <div><h2>免費試堂</h2></div>
                        {!openLoginPage && <div style={{marginBottom:"1.5rem"}}>
                            <input type="text" required name="username" id="form2Example" className="form-control" placeholder="username" onChange={handleChange}
                                value={formData.username} />
                            {usernameError && <p style={{ color: "red" }}>This Field is required</p>}
                        </div>}
                        <div style={{marginBottom:"1.5rem"}}>
                            <input name="email" required
                                onChange={handleChange}
                                value={formData.email} type="email" id="form2Example1" className="form-control" placeholder="email" />
                            {emailerror && <p style={{ color: "red" }}>This Field is required</p>}
                        </div>

                        <div style={{marginBottom:"1.5rem"}}>
                            <input type="password" name="password"
                                onChange={handleChange} required
                                value={formData.password} id="form2Example2" className="form-control" placeholder="password" />
                            {passworderror && <p style={{ color: "red" }}>This Field is required</p>}
                        </div>


                        {!openLoginPage ? (<>  <button onClick={() => fetchUserSignup()} type="button" className="btn" style={{marginBottom:"1.5rem"}}>立即免費試堂</button><br />
                            <button type="button" onClick={() => {
                                setOpenLoginPage(!openLoginPage);
                                setOpenRegisterPage(!openRegisterPage);
                            }} className="btn" style={{marginBottom:"1.5rem"}}>Go To Login</button></>) : (
                            <>
                                <button onClick={() => fetchUserLogin()} type="button" className="btn" style={{marginBottom:"1.5rem"}}>Login</button><br />
                                <button type="button" onClick={() => {
                                    setOpenRegisterPage(!openRegisterPage);
                                    setOpenLoginPage(!openLoginPage);
                                }} className="btn" style={{marginBottom:"1.5rem"}}>Go To Signup</button>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </section>)
}