import { useEffect, useState } from "react";
import { getAll } from "../../api/APi";
import Navbar from "../../component/Navbar";
import UrlData from "./components/UrlData";

const UrlList = () => {
    useEffect(() => {
        getAll(setLinks);
    }, []);

    const [links, setLinks] = useState([]);

    return (
        <>
            <Navbar />
            <div>
                <div className="flex flex-row justify-between py-5 px-5">
                    <div className="w-2/4 font-semibold text-2xl">Link</div>
                    <div className="w-1/4 font-semibold text-2xl">Link ID</div>
                    <div className="w-1/4 font-semibold text-2xl">Action</div>
                </div>
                {links.map((links, index) => {
                    return <UrlData key={index} links={links} setLinks={setLinks}/>;
                })}
            </div>
        </>
    );
};

export default UrlList;
