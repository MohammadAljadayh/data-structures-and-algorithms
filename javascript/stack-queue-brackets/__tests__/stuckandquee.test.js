'use strict';

const BracketValidation =require('../stackqueuebrackets');

describe('test multi-bracket-validation',()=>{
  it('testing case 1 input {} ',()=>{
    expect(BracketValidation('{}')).toEqual(true);
  });
  it('testing case 2 {}(){} ',()=>{
    expect(BracketValidation('{}(){}')).toEqual(true);
  });
  it('testing case 3 ()[[Extra Characters]] ',()=>{
    expect(BracketValidation('()[[Extra Characters]]')).toEqual(true);

  });
  it('testing case 4 (){}[[]] ',()=>{
    expect(BracketValidation('(){}[[]]')).toEqual(true);

  });
  it('testing case 5 {}{Code}[Fellows](()) ',()=>{
    expect(BracketValidation('{}{Code}[Fellows](())')).toEqual(true);
  });
  it('testing case 6 [({}] ',()=>{
    expect(BracketValidation('[({}]')).toEqual(false);

  });
  it('testing case 7 (]( ',()=>{
    expect(BracketValidation('(](')).toEqual(false);

  });
});