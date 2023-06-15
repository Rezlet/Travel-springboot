import axios from "axios";
import { server } from "../../shared/server.tsx";
import { error } from "console";
import { toast } from "react-toastify";

export const createTour = (formData: FormData) => async (dispatch: any) => {
  try {
    dispatch({
      type: "createTourRequest",
    });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
      crossDomain: true,
      timeout: 5000,
    };

    await axios
      .post(`${server}/tours/createTour`, formData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch({
      type: "createTourSuccess",
    });
  } catch (error: any) {
    dispatch({
      type: "createTourFail",
      payload: error.response.data.message,
    });
  }
};

export const sendMail = (formData: FormData) => async (dispatch: any) => {
  try {
    dispatch({
      type: "sendMailRequest",
    });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
      crossDomain: true,
    };

    await axios
      .post(`${server}/email/send-email`, formData, config)
      .then((res) => {
        console.log(res);
        toast.success(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch({
      type: "sendMailSuccess",
    });
  } catch (error: any) {
    dispatch({
      type: "sendMailFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllTour = () => async (dispatch: any) => {
  try {
    dispatch({
      type: "getAllTourRequest",
    });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
      crossDomain: true,
    };

    const { data } = await axios.get(`${server}/tours/get-all`, config);

    console.log(data);
    dispatch({
      type: "getAllTourSuccess",
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: "getAllTourFail",
      payload: error.response.data.message,
    });
  }
};

export const getTourById = (id) => async (dispatch: any) => {
  try {
    dispatch({
      type: "getTourByIdRequest",
    });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
      crossDomain: true,
      timeout: 5000,
    };

    const { data } = await axios.get(`${server}/tours/get-by-id/${id}`, config);

    console.log(data);
    dispatch({
      type: "getTourByIdSuccess",
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: "getTourByIdFail",
      payload: error.response.data.message,
    });
  }
};
