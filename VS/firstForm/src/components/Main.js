import React from "react";

export default function Main() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    secondName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "red",
  });

  console.log(formData.favColor);

  function OnFormDataChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function HandleSubmit(event) {
      event.preventDefault()
      window.open('mailto:test@example.com')
  }

  return (
    <div>
      <form className="Form" onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={OnFormDataChange}
          name="firstName"
          value={formData.firstName}
        />
        <br />

        <input
          type="text"
          placeholder="Second Name"
          onChange={OnFormDataChange}
          name="secondName"
          value={formData.secondName}
        />
        <br />

        <input
          type="email"
          placeholder="email"
          onChange={OnFormDataChange}
          name="email"
          value={formData.email}
        />
        <br />

        <textarea
          placeholder="Comments"
          onChange={OnFormDataChange}
          name="comments"
          value={formData.comments}
        />
        <br />

        <input
          type="checkbox"
          id="isFriendly"
          onChange={OnFormDataChange}
          name="isFriendly"
          checked={formData.isFriendly}
        />
        <label htmlFor="isFriendly">Are you friendly</label>
        <br />
        <br />

        <fieldset>
          <legend>Current employment</legend>

          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            onChange={OnFormDataChange}
            checked={formData.employment === "unemployed"}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-Time"
            name="employment"
            value="part-time"
            onChange={OnFormDataChange}
            checked={formData.employment === "part-time"}
          />
          <label htmlFor="part-Time">Part-Time</label>
          <br />

          <input
            type="radio"
            id="full-Time"
            name="employment"
            value="full-time"
            onChange={OnFormDataChange}
            checked={formData.employment === "full-time"}
          />
          <label htmlFor="full-Time">Full-Time</label>
          <br />
        </fieldset>

        <br />
        <label htmlFor="fav-color">Full-Time</label>
        <br />
        <select
          id="fav-color"
          value={formData.favColor}
          onChange={OnFormDataChange}
          name="favColor"
        >
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
        </select>

        <br/>
        <br/>
        <button>HandleSubmit</button>
      </form>
    </div>
  );
}
