'use strict';

let clientData;

async function getClientData() {
    try {
        const response = await axios.get('https://candid-piroshki-49edd7.netlify.app/server/db.json/clientData/');

        clientData = response.data;

        console.log(clientData);
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

getClientData();