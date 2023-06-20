const readline = require('readline');

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

readl.question("insert a string: ", (input) => {
    if (input)
        check_is_balanced(input);
    else
        readl.close();
});


function check_is_balanced(input)
{
    let open = 0;
    let close = 0;

    for (let i = 0; i < input.length; i ++) {
        if (input[i] === '[' || input[i] === '(' || input[i] === '{')
            open ++;
        if (input[i] === ']' || input[i] === ')' || input[i] === '}')
            close ++;
    }
    if (open !== close)
        console.log("String unbalanced !");
    readl.close();
};