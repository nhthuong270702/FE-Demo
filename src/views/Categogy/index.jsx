import CatelogyBanner from "./CategogyBanner";
import CategogyContent from "./CategogyContent";
import './Categogy.css';
import { useEffect } from "react";

function CategogyPage() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "../../assets/js/category.js";
        script.async = true;
        // script.onload = () => this.scriptLoaded();

        document.body.appendChild(script);
    }, []);

    return (
        <div className="super_container">
            {/* Home */}
            <CatelogyBanner />
            {/* Page Content */}
            <CategogyContent />
        </div>

    )
}
export default CategogyPage;