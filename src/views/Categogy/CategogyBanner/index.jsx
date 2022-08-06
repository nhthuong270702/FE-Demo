
function CatelogyBanner() {

    return (
        <div className="home_cate">
            {/* <div
                className="home_background parallax-window"
                data-parallax="scroll"
                data-image-src="../../../assets/images/category.jpg"
                data-speed="0.8"
            /> */}
            <div
                className="home_background parallax-window"
                data-parallax="scroll"
                data-speed="0.8"
                style={{
                    backgroundImage: 'url("../../../assets/images/category.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                }}
            ></div>
        </div>
    )
}
export default CatelogyBanner;