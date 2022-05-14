import React from "react";

export default function Main() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    wantsReceiveNews: false,
    pronouns: "he",
  });

  console.log(formData);

  function HandleOnDataChange(event) {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function HandleDataSubmit(event) {
    event.preventDefault();
    console.log(
      formData.password === formData.passwordConfirmation
        ? "Successfully signed up"
        : "Passwords do not match"
    );
    if (formData.wantsReceiveNews)
      console.log("Thanks for signing up for the newsletter");
  }

  
  var message = "";
  var messageStyle = { color: 'transparent'};
  function getMessage() {
    if (formData.password === formData.passwordConfirmation){
        messageStyle.color = 'green'
        message = "Successfully signed up";
    }
    else{ 
        messageStyle.color = 'red'
        message = "Passwords do not match";}
    return message;
  }

  return (
    <div>
      <form onSubmit={HandleDataSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={HandleOnDataChange}
          value={FormData.email}
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={HandleOnDataChange}
          value={FormData.password}
        />
        <br />

        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Password Confirmation"
          onChange={HandleOnDataChange}
          value={FormData.passwordConfirmation}
        />
        <br />

        <input
          type="checkbox"
          name="wantsReceiveNews"
          onChange={HandleOnDataChange}
          checked={FormData.wantsReceiveNews}
          id="wantsReceiveNews"
        />
        <label htmlFor="wantsReceiveNews">I want to receive newsletters</label>
        <br />

        <label htmlFor="pronouns">Select your pronouns</label>
        <br />
        <select
          id="pronouns"
          name="pronouns"
          value={formData.pronouns}
          onChange={HandleOnDataChange}
        >
          <option value="he">He/him</option>
          <option value="she">She/her</option>
          <option value="they">They/them</option>
        </select>
        <br />

        <button>Sign up</button>

        <p style={messageStyle}>{getMessage()}</p>
      </form>
    </div>
  );
}
