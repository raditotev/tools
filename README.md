This repo is a place for various tools that could be potentially useful to other people.

*Some of the tools can be run as shell scripts. To do so you'll have to change file mode before run, i.e. `chmod +x [filename]`*

## Branch name creator

Creates kebab-case branch name for given list of words.
```
./branch-name-creator.js
Enter branch name: the name of you new branch
=>  the-name-of-you-new-branch

node ./branch-name-creator.js # gives the same output
```

## BTC mnemonic to number list
Given a BTC mnemonic returns a number representation for each of the words.
```
./btc-menmonic-to-number-list.js
Enter your mnemonic: elder boat unable lizard champion right goose allow pattern autumn key title
Your mnemonic's number representation:  571 199 1891 1047 305 1487 805 54 1291 126 977 1816

node btc-menmonic-to-number-list.js # gives the same output
```