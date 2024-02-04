/**
 * Brackets
Brackets are used to find a range of characters:

Bracket	Description
[abc]	Find any character between the brackets
[^abc]	Find any character NOT between the brackets
[0-9]	Find any character between the brackets (any digit)
[^0-9]	Find any character NOT between the brackets (any non-digit)
(x|y)	Find any of the alternatives specified


Metacharacters
Metacharacters are characters with a special meaning:

Character	Description
.	Find a single character, except newline or line terminator
\w	Find a word character
\W	Find a non-word character
\d	Find a digit
\D	Find a non-digit character
\s	Find a whitespace character
\S	Find a non-whitespace character
\b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
\B	Find a match, but not at the beginning/end of a word
\0	Find a NULL character
\n	Find a new line character
\f	Find a form feed character
\r	Find a carriage return character
\t	Find a tab character
\v	Find a vertical tab character
\xxx	Find the character specified by an octal number xxx
\xdd	Find the character specified by a hexadecimal number dd
\udddd	Find the Unicode character specified by a hexadecimal number dddd
Quantifiers
Quantifier	Description
n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n
n{X}	Matches any string that contains a sequence of X n's
n{X,Y}	Matches any string that contains a sequence of X to Y n's
n{X,}	Matches any string that contains a sequence of at least X n's
n$	Matches any string with n at the end of it
^n	Matches any string with n at the beginning of it
?=n	Matches any string that is followed by a specific string n
?!n	Matches any string that is not followed by a specific string n

----------------------------
Regular Expression Patterns
Brackets are used to find a range of characters:

Expression	Description	Try it
[abc]	Find any of the characters between the brackets	
[0-9]	Find any of the digits between the brackets	
(x|y)	Find any of the alternatives separated with |

Metacharacters are characters with a special meaning:

Metacharacter	Description	Try it
\d	Find a digit	
\s	Find a whitespace character	
\b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
\uxxxx	Find the Unicode character specified by the hexadecimal number xxxx	
Quantifiers define quantities:

Quantifier	Description	Try it
n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n


---------
/*
It's not practical to provide an exhaustive list of all possible regular expression patterns, as they can be highly diverse and depend on specific use cases. However, I can give you a list of common patterns and constructs that are frequently used in regular expressions:

1. **Literal Characters:**
   - `/abc/`: Matches the sequence of characters "abc".

2. **Character Classes:**
   - `/[aeiou]/`: Matches any vowel (a, e, i, o, u).
   - `/[0-9]/`: Matches any digit.

3. **Negated Character Classes:**
   - `/[^aeiou]/`: Matches any character that is not a vowel.
   - `/[^0-9]/`: Matches any character that is not a digit.

4. **Wildcard:**
   - `/a.b/`: Matches any three-character sequence where the first and third characters are 'a' and 'b', and the second character can be any character except a newline.

5. Quantifiers:
   - `/a/`: Matches zero or more occurrences of 'a'.
   - `/a+/`: Matches one or more occurrences of 'a'.
   - `/a?/`: Matches zero or one occurrence of 'a'.
   - `/a{3}/`: Matches exactly three occurrences of 'a'.
   - `/a{3,5}/`: Matches between three and five occurrences of 'a'.

6. Anchors:
   - `/^abc/`: Matches "abc" only if it appears at the beginning of the string.
   - `/xyz$/`: Matches "xyz" only if it appears at the end of the string.

7. Groups and Capturing:
   - `/(abc)/`: Creates a capturing group for the sequence "abc".
   - `/(\d+)-(\w+)/`: Matches one or more digits, followed by a hyphen, and then one or more word characters. Creates two capturing groups.

8. Alternation:
   - `/cat|dog/`: Matches either "cat" or "dog".

9. Escape Special Characters:
   - `/\./`: Matches a literal period (dot).
   - `/a\+/`: Matches the character 'a' followed by a literal plus sign.

10. Case-Insensitive Matching:
    - `/abc/i`: Matches "abc" case-insensitively.

11. Word Boundaries:
    - `/\bword\b/`: Matches the whole word "word" as a standalone word.

12. Non-Capturing Groups:
    - `/(?:abc)/`: Creates a non-capturing group for the sequence "abc".

13. Lookahead and Lookbehind:
    - `/\d(?=px)/`: Matches a digit only if it is followed by "px".
    - `/(?<=\$)\d+/`: Matches one or more digits only if they are preceded by a dollar sign.

These are just a few examples, and regular expressions can become much more complex depending on the specific requirements of the pattern you need to match. Regular expressions are a powerful tool, but they can also be intricate, so it's important to practice and refer to documentation when needed.

 */