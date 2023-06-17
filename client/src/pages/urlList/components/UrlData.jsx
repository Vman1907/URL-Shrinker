import { deleteUrl } from "../../../api/APi";

export default function UrlData({ links, setLinks }) {

    const deleteLink=(link)=>{
        deleteUrl(link, setLinks);
    }

    return (
        <div className="flex flex-row justify-between py-5 px-5">
            <div className="w-2/4">{links.full}</div>
            <div className="w-1/4">{links.short}</div>
            <div className="w-1/4">
                <button className="bg-red-500 text-white py-1 px-3 rounded-lg" onClick={()=>deleteLink(links.short)}>Delete Url</button>
            </div>
        </div>
    );
}
