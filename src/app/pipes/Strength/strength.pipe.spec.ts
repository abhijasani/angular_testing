import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {

  // this test cases is not dependent on any other class , it's called isolated test cases

  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should it display weak when value is less than 10', () => {
    const pipe = new StrengthPipe();
    let result = pipe.transform(7);
    expect(result).toBe('7(Weak)');
  })

  it('should it display strong when value is less than 20 and greater than 9', () => {
    const pipe = new StrengthPipe();
    let result = pipe.transform(15);
    expect(result).toEqual('15(strong)');
  })

  it('should it display strongest when value is greater than 19', () => {
    const pipe = new StrengthPipe();
    let result = pipe.transform(20);
    expect(result).toEqual('20(strongest)');
  })
});
