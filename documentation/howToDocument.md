## How to document wrk.js

[Back to README](/README.md)  

#### Creating the user reference
The basic user reference is stored in /documentation/rawReference.txt as a text file and can be parsed and transformed into a README file, an HTML table, etc by programs written for that task. Each line in the file is one wrk function or feature. Each line is split into several parts, seperated by backslashes. The parts on each line are: name of feature, description, file in which the feature is declared, an example, and a link to more information. Lines starting with // are comments should be ignored.