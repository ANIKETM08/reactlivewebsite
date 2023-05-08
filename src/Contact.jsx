import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });

    const inputEvent = (event) => {
        // const value = event.target.value;
        const {name, value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        });

    }

    const formSubmit = (e) => {
        e.preventDefault();
        return alert(`
        Fullname: ${data.fullname}.
        E-mail: ${data.email}.
        Message: ${data.msg}
        `);
    }


    return(
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact US </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter Your Name..." required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Contact Number</label>
                            <input type="tel" minLength="10" maxLength="10" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter Your Phone Number..." required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            name="msg" value={data.msg} onChange={inputEvent}
                            ></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;