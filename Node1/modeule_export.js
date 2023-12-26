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
console.log("ending");

module.exports = {
    linear : linearSearch,
    bianry : binarySearch
};