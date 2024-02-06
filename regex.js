//creating regex

{
    let regexLiteral = /pattern/;
    console.log(regexLiteral);
    let regexConstructor = new RegExp('pattern');
    console.log(regexConstructor);
}

//syntax
//---> /pattern/modifiers
//text.method(/pattern/modifiers)

// /abc/ matches sequence

{
    let text = "I like abc ab cd";
    let txt = text.match(/abc/);
    console.log(txt);
}

// [aeiou] [] denotes character set. at matches any character inside of []
//returns a list of character
{
    let text = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. abc
    Sed 123-456-7890, libero in varius facilisis, mi odio volutpat arcu, ac fermentum ligula nulla vel nisi. Email addresses: john.doe@example.com, alice.smith@email.co.uk. Dates: 2022-01-15, 03/22/2023. Special characters: !@#$%^&*().`
    let txt = text.match(/[aeiou]/g);
    console.log(txt);
}

// [^aeiou] ^ sign denotes negation. any charcater after this sign will be neglected.
//[a-z]/gi = [^0-9]

//alteration: /xa|y/ either match xa or y

//wildcard
// /a.b/

/*
*In JavaScript, a regular expression is defined using the `RegExp` constructor or the literal notation between forward slashes (`/`). The pattern you provided, `/a.b/`, is a regular expression literal.

Let's break down the components of this regular expression:

- `/`: Delimiters to indicate the start of the regular expression.
- `a`: The first character in the sequence must be the literal character 'a'.
- `.`: The dot `.` is a special character in regular expressions that matches any character except a newline (`\n`).
- `b`: The third character in the sequence must be the literal character 'b'.
- `/`: Delimiters to indicate the end of the regular expression.

So, the regular expression `/a.b/` will match any three-character sequence where the first character is 'a', the third character is 'b', and the second character can be any character except a newline.

Here are some examples of strings that would match this pattern:

- `aab`
- `axb`
- `a1b`

And some examples that would not match:

- `abc` (not three characters)
- `a\nb` (contains a newline between 'a' and 'b')
- `a12b` (more than one character between 'a' and 'b') 
*/

// .(dot) matches any character except new line.
// \w mathces Word characters include uppercase and lowercase letters (A-Z, a-z), digits (0-9), and the underscore character _.
// \W is the opposite of \w. find symbols
// \d find a digit
// \D: Find a non-digit character.

// \s: Find a whitespace character.
// \S: Find a non-whitespace character.

// \B: Matches any position that is not a word boundary. This matches a position, not a character.
// \b: Matches a word boundary position between a word character and non-word character or position (start / end of string). 
// \bs: beginning.
// s\b: ending.


{
    const regex = /Hello\n d World/;
    const str = `Hello 
    World`;

    console.log(regex.test(str));  // true
    console.log(str.match(/\n/));
    console.log("hello\fworld");

}

//Quantifiers
// a+ --> match one or more of the preceeding token
// /a/ vs /a+/
// text = a aa aaa
// /a/ only returns a
// /a+/ returns a , aa, aaa

///a\w+/: mathces any word or word segment with preeceding characters. In this case preceeding character is 'a'. I doesn't returns single character.

//a* --> match zero or more of the preceeding token
//warning: this can return empty matches.
//a\w*: mathces any word or word segment with preeceding characters. In this case preceeding character is 'a'. I does return single character.

//a? --> match zero or one of the preceeding token
//a\w?: this return token character itself and another one character with preceeding token

//a{X}: Matches any string that contains a sequence of exactly X occurrences of a
//n{X,Y}: Matches any string that contains a sequence of **`X`** to **`Y`** occurrences of **`n`**.
//n{X,}: Matches any string that contains a sequence of at least **`X`** occurrences of **`n`**.

// a$: Matches the end of the string, or the end of a line if the multiline flag (m) is enabled. This matches a position, not a character.
//^a: Matches the beginning of the string, or the beginning of a line if the multiline flag (m) is enabled. This matches a position, not a character.

// string(?=string): Positive Lookahead - Matches any string that is followed by a specific string 

{
    let text = "zniceaab";
    console.log(text.match(/nice(?=a)/));
}

// string(?!string): Negative lookahead -  Negative Lookahead - Matches any string that is not followed by a specific string

{
    let text = "bnicea";
    console.log(text.match(/nice(?!a)/)) //null
    console.log(text.match(/nic(?!a)/)) //null
}