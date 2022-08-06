function PostContent() {

    return (
        <div className="page_content">
            <div className="container">
                <div className="row row-lg-eq-height">
                    {/* Post Content */}
                    <div className="col-lg-9">
                        <div className="post_content">
                            {/* Top Panel */}
                            <div className="post_panel post_panel_top d-flex flex-row align-items-center justify-content-start">
                                <div className="author_image">
                                    <div>
                                        <img src="../../../assets/images/author.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="post_meta">
                                    <a href="#">Katy Liu</a>
                                    <span>Sep 29, 2017 at 9:48 am</span>
                                </div>
                                <div className="post_share ml-sm-auto">
                                    <span>share</span>
                                    <ul className="post_share_list">
                                        <li className="post_share_item">
                                            <a href="#">
                                                <i className="fa fa-facebook" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li className="post_share_item">
                                            <a href="#">
                                                <i className="fa fa-twitter" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li className="post_share_item">
                                            <a href="#">
                                                <i className="fa fa-google" aria-hidden="true" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Post Body */}
                            <div className="post_body">
                                <p className="post_p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                    enim nulla, mollis eu metus in, sagittis fringilla tortor.
                                    Phasellus eget purus id felis dignissim convallis. Suspendisse
                                    et augue dui. Morbi gravida sed justo vel venenatis. Ut tempor
                                    pretium maximus. Donec libero diam, faucibus vitae lectus nec,
                                    accumsan gravida dui. Nam interdum mi eget lacus aliquet, sit
                                    amet ultricies magna pharetra. In ut odio a ligula egestas
                                    pretium et quis sapien. Etiam faucibus magna eu porta vulputate.
                                    Aliquam euismod rhoncus malesuada. Nunc rutrum hendrerit semper.
                                </p>
                                <figure>
                                    <img src="../../../assets/images/post_image.jpg" alt="" />
                                    <figcaption>Lorem Ipsum Dolor Sit Amet</figcaption>
                                </figure>
                                <p className="post_p">
                                    Maecenas vitae sem varius, imperdiet nisi a, tristique nisi. Sed
                                    scelerisque suscipit leo cursus accumsan. Donec vel turpis quam.
                                    Mauris non nisl nec nunc gravida ullamcorper id vestibulum
                                    magna. Donec non velit finibus, laoreet arcu nec, facilisis
                                    augue. Aliquam sed purus id erat accumsan congue. Mauris semper
                                    ullamcorper nibh non pellentesque. Aenean euismod purus sit amet
                                    quam vehicula ornare.
                                </p>
                                <div className="post_quote">
                                    <p className="post_p">
                                        Aliquam auctor lacus a dapibus pulvinar. Morbi in elit erat.
                                        Quisque et augue nec tortor blandit hendrerit eget sit amet
                                        sapien. Curabitur at tincidunt metus, quis porta ex. Duis
                                        lacinia metus vel eros cursus pretium eget.
                                    </p>
                                    <div className="post_quote_source">Robert Morgan</div>
                                </div>
                                <p className="post_p">
                                    Donec orci dolor, pretium in luctus id, consequat vitae nibh.
                                    Quisque hendrerit, lorem sit amet mollis malesuada, urna orci
                                    volutpat ex, sed scelerisque nunc velit et massa. Sed maximus id
                                    erat vel feugiat. Phasellus bibendum nisi non urna bibendum
                                    elementum. Aenean tincidunt nibh vitae ex facilisis ultrices.
                                    Integer ornare efficitur ultrices. Integer neque lectus,
                                    venenatis at pulvinar quis, aliquet id neque. Mauris ultrices
                                    consequat velit, sed dignissim elit posuere in. Cras vitae
                                    dictum dui.
                                </p>
                                {/* Post Tags */}
                                <div className="post_tags">
                                    <ul>
                                        <li className="post_tag">
                                            <a href="#">Liberty</a>
                                        </li>
                                        <li className="post_tag">
                                            <a href="#">Manual</a>
                                        </li>
                                        <li className="post_tag">
                                            <a href="#">Interpretation</a>
                                        </li>
                                        <li className="post_tag">
                                            <a href="#">Recommendation</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Bottom Panel */}
                            <div className="post_panel bottom_panel d-flex flex-row align-items-center justify-content-start">
                                <div className="author_image">
                                    <div>
                                        <img src="../../../assets/images/author.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="post_meta">
                                    <a href="#">Katy Liu</a>
                                    <span>Sep 29, 2017 at 9:48 am</span>
                                </div>
                                <div className="post_share ml-sm-auto">
                                    <span>share</span>
                                    <ul className="post_share_list">
                                        <li className="post_share_item">
                                            <a href="#">
                                                <i className="fa fa-facebook" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li className="post_share_item">
                                            <a href="#">
                                                <i className="fa fa-twitter" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li className="post_share_item">
                                            <a href="#">
                                                <i className="fa fa-google" aria-hidden="true" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Similar Posts */}
                            <div className="similar_posts">
                                <div className="grid clearfix">
                                    {/* Small Card With Image */}
                                    <div className="card card_small_with_image grid-item">
                                        <img
                                            className="card-img-top"
                                            src="../../../assets/images/post_25.jpg"
                                            alt="https://unsplash.com/@jakobowens1"
                                        />
                                        <div className="card-body">
                                            <div className="card-title card-title-small">
                                                <a href="post.html">
                                                    How Did van Gogh’s Turbulent Mind Depict One of the Most
                                                    Complex Concepts in Physics?
                                                </a>
                                            </div>
                                            <small className="post_meta">
                                                <a href="#">Katy Liu</a>
                                                <span>Sep 29, 2017 at 9:48 am</span>
                                            </small>
                                        </div>
                                    </div>
                                    {/* Small Card With Image */}
                                    <div className="card card_small_with_image grid-item">
                                        <img
                                            className="card-img-top"
                                            src="../../../assets/images/post_2.jpg"
                                            alt="https://unsplash.com/@jakobowens1"
                                        />
                                        <div className="card-body">
                                            <div className="card-title card-title-small">
                                                <a href="post.html">
                                                    How Did van Gogh’s Turbulent Mind Depict One of the Most
                                                    Complex Concepts in Physics?
                                                </a>
                                            </div>
                                            <small className="post_meta">
                                                <a href="#">Katy Liu</a>
                                                <span>Sep 29, 2017 at 9:48 am</span>
                                            </small>
                                        </div>
                                    </div>
                                    {/* Small Card With Image */}
                                    <div className="card card_small_with_image grid-item">
                                        <img
                                            className="card-img-top"
                                            src="../../../assets/images/post_26.jpg"
                                            alt="https://unsplash.com/@jakobowens1"
                                        />
                                        <div className="card-body">
                                            <div className="card-title card-title-small">
                                                <a href="post.html">
                                                    How Did van Gogh’s Turbulent Mind Depict One of the Most
                                                    Complex Concepts in Physics?
                                                </a>
                                            </div>
                                            <small className="post_meta">
                                                <a href="#">Katy Liu</a>
                                                <span>Sep 29, 2017 at 9:48 am</span>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                {/* Post Comment */}
                                <div className="post_comment">
                                    <div className="post_comment_title">Post Comment</div>
                                    <div className="row">
                                        <div className="col-xl-8">
                                            <div className="post_comment_form_container">
                                                <form action="#">
                                                    <input
                                                        type="text"
                                                        className="comment_input comment_input_name"
                                                        placeholder="Your Name"
                                                        required="required"
                                                    />
                                                    <input
                                                        type="email"
                                                        className="comment_input comment_input_email"
                                                        placeholder="Your Email"
                                                        required="required"
                                                    />
                                                    <textarea
                                                        className="comment_text"
                                                        placeholder="Your Comment"
                                                        required="required"
                                                        defaultValue={""}
                                                    />
                                                    <button type="submit" className="comment_button">
                                                        Post Comment
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Comments */}
                                <div className="comments">
                                    <div className="comments_title">
                                        Comments <span>(12)</span>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-8">
                                            <div className="comments_container">
                                                <ul className="comment_list">
                                                    <li className="comment">
                                                        <div className="comment_body">
                                                            <div className="comment_panel d-flex flex-row align-items-center justify-content-start">
                                                                <div className="comment_author_image">
                                                                    <div>
                                                                        <img
                                                                            src="../../../assets/images/comment_author_1.jpg"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <small className="post_meta">
                                                                    <a href="#">Katy Liu</a>
                                                                    <span>Sep 29, 2017 at 9:48 am</span>
                                                                </small>
                                                                <button
                                                                    type="button"
                                                                    className="reply_button ml-auto"
                                                                >
                                                                    Reply
                                                                </button>
                                                            </div>
                                                            <div className="comment_content">
                                                                <p>
                                                                    Pick the yellow peach that looks like a sunset
                                                                    with its red, orange, and pink coat skin, peel
                                                                    it off with your teeth. Sink them into
                                                                    unripened.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {/* Reply */}
                                                        <ul className="comment_list">
                                                            <li className="comment">
                                                                <div className="comment_body">
                                                                    <div className="comment_panel d-flex flex-row align-items-center justify-content-start">
                                                                        <div className="comment_author_image">
                                                                            <div>
                                                                                <img
                                                                                    src="../../../assets/images/comment_author_2.jpg"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <small className="post_meta">
                                                                            <a href="#">Katy Liu</a>
                                                                            <span>Sep 29, 2017 at 9:48 am</span>
                                                                        </small>
                                                                        <button
                                                                            type="button"
                                                                            className="reply_button ml-auto"
                                                                        >
                                                                            Reply
                                                                        </button>
                                                                    </div>
                                                                    <div className="comment_content">
                                                                        <p>
                                                                            Nulla facilisi. Aenean porttitor quis tortor
                                                                            id tempus. Interdum et malesuada fames ac
                                                                            ante ipsum primis in faucibus. Vivamus
                                                                            molestie varius tincidunt. Vestibulum congue
                                                                            sed libero ac sodales.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {/* Reply */}
                                                                <ul className="comment_list"></ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="comment">
                                                        <div className="comment_body">
                                                            <div className="comment_panel d-flex flex-row align-items-center justify-content-start">
                                                                <div className="comment_author_image">
                                                                    <div>
                                                                        <img
                                                                            src="../../../assets/images/comment_author_1.jpg"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <small className="post_meta">
                                                                    <a href="#">Katy Liu</a>
                                                                    <span>Sep 29, 2017 at 9:48 am</span>
                                                                </small>
                                                                <button
                                                                    type="button"
                                                                    className="reply_button ml-auto"
                                                                >
                                                                    Reply
                                                                </button>
                                                            </div>
                                                            <div className="comment_content">
                                                                <p>
                                                                    Pick the yellow peach that looks like a sunset
                                                                    with its red, orange, and pink coat skin, peel
                                                                    it off with your teeth. Sink them into
                                                                    unripened.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="load_more">
                            <div
                                id="load_more"
                                className="load_more_button text-center trans_200"
                            >
                                Load More
                            </div>
                        </div>
                    </div>
                    {/* Sidebar */}
                    <div className="col-lg-3">
                        <div className="sidebar">
                            <div className="sidebar_background" />
                            {/* Top Stories */}
                            <div className="sidebar_section">
                                <div className="sidebar_title_container">
                                    <div className="sidebar_title">Top Stories</div>
                                    <div className="sidebar_slider_nav">
                                        <div className="custom_nav_container sidebar_slider_nav_container">
                                            <div className="custom_prev custom_prev_top">
                                                <svg
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    width="7px"
                                                    height="12px"
                                                    viewBox="0 0 7 12"
                                                    enableBackground="new 0 0 7 12"
                                                    xmlSpace="preserve"
                                                >
                                                    <polyline
                                                        fill="#bebebe"
                                                        points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 "
                                                    />
                                                </svg>
                                            </div>
                                            <ul
                                                id="custom_dots"
                                                className="custom_dots custom_dots_top"
                                            >
                                                <li className="custom_dot custom_dot_top active">
                                                    <span />
                                                </li>
                                                <li className="custom_dot custom_dot_top">
                                                    <span />
                                                </li>
                                                <li className="custom_dot custom_dot_top">
                                                    <span />
                                                </li>
                                            </ul>
                                            <div className="custom_next custom_next_top">
                                                <svg
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    width="7px"
                                                    height="12px"
                                                    viewBox="0 0 7 12"
                                                    enableBackground="new 0 0 7 12"
                                                    xmlSpace="preserve"
                                                >
                                                    <polyline
                                                        fill="#bebebe"
                                                        points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 "
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar_section_content">
                                    {/* Top Stories Slider */}
                                    <div className="sidebar_slider_container">
                                        <div className="owl-carousel owl-theme sidebar_slider_top">
                                            {/* Top Stories Slider Item */}
                                            <div className="owl-item">
                                                {/* Sidebar Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/top_1.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Sidebar Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/top_2.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Sidebar Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/top_3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Sidebar Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/top_4.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* Top Stories Slider Item */}
                                            <div className="owl-item">
                                                {/* Sidebar Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/top_1.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Sidebar Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/top_2.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Sidebar Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/top_3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Sidebar Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/top_4.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* Top Stories Slider Item */}
                                            <div className="owl-item">
                                                {/* Sidebar Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/top_1.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Sidebar Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/top_2.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Sidebar Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/top_3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Sidebar Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/top_4.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Advertising */}
                            <div className="sidebar_section">
                                <div className="advertising">
                                    <div
                                        className="advertising_background"
                                        style={{ backgroundImage: "url(../../../assets/images/post_17.jpg)" }}
                                    />
                                    <div className="advertising_content d-flex flex-column align-items-start justify-content-end">
                                        <div className="advertising_perc">-15%</div>
                                        <div className="advertising_link">
                                            <a href="#">How Did van Gogh’s Turbulent Mind</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Newest Videos */}
                            <div className="sidebar_section newest_videos">
                                <div className="sidebar_title_container">
                                    <div className="sidebar_title">Newest Videos</div>
                                    <div className="sidebar_slider_nav">
                                        <div className="custom_nav_container sidebar_slider_nav_container">
                                            <div className="custom_prev custom_prev_vid">
                                                <svg
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    width="7px"
                                                    height="12px"
                                                    viewBox="0 0 7 12"
                                                    enableBackground="new 0 0 7 12"
                                                    xmlSpace="preserve"
                                                >
                                                    <polyline
                                                        fill="#bebebe"
                                                        points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 "
                                                    />
                                                </svg>
                                            </div>
                                            <ul
                                                id="custom_dots"
                                                className="custom_dots custom_dots_vid"
                                            >
                                                <li className="custom_dot custom_dot_vid active">
                                                    <span />
                                                </li>
                                                <li className="custom_dot custom_dot_vid">
                                                    <span />
                                                </li>
                                                <li className="custom_dot custom_dot_vid">
                                                    <span />
                                                </li>
                                            </ul>
                                            <div className="custom_next custom_next_vid">
                                                <svg
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    width="7px"
                                                    height="12px"
                                                    viewBox="0 0 7 12"
                                                    enableBackground="new 0 0 7 12"
                                                    xmlSpace="preserve"
                                                >
                                                    <polyline
                                                        fill="#bebebe"
                                                        points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 "
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar_section_content">
                                    {/* Sidebar Slider */}
                                    <div className="sidebar_slider_container">
                                        <div className="owl-carousel owl-theme sidebar_slider_vid">
                                            {/* Newest Videos Slider Item */}
                                            <div className="owl-item">
                                                {/* Newest Videos Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/vid_1.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Newest Videos Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/vid_2.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Newest Videos Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/vid_3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Newest Videos Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/vid_4.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* Newest Videos Slider Item */}
                                            <div className="owl-item">
                                                {/* Newest Videos Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/vid_1.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Newest Videos Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/vid_2.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Newest Videos Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/vid_3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Newest Videos Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/vid_4.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* Newest Videos Slider Item */}
                                            <div className="owl-item">
                                                {/* Newest Videos Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/vid_1.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Newest Videos Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/vid_2.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Newest Videos Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/vid_3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Newest Videos Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="side_post_image">
                                                                <div>
                                                                    <img src="../../../assets/images/vid_4.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Advertising 2 */}
                            <div className="sidebar_section">
                                <div className="advertising_2">
                                    <div
                                        className="advertising_background"
                                        style={{ backgroundImage: "url(../../../assets/images/post_18.jpg)" }}
                                    />
                                    <div className="advertising_2_content d-flex flex-column align-items-center justify-content-center">
                                        <div className="advertising_2_link">
                                            <a href="#">
                                                Turbulent <span>Mind</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Future Events */}
                            <div className="sidebar_section future_events">
                                <div className="sidebar_title_container">
                                    <div className="sidebar_title">Future Events</div>
                                    <div className="sidebar_slider_nav">
                                        <div className="custom_nav_container sidebar_slider_nav_container">
                                            <div className="custom_prev custom_prev_events">
                                                <svg
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    width="7px"
                                                    height="12px"
                                                    viewBox="0 0 7 12"
                                                    enableBackground="new 0 0 7 12"
                                                    xmlSpace="preserve"
                                                >
                                                    <polyline
                                                        fill="#bebebe"
                                                        points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 "
                                                    />
                                                </svg>
                                            </div>
                                            <ul
                                                id="custom_dots"
                                                className="custom_dots custom_dots_events"
                                            >
                                                <li className="custom_dot custom_dot_events active">
                                                    <span />
                                                </li>
                                                <li className="custom_dot custom_dot_events">
                                                    <span />
                                                </li>
                                                <li className="custom_dot custom_dot_events">
                                                    <span />
                                                </li>
                                            </ul>
                                            <div className="custom_next custom_next_events">
                                                <svg
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    width="7px"
                                                    height="12px"
                                                    viewBox="0 0 7 12"
                                                    enableBackground="new 0 0 7 12"
                                                    xmlSpace="preserve"
                                                >
                                                    <polyline
                                                        fill="#bebebe"
                                                        points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 "
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar_section_content">
                                    {/* Sidebar Slider */}
                                    <div className="sidebar_slider_container">
                                        <div className="owl-carousel owl-theme sidebar_slider_events">
                                            {/* Future Events Slider Item */}
                                            <div className="owl-item">
                                                {/* Future Events Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                                                <div className="event_day">13</div>
                                                                <div className="event_month">apr</div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Future Events Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                                                <div className="event_day">27</div>
                                                                <div className="event_month">apr</div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Future Events Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                                                <div className="event_day">02</div>
                                                                <div className="event_month">may</div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Future Events Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                                                <div className="event_day">09</div>
                                                                <div className="event_month">may</div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* Future Events Slider Item */}
                                            <div className="owl-item">
                                                {/* Future Events Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                                                <div className="event_day">13</div>
                                                                <div className="event_month">apr</div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Future Events Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                                                <div className="event_day">27</div>
                                                                <div className="event_month">apr</div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Future Events Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                                                <div className="event_day">02</div>
                                                                <div className="event_month">may</div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Future Events Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                                                <div className="event_day">09</div>
                                                                <div className="event_month">may</div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* Future Events Slider Item */}
                                            <div className="owl-item">
                                                {/* Future Events Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                                                <div className="event_day">13</div>
                                                                <div className="event_month">apr</div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Future Events Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                                                <div className="event_day">27</div>
                                                                <div className="event_month">apr</div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Future Events Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                                                <div className="event_day">02</div>
                                                                <div className="event_month">may</div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* Future Events Post */}
                                                <div className="side_post">
                                                    <a href="post.html">
                                                        <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                                                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                                                <div className="event_day">09</div>
                                                                <div className="event_month">may</div>
                                                            </div>
                                                            <div className="side_post_content">
                                                                <div className="side_post_title">
                                                                    How Did van Gogh’s Turbulent Mind
                                                                </div>
                                                                <small className="post_meta">
                                                                    Katy Liu<span>Sep 29</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default PostContent;