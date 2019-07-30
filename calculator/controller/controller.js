const data = require('../models/data.js')


//不牵扯计算，只负责接收传递数据
exports.showResult = function (req, res) {
    let start = new Date();
    let result = data(req.params.number);
    console.log([1,200])
    res.render('showResult',{
        result: result,
        t: new Date()-start,
    })  //与send一样结束并返回请求
}