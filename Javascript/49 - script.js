// 可以在聲明時加入換行
let str = `<ul>
                <li>Eren</li>
                <li>Mikasa</li>
                <li>John</li>               
                </ul>`;
console.log(str)

console.log('========== 變數拼接 ${} ==========')
let person = `艾倫`;
let what = `${person} 使出了巨人之力`;
console.log(what)


console.log('========== 簡化對象 ==========')

let name = '張艾倫';
let skill = function () {
    console.log('毀滅世界')
}

let hero = {
    name,
    skill,
    fin() {
        console.log('死了!!!!!')
    }
}

console.log(hero)
