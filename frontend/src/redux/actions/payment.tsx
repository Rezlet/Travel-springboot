import axios from "axios";
import { server } from "../../shared/server.tsx";
import { getCookie } from "../../shared/GlobalFunction.tsx";

export const getPaymentUrl =
  (money: any, userId, tourId) => async (dispatch: any) => {
    try {
      dispatch({
        type: "LoadUserRequest",
      });

      const token = getCookie("token");
      const config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        withCredentials: true,
        crossDomain: true,
        timeout: 5000,
      };

      const payment = {
        money: money * 1000,
        userId: userId,
        tourId: tourId,
        quantity: 1,
      };
      const response = await axios
        .post(`${server}/api/payment/create_payment`, payment, config)
        .then((res) => {
          const paymentUrl = res.data;

          window.location.assign(paymentUrl);
        })
        .catch((error) => {
          console.log(error);
        });
      dispatch({
        type: "LoadUserSuccess",
        payload: response,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "LoadUserFail",
        payload: error.response.data.message,
      });
    }
  };
