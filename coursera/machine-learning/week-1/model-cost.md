# model and cost function

- supervised learning, given the "right answer" for each example in the data
- regression, predict real-valued output
- classsifaction, predict discrete-valued output (0,1)

## important notation for course!

- **m** = number of training examples
- **x**'s = "input" variable/ features
- **y**'s = "output" variable / target variable
- **(x, y)** = single training example
- **(x<sup>i</sup>, y<sup>i</sup>)** = "i"th training example (i is index)

### example notation

![Image of Example Notation](https://github.com/awitherow/learning/blob/master/coursera/week-1/img/notation-example.jpg?raw=true)

## Linear Regression

we take a training set, pass it through a learning algorithm to attempt to solve our hypothesis*.

Training Set > Learning Algorithm > H (hypothesis)

**HYPOTHESIS** is the function that takes the training set and produces the result.

### How is the Hypothesis represented?

h<sub>Θ</sub>(x) = Θ<sub>0</sub> + Θ<sub>1x</sub>

shorthand: h(x)

This model is called Linear Regression, specifically with one variable. Also called, Univariate linear regression.

**NOTE**: AT HERE, I TOOK A DETOUR. Found at `supplements/stats-101`.


