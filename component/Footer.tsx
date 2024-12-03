import "../App.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>PRODUCTS</h4>
                <p>Operations</p>
                <ul>
                    <li>Restaurant POS</li>
                    <li>Order Management</li>
                    <li>Inventory Management</li>
                    <li>Kitchen Display System</li>
                </ul>
                <p>Discovery</p>
                <ul>
                    <li>Online Food Ordering System</li>
                    <li>Mobile App</li>
                    <li>Table Reservation</li>
                    <li>Website-Builder</li>
                </ul>
                <p>Engagement</p>
                <ul>
                    <li>CRM Solution</li>
                    <li>Loyalty Program</li>
                    <li>Feedback System</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>FEATURES</h4>
                <ul>
                    <li>Billing</li>
                    <li>Inventory</li>
                    <li>Integrations</li>
                    <li>Reporting and Analytics</li>
                </ul>
                <h4>FEATURED RESOURCES</h4>
                <ul>
                    <li>Restaurant Marketing</li>
                    <li>Budget Template</li>
                    <li>Food Delivery Report 2019</li>
                    <li>Technology Report 2019</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>RESTAURANT TYPE</h4>
                <ul>
                    <li>Enterprise</li>
                    <li>Cloud Kitchen</li>
                    <li>Bar</li>
                    <li>Cafe</li>
                    <li>Dine-in</li>
                    <li>QSR</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>QUICK LINKS</h4>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>News and Events</li>
                    <li>Clients</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <li>Support</li>
                    <li>Terms</li>
                    <li>Contribute An Article</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>KEEP IN TOUCH</h4>
                <p>Alchemy Web Pvt. Ltd.</p>
                <p>1st Floor, 445, Udyog Vihar Phase V,</p>
                <p>Gurugram, Haryana 122008, India</p>
                <p>contactus@limetray.com</p>
                <div className="social-icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                <div className="payment-icons">
                    <img src="src/Photos/payments (1).png" alt="Visa & MasterCard" />

                </div>
            </div>
        </footer>
    );
};

export default Footer;
