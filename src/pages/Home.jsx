import React, { useState } from "react";
import useForm from "../hooks/useForm";
import useFetch from "../hooks/useFetch";
import dialingCodeData from "../data/data";
import "./Home.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  dialingCode: "+1",
  phoneNumber: "",
  amount: "",
  fromCurrency: "AUD",
  toCurrency: "AUD",
};

const Home = () => {
  // Use custom hook to get all the currencies available from API, it returns an object
  const state = useFetch(
    "https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/10000?format=json"
  );
  const [values, handleChange, resetValues] = useForm(initialState); // Use custom hook for all input and select fields inside form
  const [url, setUrl] = useState("");
  const { data, isLoading } = useFetch(url); // Get JSON from API based on currencies and amount from input fields

  // Format number to AUD currency and remove $ sign
  const formatNumber = (number) => {
    const twoDecimalResult = (Math.round(number * 100) / 100).toFixed(2);
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    })
      .format(twoDecimalResult)
      .replace("$", "");
  };

  const calculateQuotePrice = (rate, amount) => {
    if (!rate) return formatNumber(0); // If rate is undefined, return 0 to prevent getting NaN after calculation
    const result = rate * parseInt(amount);
    return formatNumber(result);
  };

  // Set URL using OFX API to get all data we need after clicking "Get Quote" button
  const getQuote = () => {
    const url = `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${values.fromCurrency}/${values.toCurrency}/${values.amount}?format=json`;
    setUrl(url);
  };

  // Remove the url from the state so we get null data from the custom hook
  const resetUrl = () => {
    setUrl("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getQuote();
  };

  const handleApiErrors = () => {
    // It allows only one error message appear inside html
    if (data.SystemMessage) {
      return <p>{data.SystemMessage}</p>;
    }
    if (!data.CustomerRate) {
      return <p>{data.Message}</p>;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="title">Quick Quote</h1>
      <hr className="seperate-line"></hr>
      <div>
        {!data ? ( // If data is null means form hasn't been submitted, otherwise return the quote result
          <div className="form-container">
            <form className="form-content" onSubmit={handleSubmit}>
              <div className="two-column">
                <div className="field left-column">
                  <label htmlFor="first-name">
                    First Name <span className="asterisk-symbol">&#42;</span>
                  </label>
                  <input
                    onChange={handleChange} // When user types on input box, it triggers the handleChange function to set the state of current input element
                    className="input-box"
                    id="first-name"
                    type="text"
                    value={values.firstName} // It changed the value based on the state
                    placeholder="First Name"
                    name="firstName"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="last-name">
                    Last Name <span className="asterisk-symbol">&#42;</span>
                  </label>
                  <input
                    onChange={handleChange}
                    value={values.lastName}
                    className="input-box"
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    required
                  />
                </div>
              </div>
              <div className="one-column">
                <div className="email-field">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={handleChange}
                    value={values.email}
                    className="input-box"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="mobile-field">
                  <label htmlFor="phone-number">Telephone/Mobile</label>
                  <div className="phone-number-field">
                    <select name="dialingCode" onChange={handleChange}>
                      {dialingCodeData.map((el, index) => (
                        <option key={index} value={el.value}>
                          {el.value}
                        </option>
                      ))}
                      ;
                    </select>
                    <input
                      onChange={handleChange}
                      value={values.phoneNumber}
                      className="mobile-input-box"
                      id="phone-number"
                      type="text"
                      name="phoneNumber"
                    />
                  </div>
                </div>
              </div>
              {state.data?.TermCurrencies && ( // safely check whether json has been populated successfully
                <div className="two-column">
                  <div className="field left-column">
                    <label htmlFor="fromCurrency">
                      From Currency
                      <span className="asterisk-symbol">&#42;</span>
                    </label>
                    <select
                      id="fromCurrency"
                      name="fromCurrency"
                      onChange={handleChange}
                    >
                      {/* I didn't get the AUD currency from the API so I create tyhe option manually */}
                      <option key="AUD" value="AUD">
                        AUD
                      </option>
                      {/* iterate over the array of currencies object and return the currency into option */}
                      {state.data.TermCurrencies.map((el) => (
                        <option key={el.Currency} value={el.Currency}>
                          {el.Currency}
                        </option>
                      ))}
                      ;
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="toCurrency">
                      To Currency
                      <span className="asterisk-symbol">&#42;</span>
                    </label>
                    <select
                      id="toCurrency"
                      name="toCurrency"
                      onChange={handleChange}
                    >
                      <option key="AUD" value="AUD">
                        AUD
                      </option>
                      {state.data.TermCurrencies.map((el) => (
                        <option key={el.Currency} value={el.Currency}>
                          {el.Currency}
                        </option>
                      ))}
                      ;
                    </select>
                  </div>
                </div>
              )}
              <div className="amount-field">
                <label htmlFor="amount">
                  Amount <span className="asterisk-symbol">&#42;</span>
                </label>
                <input
                  name="amount"
                  className="input-box"
                  id="amount"
                  type="number"
                  placeholder="Amount"
                  value={values.amount}
                  onChange={handleChange}
                  required
                />
              </div>
              <input className="button" type="submit" value="Get Quote" />
            </form>
          </div>
        ) : (
          <>
            {data && (
              <div className="quote-container">
                <div className="quote-content">
                  <div>
                    <div className="quote-rate-label">OFX Customer Rate</div>
                    <div className="customer-rate">
                      {data.CustomerRate ? data.CustomerRate : "0"}
                    </div>
                  </div>
                  <div className="block">
                    <div className="quote-field">
                      <div className="quote-label">From</div>
                      <div className="text-wrapper">
                        <span className="from-to-currency">
                          {values.fromCurrency}
                        </span>
                        <span className="display-amount">
                          {formatNumber(values.amount)}
                        </span>
                      </div>
                    </div>
                    <div className="quote-field">
                      <div className="quote-label">To</div>
                      <div className="text-wrapper">
                        <span className="from-to-currency">
                          {values.toCurrency}
                        </span>
                        <span className="display-amount">
                          {calculateQuotePrice(
                            data.CustomerRate,
                            values.amount
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  {handleApiErrors()}
                  <button
                    className="button"
                    onClick={() => {
                      // Reset all form values to initial state and reset url to get empty data from API. Therefore, it returns to form page
                      resetValues();
                      resetUrl();
                    }}
                  >
                    Start New Quote
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
