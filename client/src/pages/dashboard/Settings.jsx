import { useEffect } from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section-container">
      <div className="text-center mt-40 space-y-11">
        <img
          className="mask mask-squircle inline-block w-80"
          src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"
        />
        <p className="font-semibold">Oops! Sorry yet we're working on it😢.</p>
        <Link to="/">
          <button className="btn bg-green text-white my-10">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
