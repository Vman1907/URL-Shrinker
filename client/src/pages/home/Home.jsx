import { useState } from "react";
import Navbar from "../../component/Navbar";
import ShortUrl from "./components/ShortUrl";
import UrlForm from "./components/UrlForm";

const Home = () => {
    const [url, setUrl] = useState("");
    const [link, setLink] = useState("");

    return (
        <>
            <Navbar />
            <div className="flex pt-12 justify-center px-40 items-center">
                <div className="flex flex-col space-y-10">
                    <span className="text-7xl text-blue-900">
                        Short. <span className="text-blue-600">Share.</span>
                    </span>
                    <UrlForm
                        url={url}
                        setUrl={setUrl}
                        setLink={setLink}
                        link={link}
                    />
                    <ShortUrl link={link} />
                </div>
            </div>
        </>
    );
};

export default Home;
