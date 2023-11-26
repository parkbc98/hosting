'use strict';

let clientData;

async function getClientData() {
    try {
        const response = await axios.get('http://localhost:3000/clientData/2');

        clientData = response.data;

        console.log(clientData);
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

getClientData();