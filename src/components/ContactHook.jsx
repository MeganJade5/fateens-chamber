// Functional component version

import React, { useReducer } from "react";
import reducer from "./utils/ContactReducer";
import MessageCard from "./MessageCard";
import ColourChoicePanel from "./ColourChoicePanel";

function ContactHook() {
  //const [contactFormData, setContactFormData] = useState(initialContactFormData);

  const initialState = {
    name: "",
    message: "",
    email: "",
    userMessage: "",
    textColour: "#f0f8ff",
    cardColour: "#000000",
  };

  const [store, dispatch] = useReducer(reducer, initialState);
  const { name, message, email, userMessage, textColour, cardColour } = store;

  function handleOnChange(event) {
    dispatch({
      type: "setFormData",
      data: event.target,
    });
  }

  function setUserMessage(userMessage) {
    dispatch({
      type: "setUserMessage",
      data: userMessage,
    });
  }

  function setTextColour(colour) {
    dispatch({
      type: "setTextColour",
      data: colour,
    });
  }

  function setCardColour(colour) {
    dispatch({
      type: "setCardColour",
      data: colour,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name.length === 0) {
      setUserMessage("Name must be provided!");
    } else if (message.length === 0) {
      setUserMessage("Message must be provided.");
    } else if (email.length === 0) {
      setUserMessage("Email must be provided.");
    } else if (!isNaN(parseInt(message))) {
      setUserMessage("Message must not be a number.");
    } else if (message.toLowerCase().split(" ").join("").includes("moist")) {
      setUserMessage("Please refrain from such language.");
    } else {
      setUserMessage("All is okay!");
    }
  }

  return (
    <section id="contact">
      <div>
        <h2>Contact</h2>
        <a href="#top">Top</a>
      </div>
      <h3>Contact me!</h3>

      <div>
        <form>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleOnChange}
          ></input>
          <br></br>
          <label>Message:</label>
          <textarea
            type="textarea"
            name="message"
            rows="5"
            cols="33"
            value={message}
            onChange={handleOnChange}
          ></textarea>
          <br></br>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
          ></input>
          <button onClick={handleSubmit}>Submit</button>
        </form>

        <p style={{ color: "blue" }}>
          <b>{userMessage}</b>
        </p>
      </div>

      <div>
        <h4>This is what you have entered:</h4>
        <MessageCard
          name={name}
          message={message}
          email={email}
          textColour={textColour}
          cardColour={cardColour}
        />
        <ColourChoicePanel
          textColour={textColour}
          cardColour={cardColour}
          setTextColour={setTextColour}
          setCardColour={setCardColour}
        />
      </div>
    </section>
  );
}

export default ContactHook;
