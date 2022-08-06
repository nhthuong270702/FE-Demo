

function ContactBanner() {

    return (
        <div className="home_contact">
            {/* <div
            className="home_background parallax-window"
            data-parallax="scroll"
            data-image-src="images/regular.jpg"
            data-speed="0.8"
        /> */}
            <div
                className="home_background parallax-window"
                data-parallax="scroll"
                data-speed="0.8"
                style={{
                    backgroundImage: 'url("../../../assets/images/regular.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                }}
            ></div>
            <div className="home_content_contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            {/* Post Comment */}
                            <div className="post_comment">
                                <div className="contact_form_container">
                                    <form action="#">
                                        <input
                                            type="text"
                                            className="contact_input contact_input_name"
                                            placeholder="Your Name"
                                            required="required"
                                        />
                                        <input
                                            type="email"
                                            className="contact_input contact_input_email"
                                            placeholder="Your Email"
                                            required="required"
                                        />
                                        <textarea
                                            className="contact_text"
                                            placeholder="Your Message"
                                            required="required"
                                            defaultValue={""}
                                        />
                                        <button type="submit" className="contact_button">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactBanner;