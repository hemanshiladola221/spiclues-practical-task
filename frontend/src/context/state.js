import { stateContext } from "./context";
import { useEffect, useState } from "react";
import axios from "axios";

export const State = (props) => {

  const [datas, setDatas] = useState([]);
  const [cardsecdata,setCardsecdata] = useState([])
  const [callumsecdata,setCallumsecdata] = useState([])
  const [awesecdata,setAwesecdata] = useState([])

  // login and signup state
  const [openLoginPage, setOpenLoginPage] = useState(false);
  const [openRegisterPage, setOpenRegisterPage] = useState(false);
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:""
  });

  const fetchData = async() => {
    try {
      const response = await axios.get("/eightsec.json");
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const cardsecData = async() => {
    try {
      const response = await axios.get("/cardsec.json");
      setCardsecdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const callumData = async() => {
    try {
      const response = await axios.get("/callumsec.json");
      setCallumsecdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const aweData = async() => {
    try {
      const response = await axios.get("/awesec.json");
      setAwesecdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchData();
    cardsecData()
    callumData()
    aweData()
  },[])
    
    return(
        <stateContext.Provider value={{datas, setDatas,cardsecdata,setCardsecdata,callumsecdata,setCallumsecdata,awesecdata,setAwesecdata,  openRegisterPage,
          setOpenRegisterPage,
          openLoginPage,
          setOpenLoginPage, formData, setFormData}}>
            {props.children}
        </stateContext.Provider>
    )
}