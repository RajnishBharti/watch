import ImageLoader from "../Image";
import classes from "./checkout.module.css";

const PaymentGatewayList = ({
  selectPaymentMethod,
  submitOrder,
  settings,
  fullOrderData,
}) => {
  return (
    <div>
      <h6>Select a payment method :</h6>
      <div className={classes.payment_list}>
        {settings.cod && (
          <label
            className={`${classes.payment_card_label}  ${classes.cmpOrder}`}
          >
            <input
              type="radio"
              name="payment_method"
              value="cod"
              defaultChecked
              onChange={selectPaymentMethod}
            />
            Cash on Delivery
            <div className={classes.payment_card}>
              <ImageLoader
                src="/images/cash-on-del-logo.png"
                width={100}
                height={50}
                alt="cod"
              />
            </div>
          </label>
        )}
        {settings.payu && (
          <label
            className={`${classes.payment_card_label}  ${classes.cmpOrder}`}
          >
            <input
              type="radio"
              name="payment_method"
              value="payu"
              defaultChecked
              onChange={selectPaymentMethod}
            />
            Pay Online
            <div className={classes.payment_card}>
              <img src="/img/payment.svg" width="350" />
              {/*  <span>Payu</span> */}
            </div>
          </label>
        )}

        {settings.paypal && (
          <label className={`${classes.payment_card_label}  ${classes.paypal}`}>
            <input
              type="radio"
              name="payment_method"
              value="paypal"
              onChange={selectPaymentMethod}
            />
            <div className={classes.payment_card}>
              <ImageLoader
                src="/images/paypal-logo.png"
                width={100}
                height={50}
                alt="Paypal"
              />
              {/*  <span>Paypal</span> */}
            </div>
          </label>
        )}
        {settings.stripe && (
          <label
            className={`${classes.payment_card_label}  ${classes.cmpOrder}`}
          >
            <input
              type="radio"
              name="payment_method"
              value="payu"
              onChange={selectPaymentMethod}
            />
            Pay Online
            <div className={classes.payment_card}>
              <img src="/img/payment.svg" width="350" />
              {/*  <span>Payu</span> */}
            </div>
          </label>
        )}
        {settings.sslCommerz && (
          <label
            className={`${classes.payment_card_label}  ${classes.ccavenue}`}
          >
            <input
              type="radio"
              name="payment_method"
              value="ccavenue"
              onChange={selectPaymentMethod}
            />
            <div className={classes.payment_card} style={{ height: "" }}>
              <ImageLoader
                src="/images/ccavenue.png"
                width={128}
                height={21}
                alt="CCAvenue"
              />
              {/*<span>CCAvenue</span>*/}
            </div>
          </label>
        )}

        <button className="my-3" onClick={submitOrder}>
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default PaymentGatewayList;