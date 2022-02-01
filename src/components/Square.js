const isEven = (number) => {
    return number % 2 == 0;
}

const isPrime = (number) => {
    for (let i = 2; i <= number; i++) {
        if (i != number && number % i == 0)
            return false;
    }
    if (number == 0 || number == 1)
        return false;
    return true;
}


const classNameSquare = (number) => {
    let className = 'square';
    if (isPrime(number))
        className += ' prime';
    else {
        if (isEven(number))
            className += ' even';
        else
            className += ' odd';
    }
    return className;
}

const Square = ({ number }) => {
    return (
        <div className={classNameSquare(number)}>
            <h1 class="number">{number}</h1>
        </div>
    );
};

export default Square;
