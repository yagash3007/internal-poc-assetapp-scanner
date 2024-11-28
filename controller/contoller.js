// import fs from 'fs';
// import csv from 'csv-parser';
import path from 'path';
import { readFile } from 'fs/promises';


const homePage = (req, res) => {
    res.render('index')
}

const readCSV = async (req, res) =>{

    const { barcode } = req.body;
    const filteredArray = barcode;
    res.send(filteredArray)
}

function filterByBarcode(arr, barcode) {
    return arr.filter(item => item.Barcode === barcode);
}


export {
    homePage,
    readCSV
}