
const BASE_URL = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json'

const TYPE_SEARCH= 'SEARCH'

const API = async function (type, data) {        
    // if (type === TYPE_LOGIN) {             
    //     let res = await fetch(URL_LOGIN, {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Access-Control-Allow-Origin':'*'
    //             },
    //             body: JSON.stringify({
    //             "email": data.email,
    //             "password": data.password,
    //             })
    //     });                
    //     let code = res.status;
    //     let {licenca} = await res.json();    
    //     return {code,licenca};        
    // }
}

export default API;