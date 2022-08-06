import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header_content d-flex flex-row align-items-center justify-content-start">
                            <div className="logo">
                                <a href="#">avision</a>
                            </div>
                            <nav className="main_nav">
                                <ul>
                                    <li className="active">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/posts">Post</Link>
                                    </li>
                                    <li>
                                        <Link to="/categogies">Categogy</Link>
                                    </li>
                                    <li>
                                        <a href="#">Lifestyle</a>
                                    </li>
                                    <li>
                                        <a href="#">Video</a>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="search_container ml-auto">
                                <div className="weather">
                                    <div className="temperature">+10°</div>
                                    <img className="weather_icon" src="../../../assets/images/cloud.png" alt="" />
                                </div>
                                <form action="#">
                                    <input
                                        type="search"
                                        className="header_search_input"
                                        required="required"
                                        placeholder="Type to Search..."
                                    />
                                    <img
                                        className="header_search_icon"
                                        src="../../../assets/images/search.png"
                                        alt=""
                                    />
                                </form>
                            </div>
                            <div className="hamburger ml-auto menu_mm">
                                <i className="fa fa-bars trans_200 menu_mm" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;