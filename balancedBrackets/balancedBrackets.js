/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
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
};
