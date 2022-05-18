/**
 * 1,1,2,3,5,8,13....
 * 前兩項相加於後項 斐波納契序列
 * */
function fn(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return fn(n - 1) + fn(n - 2)
    }
}

console.log(fn(7))

/**
 * 用遞歸函數印出指定對象
 *
 * */

var data = [
    {
        id: 1,
        tag: '家電',
        product: [{
            id: 11,
            name: '聲寶洗衣機'
        }, {
            id: 12,
            name: '櫻花冷氣機',
        }, {
            id: 13,
            name: '大同電視'
        }]

    }, {
        id: 2,
        tag: '3C產品',
        product: [{
            id: 21,
            name: '蘋果手機',
        }, {
            id: 22,
            name: '華碩平板'
        }]
    }
];
var o = {};

function findID(data, foundID) {
    data.forEach(function (item) { // value命名為item
        if (item.id == foundID) {
            o = item;

            // 你有item.product這數據嗎 && item.product.length 長度大於0
        } else if (item.product && item.product.length > 0) {
            o = findID(item.product, foundID);
        }


    })
    return o;
}

console.log(findID(data, 1))
console.log(findID(data, 2))
console.log(findID(data, 11))
console.log(findID(data, 12))
console.log(findID(data, 21))
console.log(findID(data, 22))