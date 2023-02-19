// export const url = 'https://chabot-app-server.vercel.app';
export const url = 'http://localhost:5000';

export const getData = (setData, collection, body) => {
    fetch(`${url}/${collection}`, {
        method: 'GET',
        headers: {
            authorization: localStorage.getItem('token')
        }, 
        body
    })
        .then(res => res.json())
        .then((data) => setData(data))
}