export const FizzBuzz = (n: number): string => {
    let string = '';
    for (let i = 1; i <= n; i++) {
        if(i % 3 === 0) {
            string += 'Fizz';
        } else if(i % 5 === 0) {
            string += 'Buzz';
        }  else string += i;
        if(i !== n) string += ' ';
    }
    return string
}
