function isPalindrome(str){
    const arr = str.split('');
    let n = arr.length;
    let mid = parseInt(n/2);
    for(let i =0 ; i < mid; i++){
        if(arr[i]!= arr[n-1-i])
        return false;
    }
    return true;
}
document.write(isPalindrome('redder'));
