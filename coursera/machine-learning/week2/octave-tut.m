//
// basic operators
//

// operators
// NOT EQUAL -> 1 ~= 2
// EITHER OR -> xor(x,y)
// EQUAL -> 1 == 1
// BOTH -> 1 && 1

// variables
a =  //  a = 3.1416
a = pi; // semi-colon supresses output.
a //  a = 3.1416
disp(a) //  3.1416
disp(sprintf('2 decimals: %0.2f', a) //   2 decimals: 3.14

format long
a 
//  a = 3.1416926...
format short
a
//  a = 3.14...

a = [1 2; 3 4; 5 6];
// a = 
//     1 2
//     3 4
//     5 6

v = 1:6
// v = 1 2 3 4 5 6

ones(2, 3)
// ans = 
//  1 1 1
//  1 1 1
//  1 1 1

hist(v) // prints a histogram of your vector.
eye(3) // prints out a 3x3 identity matrix

help <command> // prints out help info for your command.

//
// moving data around
// 

a = [1 2; 3 4; 5 6]
size(a) // 3 2
sz(size(a)) // 1 2
size(a, 1) // 3, rows
size(a, 2) // 2, columns

length([1;2;3;4;5]) // 5
// length only used on vectors

who // shows octave memory variables!
whos // detailed view! hot. shows name, size (dimensions), bytes, class (double, logical, char, etc)

clear a // will clear the variable a from memory/workspace.
clear // will clear ALL variables from memory/workspace.

save hello.mat a // will save variable a to file 'hello.mat' in the current working directory.
save hello.text -ascii // saves as human readable data.


a = [1 2; 3 4; 5 6];
a(3, 2) // 6
a (2, :) // will fetch every element in that row
a (:, 2) // will fetch every element in that column