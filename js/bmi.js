function getComment(bmi) {
    let commit;
    if (bmi < 18.5) {
        comment = "「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！";
        color = "cyan";
    } else if (bmi < 24) {
        comment = "恭喜！「健康體重」，要繼續保持！";
        color = "green";
    } else if (bmi < 27) {
        comment = "「體重過重」了，要小心囉，趕快力行「健康體重管理」！";
        color = "orange";
    } else {
        comment = "啊～「肥胖」，需要立刻力行「健康體重管理」囉！";
        color = "red";
    }

    return [comment, color];
}
// let x = 10;
// let y = 20;
// let z = x + y;
// // 判斷式
// if (x > 10) {

// } else if (y > 20) {

// } else {
//     console.log(x, y);
// }

// // and or not
// x = "10";
// y = 10;
// // 型態跟值都要相同
// console.log(x === y);
// // and ==> &&    or ==> |   not ==>!
// if (x >= 10 && y >= 30) {
//     console.log("1");
// }
// if (x >= 10 || y >= 30) {
//     console.log("1");
// }

// let a = false;
// if (!a) {
//     console.log(a);
// }

// let height = prompt("請輸入身高 : ");
// let weight = prompt("請輸入體重 : ");
// let bmi = getBmi(height, weight);
// alert("BMI:" + bmi);
// 函式宣告
function getBmi(height, weight) {
    const bmi = weight / (height / 100) ** 2;
    // console.log(bmi.toFixed(2));
    return bmi.toFixed(2);
}

