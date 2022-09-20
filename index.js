// code your solution here
function saturdayFun(activity = "roller-skate"){

    // activity = typeof activity !== "undefined" ? activity : "roller-skate";
    return `This Saturday, I want to ${activity}!`
}
    saturdayFun("football")



const mondayWork = function (study = "go to the office"){
    // study = typeof study !== "undefined" ? study : "go to the office";

    return `This Monday, I will ${study}.`
}
mondayWork("code")

// function wrapAdjective(special = "a dedicated programmer"){
//     return function(pretty = "a hard worker"){
//         return `You are *${pretty}*!`
//     }
//     return `You are ||${special}||!`
// }
// wrapAdjective()

let wrapAdjective = function(style="*") {

    return function(adjective="special"){
        return `You are ${style}${adjective}${style}!`
    }

}