import '../App.css';



const FormComponent = () => {
    return (
        <div className="form-container">
            <h1>
                Get On-<span className="highlight">Lime!</span>
            </h1>
            <p>
                Request a free demonstration to see how our products can help you boost
                your business
            </p>
            <form className="form">
                <input type="text" placeholder="Your Name" />
                <div className="form-row">
                    <select>
                        <option value="" disabled selected>
                            Select Country
                        </option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                    <input type="text" placeholder="Your City" />
                </div>
                <input
                    type="text"
                    placeholder="Mobile or Landline with (STD)"
                />
                <input type="text" placeholder="Restaurant Name" />
                <input type="email" placeholder="Email Id" />
                <button type="submit">FREE DEMO</button>
            </form>
            <p>
                For any queries, contact our support team. <br />
                <a href="mailto:contactus@limetray.com">contactus@limetray.com</a>
            </p>
        </div>
    );
};

export default FormComponent;

