import { sendUrl } from "../../../api/APi";
import checkUrl from "../../../helper/URLValidate";

export default function UrlForm({url,setUrl,setLink,link}) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (checkUrl(url)) {
            sendUrl(url, setLink, link);
        } else {
            alert("invalid url");
        }
    };
    return (
        <form
            className="flex flex-row justify-between space-x-5 shadow-xl px-5 py-2 rounded-full"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                onChange={(e) => {
                    setUrl(e.target.value);
                }}
                className="outline-none w-80 text-sm"
                value={url}
                required
                placeholder="Place your link and shorten it"
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg m-0"
                type="submit"
            >
                Shorten
            </button>
        </form>
    );
}
