alert("Welcome to the Roulette Game! You have $500 to spend. Good Luck!")


const roulette = numbers => {
  const array = [];

  Object.keys(numbers).forEach(key => {
    for (let i = 0; i < numbers[key]; i++) {
      array.push(key);
    };
  });

  return array[(Math.random() * array.length) | 0];

};

const numbers = {
  Black
};

roulette(numbers);//? 