import HomeSlider from './HomeSlider';
import HomeContent from './HomeContent';
import './HomePage.scss'
import { useEffect } from 'react';

function HomePage() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "../../assets/js/custom.js";
        script.async = true;
        // script.onload = () => this.scriptLoaded();

        document.body.appendChild(script);
    }, []);

    return (
        <div className="super_container">
            {/* Home */}
            <HomeSlider />
            {/* Page Content */}
            <HomeContent />
        </div>
    )
}

export default HomePage;