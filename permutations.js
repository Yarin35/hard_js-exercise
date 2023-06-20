function generatePermutations(string) {
    const result = [];
  
    // Recursive function to generate permutations
  function permute(str, prefix = "") {
    if (str.length === 0) {
      result.push(prefix); // Found a permutation
    } else {
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1); // Remove the current character
        permute(remaining, prefix + char); // Recursively generate permutations
      }
    }
  }
    permute(string); // recursive call
  
    return result;
  }
  
  const readline = require('readline');
  const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  }); //readline setup

  // Example usage
  readl.question("Enter a string: ", (input) => {
    if (input) {
        const permutations = generatePermutations(input);
        console.log(permutations);
        readl.close();
    } else
        readl.close();
  });
  