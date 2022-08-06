import './ContactPage.scss'
import { useEffect } from 'react';
import ContactBanner from './ContactBanner';

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