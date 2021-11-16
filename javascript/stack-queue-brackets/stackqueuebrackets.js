'use strict';

const Stack=require('./lib/stack');

function BracketValidation(input){

  const stack=new Stack();


  for(let i=0;i<input.length;i++){
    if(input[i]==='{' || input[i]==='[' || input[i]==='('){
      stack.push(input[i]);
    }else{
      if(input[i]==='}' || input[i]===']' || input[i]===')'){
        let bracket=0;
        if(input[i]==='}'){bracket='{';}
        if(input[i]===']'){bracket='[';}
        if(input[i]===')'){bracket='(';}

        if(bracket===stack.peek())
        {
            stack.pop();
        }
        else return false;
      }
    }
  }
  if(stack.top){
    return false;
  }else{
    return true;
  }

}

module.exports=BracketValidation;