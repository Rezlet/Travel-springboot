import axios from "axios";
import { server } from "../../shared/server.tsx";
import { getCookie } from "../../shared/GlobalFunction.tsx";
// load user

export const loadUser = () => async (dispatch: any) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      headers: {
        "Access-Control-Allow-Credentials": true,
      },
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error: any) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};

export const loadUserGoogle = () => async (dispatch: any) => {
  try {
    dispatch({
      type: "loadUserGoogleRequest",
    });

    const access_token = getCookie("token");
    const data = await axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));

    console.log(data);
    dispatch({
      type: "loadUserGoogleSuccess",
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: "loadUserGoogleFail",
      payload: error.response.data.message,
    });
  }
};
