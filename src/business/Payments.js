import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { REQUEST_URL } from ".././constant/Constant";
import { load_user } from "../actions/auth.js";
import { savingId } from "../actions/auth.js";
import Loader from "react-loader-spinner";
import LoadingOverlay from "react-loading-overlay";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PaymentScreen() {
  const [loading, setLoading] = useState(false);
  const show = false;
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  const id = state.auth.id;
  const date = state.auth.date;
  // use this id where you want

  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    if (!id) {
      history.push("/myaccount");
    }
  }, [history, id]);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "11",
          },
        },
      ],
    });
  };

  const paying = async (details) => {
    const exact_details = details.purchase_units[0].payments.captures[0];

    const app_id = id;
    const body = JSON.stringify({ app_id });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.post(
        REQUEST_URL + `/api/applications/pay`,
        body,
        config
      );
      if (res.data.success) {
        dispatch(load_user());
        dispatch(savingId(show));
        setLoading(false);
        setTimeout(function () {
          alert(
            "Dear " +
              details.payer.name.given_name +
              "\n" +
              "Payment done for your Application successfuly! Thank You. "
          );
        }, 700);
      }
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      dispatch(savingId(show));
      setTimeout(function () {
        alert(
          "Dear " +
            details.payer.name.given_name +
            "\n" +
            "There is something bad happend. Please Contact us using Our ContactUs Form."
        );
      }, 700);
    }
  };
  const onApprove = (data, actions) => {
    actions.order.capture().then(function (details) {
      console.log(details);
      console.log(details.status, "this is paying status");
      if (details.status === "COMPLETED") {
        paying(details);
      }
    });
    return actions.order.capture();
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h1
        className="m-0 py-3 text-center"
        style={{
          backgroundColor: "#FF0000",
          color: "white",
          fontSize: "20px",
        }}
      >
        Application id:{id}
      </h1>
      <p className="m-0 py-1" style={{ fontSize: "20px" }}>
        submitOn:
      </p>
      <p className="p-0" style={{ color: "#ff0000", fontSize: "16px" }}>
        {moment(date).format("llll")}
      </p>

      <PayPalButton
        style={{
          layout: "vertical",
          shape: "rect",
          label: "paypal",
          fundingicons: true,
        }}
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </div>
  );
}

export default PaymentScreen;
