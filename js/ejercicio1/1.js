function prepareGifts(gifts) {
    return [...new Set(gifts)].sort((a,b)=> {
        return a-b;
    });
    // return [...new Set(gifts)].sort()
    // if(gifts.length == 0){
    //     return gifts;
    // }

    // let giftsSinDuplicados = new Array();

    // for(let i=0; i<gifts.length; i++){
    //     if(!giftsSinDuplicados.includes(gifts[i])){
    //         giftsSinDuplicados.push(gifts[i])
    //     }
    // }
    // return giftsSinDuplicados.sort();

    
}

const gifts1 = [200, 100, 1000, 4];
const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1) // [1, 2, 3, 4, 5]