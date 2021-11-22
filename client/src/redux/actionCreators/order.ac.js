import { REMOVE_ORDER, SET_ORDER } from "../types/order.types";

export const setOrder = (order)=>{
  return {
    type: SET_ORDER,
    payload: order
  }
  };
  
  export const setOrderInDB = (order)=> async (dispatch) => {
    const response = await fetch("https://strapi.pik.ru/front-tests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order)
    })
    if (response.ok){
      const newOrder = await response.json();
      dispatch(setOrder(newOrder))
    }
  }

  export const removeOrder = () =>{
    return{
      type: REMOVE_ORDER,
      payload: {
        user: null,
        order: null
      }
    }
  }
