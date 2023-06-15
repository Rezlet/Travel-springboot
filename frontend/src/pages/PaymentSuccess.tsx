import React, { useEffect } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { server } from "../shared/server.tsx";
import axios from "axios";

const PaymentSuccess = () => {
  const [queryParameters] = useSearchParams();
  const navigate = useNavigate();
  let amount = queryParameters.get("vnp_Amount");
  let transactionId = queryParameters.get("vnp_TransactionNo");
  let transactionStatus = queryParameters.get("vnp_TransactionStatus");
  let description = queryParameters.get("vnp_OrderInfo");
  let tourId = queryParameters.get("tourId");
  let userId = queryParameters.get("userId");
  let quantity = queryParameters.get("quantity");

  const isFail = transactionStatus != "00";

  const dataToApi = {
    received: Number(amount) / 100000,
    transactionId: transactionId,
    description: description,
    userId: userId,
    tourId: tourId,
    quantity: quantity,
    status: "0",
  };

  const sendRequest = async () => {
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        crossDomain: true,
        timeout: 5000,
      };
    await axios
      .post(`${server}/api/payment/create-payment-deposit`, dataToApi,config)
      .then((res: any) => {
        console.log(res)
        setTimeout(() => {
          navigate("/");
        }, 5000);
      })
      .catch((error: any) => {
        setTimeout(() => {
          navigate("/");
        }, 5000);
      });
  };
  console.log(dataToApi);

useEffect(() => {
  if (isFail) {
    toast.error("Transaction Failed please check again");
  } else {
    toast.success("Transaction Success");
    sendRequest();
  }
}, []);
  return (
    <div
      style={{
        width: "100vw",
        height: "50vh",
      }}
      className="d-flex align-items-center"
    >
      <div className="row flex-1">
        <div className="card">
          <div className="card-body text-center">
            <h2>Congratulations!</h2>
            <p>Your payment was successful.</p>
            <p>Thank you for your purchase.</p>
            <Link to="#" className="btn btn-primary">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
