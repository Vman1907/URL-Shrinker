import axios from "axios";

const sendUrl = (data, setLink, link) => {
    axios({
        method: "post",
        url: process.env.REACT_APP_SERVER_LINK + "shortUrl",
        data: {
            fullURL: data,
        },
    })
        .then((result) => {
            setLink(result.data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};

const getAll = (setLinks) => {
    axios({
        method: "get",
        url: process.env.REACT_APP_SERVER_LINK + "showAllUrl",
    })
        .then((res) => {
            setLinks(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};

const deleteUrl = (link, setLinks) => {
    const url = process.env.REACT_APP_SERVER_LINK + "deleteUrl/" + link;

    axios({
        method: "post",
        url: url,
    })
        .then((res) => {
            console.log(res);
            getAll(setLinks);
        })
        .catch((err) => {
            console.log(err);
        });
};

export { deleteUrl, getAll, sendUrl };

