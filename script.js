function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }


const your_daily_luck = {
    sign: ['leo','cancer','vergo','scorpio','libra','gemini'],
    todayluck:['not your day','great achievments','bad luck','unexpected surprise','normal day'],
    advice:['enjoy the moment','try harder','forget the past','take care','love yourself']    
}

let uniqueWisdom = [];

for(let prop in your_daily_luck){
    let optionid = generateRandomNumber(your_daily_luck[prop].length)

    switch(prop){
        case 'sign':
                    uniqueWisdom.push(`your sign is ${your_daily_luck[prop][optionid]}`)
            break
        case 'todayluck':
                    uniqueWisdom.push(`your luck for today is ${your_daily_luck[prop][optionid]}`)
            break
        case 'advice':
                    uniqueWisdom.push(`our adice for you is ${your_daily_luck[prop][optionid]}`)
            break

            default:
                    uniqueWisdom.push("there is no info to show")
    }
}


function finalresult (luck){
    const result = uniqueWisdom.join('\n');
    console.log(result);
}

finalresult(uniqueWisdom);







