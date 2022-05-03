exports = {
    a: 10,
    b: 20,
    sayHello() {
        console.log('hello!!')
    }
}


// module.export 比 export 優先
module.exports.c = 30;
module.exports.b = 40;
