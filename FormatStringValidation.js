var A = readline();
const B = readline();
var matchString = A
var answer = "m"

function removeFirst(string) {
    return string.substring(1, string.length)
} 

function recur(matchString, freedom) {
    //string is the initial string (A)
    //matchString is the string that it is being matched against.
    //freedom is true/false if it needs to be the next char in string or if it can be from anywhere

    if(matchString == '' && (A==''||freedom==true)) return answer = "MATCH"; else {
        console.error("\n--------------------\n"+A +"\nBeing Matched Against\n" +matchString+"\n--------------------\n" )
        switch(matchString[0]) {
            case "~":
                if(recur(removeFirst(matchString),true) == 'f') return 'f';
            break;

            case "?":
                A=removeFirst(A)
                if(recur(removeFirst(matchString),freedom) == 'f') return 'f';

            break;

            default: 
                if(!A.includes(matchString[0])){console.error("FAILED DUE TO NO MATCH FOR " + matchString[0] + " IN A");return answer = "FAIL"}
                if(freedom) {
                    A = A.substring(A.indexOf(matchString[0])+1, A.length)
                    if(recur(removeFirst(matchString), false) =='f') if(recur(matchString, freedom) =='f') return 'f';
                } else {
                    if(A[0] == matchString[0]) {
                        A=removeFirst(A)
                        if(recur(removeFirst(matchString), false) =='f') if(recur(matchString, freedom) =='f') return 'f';
                    } else {
                        return 'f'
                    }
                }
            break;
        }

    }


}

while(A != '' && answer == 'm'){
    console.error("Recurring with B => " + B)
    recur(B, false)
}
print(answer)
