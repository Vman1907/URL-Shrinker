export default function ShortUrl({link}) {
    return (
        <div className="flex flex-col">
            <span>Shortened link</span>
            <span>
                <a href={link}>{link}</a>
            </span>
        </div>
    );
}
