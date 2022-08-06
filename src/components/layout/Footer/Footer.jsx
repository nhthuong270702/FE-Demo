
function Footer() {

    return (
        <footer className="footer">
            <div className="container">
                <div className="row row-lg-eq-height">
                    <div className="col-lg-9 order-lg-1 order-2">
                        <div className="footer_content">
                            <div className="footer_logo">
                                <a href="#">avision</a>
                            </div>
                            <div className="footer_social">
                                <ul>
                                    <li className="footer_social_facebook">
                                        <a href="#">
                                            <i className="fa fa-facebook" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li className="footer_social_twitter">
                                        <a href="#">
                                            <i className="fa fa-twitter" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li className="footer_social_pinterest">
                                        <a href="#">
                                            <i className="fa fa-pinterest" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li className="footer_social_vimeo">
                                        <a href="#">
                                            <i className="fa fa-vimeo" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li className="footer_social_instagram">
                                        <a href="#">
                                            <i className="fa fa-instagram" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li className="footer_social_google">
                                        <a href="#">
                                            <i className="fa fa-google" aria-hidden="true" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyright">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | This template is made with{" "}
                                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                                <a href="https://colorlib.com" target="_blank">
                                    Colorlib
                                </a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 order-lg-2 order-1">
                        <div className="subscribe">
                            <div className="subscribe_background" />
                            <div className="subscribe_content">
                                <div className="subscribe_title">Subscribe</div>
                                <form action="#">
                                    <input
                                        type="email"
                                        className="sub_input"
                                        placeholder="Your Email"
                                        required="required"
                                    />
                                    <button className="sub_button">
                                        <svg
                                            version="1.1"
                                            id="link_arrow_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            width="19px"
                                            height="13px"
                                            viewBox="0 0 19 13"
                                            enableBackground="new 0 0 19 13"
                                            xmlSpace="preserve"
                                        >
                                            <polygon
                                                fill="#FFFFFF"
                                                points="12.475,0 11.061,0 17.081,6.021 0,6.021 0,7.021 17.038,7.021 11.06,13 12.474,13 18.974,6.5 "
                                            />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;