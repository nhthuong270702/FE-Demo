
function PostBanner() {

    return (
        <div className="home_post">
            {/* <div
                className="home_background parallax-window"
                data-parallax="scroll"
                data-image-src="../../../assets/images/post.jpg"
                data-speed="0.8"
            /> */}
            <div
                className="home_background parallax-window"
                data-parallax="scroll"
                data-speed="0.8"
                style={{
                    backgroundImage: 'url("../../../assets/images/post.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                }}
            ></div>
            <div className="home_content">
                <div className="post_category trans_200">
                    <a href="category.html" className="trans_200">
                        sport
                    </a>
                </div>
                <div className="post_title">
                    How Did van Gogh’s Turbulent Mind Depict One of the Most Complex
                    Concepts in Physics?
                </div>
            </div>
        </div>
    )
}

export default PostBanner;