function linearSearch(arr, x){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === x) return i;
    }
    return NaN;
}

function binarySearch(arr, x){
    let lo = 0, hi = arr.length -1;
    while(lo <= hi){
        let mid = Math.floor(lo + (hi - lo)/2);
        if(arr[mid] === x) return mid;
        else if(arr[mid] < x) lo = mid + 1;
        else hi = mid - 1;
    }
    return NaN;
}

export default function fun(){
    console.log("fun");
}

console.log("ending");

// export{
//     linearSearch,
//     binarySearch
// };
export{
    linearSearch as func1,
    binarySearch as func2
};

// module.exports = {
//     linear : linearSearch,
//     bianry : binarySearch
// };