// Define an array containing your jokes
const setUps = [
    'Why did the Monkey cross the road?',
    'Why did the Cat cross the road?',
    'Why did the Dog cross the road?',
    // Add as many jokes as you like
  ];
  
  const punchLines = [
    'To get to the other side!',
    "To prove he wasn't chicken!",
    'It was chasing the chicken.',
    // Add as many jokes as you like
  ];
  
  // Define a function that generates a random joke
  function generateJoke() {
    let randomIntro = Math.floor(Math.random() * setUps.length);
    let randomPunch = Math.floor(Math.random() * punchLines.length);
    const randomJoke = setUps[randomIntro] + ' ' + punchLines[randomPunch];
    return randomJoke;
  }
  
  // Call the function to generate a random joke
  console.log(generateJoke());
  