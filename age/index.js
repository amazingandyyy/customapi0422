'use strict';

var moment = require('moment');

module.exports = function(params, res) {

    var data = params.shift();
    console.log('data: ', data);
    // var time = moment().format(`${data}`, "YYYYMMDD");
    // console.log('time: ', time);
    // var formattedDate = moment(`${data}`).toArray();
    // console.log('formattedDate: ', formattedDate);
    var dataY = Number(data.split('').splice(0,4).join(''));
    var dataM = Number(data.split('').splice(4,2).join(''));
    var dataD = Number(data.split('').splice(6,2).join(''));
    var result = moment([dataY, dataM, dataD]).fromNow(true);
    console.log('result: ', result);

    //
    // var result = year.split(' ').slice(0, 1);
    // var now = moment().format('YYYY/MM/DD').split('/');
    // var nowY = now[0];
    // var nowM = now[1];
    // var nowD = now[2];
    //
    // // if(year>nowY){
    // //   if(nowM<inputM){
    // //     return
    // //   }
    // // }
    //
    // console.log('now: ', now);
    // result.push('yrs');
    // result.push('old');
    // var result2 = result.join(' ');
    // console.log('result2: ', result2);
    // // console.log(result);
    // res.end(`${result2}`);


    // var randNum = randNum();
    // console.log('mathURL: ', req.url);
    res.end(`${result} old`);
    // res.end('Age!!!!!!\n');
}
