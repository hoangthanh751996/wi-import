'use strict';
let extractor = require('./las2-extractor.js');
let url = process.argv[2];

extractor.setBasePath('./curveData');
extractor.extractWell(url, function(result) {
    console.log("Well log sections extracted:", result);
}, {
    label: 'Las_20.las'
}); //done

//extractor.extractCurves(url, 'project1', 'well1'); //done

