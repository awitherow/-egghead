# model representation

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

Training Set > Learning Algorithm > ( x -> H -> y)

**HYPOTHESIS** is the function that takes the training set and produces the result.

### How is the Hypothesis represented?

h<sub>Θ</sub>(x) = Θ<sub>0</sub> + Θ<sub>1x</sub>

shorthand: h(x)

This model is called Linear Regression, specifically with one variable. Also called, Univariate linear regression.

**NOTE**: AT HERE, I TOOK A DETOUR. Found at `[supplements/stats-101](https://github.com/awitherow/learning/blob/master/coursera/machine-learning/week-1/supplements/stats-101.md)`.

## official coursera summart

### Model Representation

To establish notation for future use, we’ll use x<sup>(i)</sup> to denote the “input” variables (living area in this example), also called input features, and y<sup>(i)</sup> to denote the “output” or target variable that we are trying to predict (price). A pair (x<sup>(i)</sup>,y<sup>(i)</sup>) is called a training example, and the dataset that we’ll be using to learn—a list of m training examples (x<sup>(i)</sup>,y<sup>(i)</sup>);i=1,...,m—is called a training set. Note that the superscript “(i)” in the notation is simply an index into the training set, and has nothing to do with exponentiation. We will also use X to denote the space of input values, and Y to denote the space of output values. In this example, X = Y = ℝ.

To describe the supervised learning problem slightly more formally, our goal is, given a training set, to learn a function h : X → Y so that h(x) is a “good” predictor for the corresponding value of y. For historical reasons, this function h is called a hypothesis. Seen pictorially, the process is therefore like this:

![pictoral supervised learning problem](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/H6qTdZmYEeaagxL7xdFKxA_2f0f671110e8f7446bb2b5b2f75a8874_Screenshot-2016-10-23-20.14.58.png?expiry=1492214400000&hmac=VbSYtIBrWAGZoh3Xyx52OA0VDpYSflE9YlrDKN4j9SM)

When the target variable that we’re trying to predict is continuous, such as in our housing example, we call the learning problem a regression problem. When y can take on only a small number of discrete values (such as if, given the living area, we wanted to predict if a dwelling is a house or an apartment, say), we call it a classification problem.