'use strict';
// import axios from 'axios';

let clientData;

async function getClientData() {
    try {
        const response = await axios.get('https://hostingtest-7ad34-default-rtdb.asia-southeast1.firebasedatabase.app/clientData.json/');

        clientData = response.data;

        console.log(clientData);
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

getClientData();