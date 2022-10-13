const input = document.querySelector('#input');
const btn = document.querySelector('button');
const res = document.querySelector('#result');

function isPalindrome(s){
    let start = 0;
    let end = s.length-1;
    while (start<=end) {
        if(s[start]!=s[end]){
            return false;
        }
        start+=1;
        end-=1;
    }
    return true;
}

function handleSubmit(){
    if(input.value === ""){
        input.value = "";
        res.innerHTML = "Please enter a string or number!";
        return;
    }
    console.log(input.value);
    if(isPalindrome(input.value)){
        let cur = input.value;
        cur = cur.toUpperCase();
        input.value = "";
        res.innerHTML = `${cur} IS A PALINDROME`
    }else{
        let cur = input.value;
        cur = cur.toUpperCase();
        input.value = "";
        res.innerHTML = `${cur} IS NOT A PALINDROME`
    }
}