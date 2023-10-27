import { useState, useEffect } from "react";
import "./DynamicForm.css";

const DynamicForm = () => {
  const [formfield, setFormField] = useState({
    Email: [
      {
        EmailHeading: "Email",
        name: "Email",
        EmailId: 1,
        EmailPLaceholder: "Enter Your Email",
        required: true,
        error: "",
      },
    ],
    Summary: [
      {
        heading: "Account",
        id: 1,
        name: "Account",
        placeholder: "Enter Your Account",
        required: true,
        error: "",
      },
      {
        heading: "MID",
        id: 2,
        name: "MID",
        placeholder: "Your MID",
        required: false,
        error: "",
      },
      {
        heading: "Status",
        id: 3,
        name: "Status",
        placeholder: "Enter Your Staus",
        Description: "Update Your Status!",
        required: true,
        error: "",
      },
      {
        heading: "Type",
        id: 4,
        name: "Type",
        placeholder: "Enter Your Type",
        Description: "You have to must fill the Type in the field ",
        required: true,
        error: "",
      },
      {
        heading: "Server",
        id: 5,
        name: "Server",
        placeholder: "Enter Your Server",
        Description: "You have to must fill the Server Details in the field ",
        required: true,
        error: "",
      },
    ],
    Component: [
      {
        heading: "Client-Id",
        id: 1,
        name: "Client Id",
        placeholder: "5rc%cfd^cDRCW79..",
        Description: "Provide the valid Client-Id for verification",
        required: true,
        error: "",
      },
      {
        heading: "Base URI",
        id: 4,
        name: "Base URI",
        placeholder: "Https://25GX*da@UI...",
        Description: "",
        required: true,
        error: "",
      },
      {
        heading: "SOAP URI",
        id: 5,
        name: "SOAP URI",
        placeholder: "Https://aYy&b#7s@UI...",
        Description: "",
        required: true,
        error: "",
      },
    ],
  });

  // const [formError, setFormError] = useState({});
  const [summaryFormError, setSummaryFormError] = useState({});
  const [componentFormError, setComponentFormError] = useState({});
  const [emailFormError, setEmailFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSummaryFormChange = (event, index) => {
    let data = [...formfield.Summary];
    data[index][event.target.name] = event.target.value;
    setFormField({ ...formfield, Summary: data });
  };

  const handleComponentFormChange = (event, index) => {
    let data = [...formfield.Component];
    data[index][event.target.name] = event.target.value;
    setFormField({ ...formfield, Component: data });
  };

  const handleEmailFormChange = (event, index) => {
    let data = [...formfield.Email];
    data[index][event.target.name] = event.target.value;
    setFormField({ ...formfield, Email: data });
  };

  const validate = (values) => {
    const errors = {};
    values.forEach((form) => {
      if (form.required && !form[form.name]) {
        errors[form.name] = `Please fill out the ${form.name} field!`;
      }
    });
    return errors;
  };

  useEffect(() => {
    // console.log("Errors: ", formError);
    if (
      Object.keys(summaryFormError).length === 0 &&
      Object.keys(componentFormError).length === 0 &&
      Object.keys(emailFormError).length === 0 &&
      isSubmit
    ) {
      console.log("FormFields:", formfield);
    }
  }, [summaryFormError, componentFormError, emailFormError]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSummaryFormError(validate(formfield.Summary));
    setComponentFormError(validate(formfield.Component));
    setEmailFormError(validate(formfield.Email));
    setIsSubmit(true);
  };

  return (
    <>
      <div className="Header">
        <span>Account Setup</span>
      </div>
      <div className="App">
        <h1 className="mainHeading">Email Verification</h1>
        <form className="wrapper" onSubmit={onSubmit}>
          {formfield.Email.map((form, index) => {
            return (
              <div className="div" key={form.id}>
                <h6 className="heading">{form.EmailHeading}</h6>
                <input
                  className="inputWidth"
                  name={form.name}
                  onChange={(event) => handleEmailFormChange(event, index)}
                  placeholder={form.EmailPLaceholder}
                />
                <p className="para">{form.Description}</p>
                <p className="error">{emailFormError[form.name]}</p>
              </div>
            );
          })}
        </form>

        <h1 className="mainHeading">Summary</h1>
        <form className="wrapper" onSubmit={onSubmit}>
          {formfield.Summary.map((form, index) => {
            return (
              <div className="div" key={form.id}>
                <h6 className="heading">{form.heading}</h6>
                <input
                  className="inputWidth"
                  name={form.name}
                  onChange={(event) => handleSummaryFormChange(event, index)}
                  placeholder={form.placeholder}
                />
                <p className="para">{form.Description}</p>
                <p className="error">{summaryFormError[form.name]}</p>
              </div>
            );
          })}
        </form>

        <h1 className="mainHeading">Component</h1>
        <form className="wrapper" onSubmit={onSubmit}>
          {formfield.Component.map((form, index) => {
            return (
              <div className="div" key={form.id}>
                <h6 className="heading">{form.heading}</h6>
                <input
                  className="inputWidth"
                  name={form.name}
                  onChange={(event) => handleComponentFormChange(event, index)}
                  placeholder={form.placeholder}
                />
                <p className="para">{form.Description}</p>
                <p className="error">{componentFormError[form.name]}</p>
              </div>
            );
          })}
        </form>
        <button className="button" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default DynamicForm;
