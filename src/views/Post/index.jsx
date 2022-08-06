import { useEffect } from 'react';
import PostBanner from './PostBanner';
import PostContent from './PostContent';
import './PostPage.scss';

function PostPage() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "../../assets/js/post.js";
        script.async = true;
        // script.onload = () => this.scriptLoaded();

        document.body.appendChild(script);
    }, []);

    return (
        <div className="super_container">
            <PostBanner />
            {/* Page Content */}
            <PostContent />
        </div>

    );
}

export default PostPage;