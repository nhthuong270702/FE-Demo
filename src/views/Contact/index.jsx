import { useEffect } from 'react';
import ContactBanner from './ContactBanner';
import './ContactPage.css'

function ContactPage() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "../../assets/js/contact.js";
        script.async = true;
        // script.onload = () => this.scriptLoaded();

        document.body.appendChild(script);
    }, []);

    return (
        <div className="super_container">
            {/* Home */}
            <ContactBanner />
        </div>
    )
}

export default ContactPage;