/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

// var isBalanced = function(str) {
//     var arrayOfStr = str.split('');
//     var isBalanced = true;

//     var isBalancedParenthesis = function(arr) {
//         looper(arr, (i)=>{
//             if(arr[i]===')')
//                 looper(arr.slice(i+1))
//             else
//                 isBalanced = false;
//         }, ()=>{isBalanced=false;})
//     }

//     var isBalancedCurlyBrackets = function(arr) {
//         looper(arr, (i)=>{
//             if(arr[i]==='}')
//                 looper(arr.slice(i+1))
//             else
//                 isBalanced = false;
//         }, ()=>{isBalanced=false;})
//     }

//     var isBalancedSquareBrackets = function(arr) {
//         looper(arr, (i)=>{
//             if(arr[i]===']')
//                 looper(arr.slice(i+1))
//             else
//                 isBalanced = false;
//         },  ()=>{isBalanced=false;})
//     }

//     function looper(arr, atClosure = ()=>{isBalanced = false;}, atEnd = ()=>{}) {
//         console.log(arr)
//         for (var i = 0; i<arr.length; i++) {
//             switch(arr[i]){
//                 case "(":
//                     isBalancedParenthesis(arr.slice(i+1));
//                     return;
//                 case "{":
//                     isBalancedCurlyBrackets(arr.slice(i+1))
//                     return;
//                 case "[":
//                     isBalancedSquareBrackets(arr.slice(i+1))
//                     return;
//                 case ")":
//                 case "]":
//                 case "}":
//                     atClosure(i);
//                     return ;
//                 default:
//                     break;

//             }
//         }
//         atEnd()
//     }

//     looper(arrayOfStr)

//     return isBalanced;
// };

isBalanced = function(str) {
    var stack = [];
    var reflect = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
        for(var i = 0; i<str.length; i++) {
            switch(str[i]){
                case "(":
                case "{":
                case "[":
                    stack.push(str[i])
                    break;
                case ")":
                case "]":
                case "}":
                    if(stack.pop()!==reflect[str[i]]){
                        return false;
                    }
                    break;
                default:
                    break;

            }
        }

        if(stack.length){

            return false;}
        
        return true;

    
}


console.log(isBalanced("(({)})"))