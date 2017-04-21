# cost functions

## introduction

How do we choose the Θ values in the function

h<sub>Θ</sub>(x) = Θ<sub>0</sub> + Θ<sub>1</sub>x

- Θ<sub>0</sub> is determined where the line crosses y.
- Θ<sub>1</sub> is the "rise/run" value, determinining the data fit.

### how do we choose Θ<sub>0</sub>, Θ<sub>1</sub>?

in linear regression we are trying to solve a minimization problem.

Find the values of Θ<sub>0</sub>, Θ<sub>1</sub>, so that the average of 1/2m * sum of squared errors ((prediction * x<sup>i</sup> ) - actual<sup>i</sup>) squared.

![Image of Minimization Equation](https://github.com/awitherow/learning/blob/master/coursera/machine-learning/week-1/img/min.jpg)

Above is a basic cost function. It allows us to find the minimized hypothesis.

A. the letter `m` stands for the number of items in the set.
B. h<sub>Θ</sub>(x<sup>(i)</sup>) is the prediction
C. x<sup>(i)</sup> is the (example) "size" of the house we are attempting to predict
D. y<sup>(i)</sup> is the (example) "price" of the house sold at that (i).

This is often represented in a much simpler fashion, shown below:

![Image of Simplified Minimization Equation](https://raw.githubusercontent.com/awitherow/learning/master/coursera/machine-learning/week-1/img/min-simp.jpg)

Cost Function, Squared Error Cross Function is the most commonly used function with linear regression problems.

### official coursera summary

#### Cost Function

We can measure the accuracy of our hypothesis function by using a cost function. This takes an average difference (actually a fancier version of an average) of all the results of the hypothesis with inputs from x's and the actual output y's.

![Image of full Minimization Equation](https://raw.githubusercontent.com/awitherow/learning/master/coursera/machine-learning/week-1/img/full-eq.png)

To break it apart, it is 12 x¯ where x¯ is the mean of the squares of hθ(xi)−yi , or the difference between the predicted value and the actual value.

This function is otherwise called the "Squared error function", or "Mean squared error". The mean is halved (12) as a convenience for the computation of the gradient descent, as the derivative term of the square function will cancel out the 12 term. The following image summarizes what the cost function does:

![Image of Lecture notes](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/R2YF5Lj3EeajLxLfjQiSjg_110c901f58043f995a35b31431935290_Screen-Shot-2016-12-02-at-5.23.31-PM.png?expiry=1492905600000&hmac=t_jgZ_Hjs7mmHBsSQAM3g82xWDLmtGv8GzFzqEpp3xM)

## intuition 1

linear regression with one variable.

We attempt to simplify the expressions from before by eliminating the need to calculate Y. Therefore we only have to deal with the singular X variable. Y is then set to 0.

### defining a hypothesis function, figuring its cost function plot.

**hypothesis function** h of x, for fixed value of Θ<sub>1</sub>, it is a function of x.

**cost function** is a function of the parameter Θ<sub>1</sub>, which controls the slope of the straight line.

#### example

once we figure out Θ<sub>1</sub> is 1, we need to calculate J(Θ<sub>1</sub>).

Each of these terms is equal to 0 due to the fact that in our training set, all of the points match directly on the line h<sub>Θ</sub>(x).

Therefore `J(1) = 0`.

When h of x is set to something like 0.5, we then have something similar to the example below.

As you can see, there are gaps between the line (h<sub>Θ</sub>(x)) and the y<sup>(i)</sup> values.

When creating the cost function equation for this, you use the sum of square values of the height of all the values shown above marked as A.

J(0.5) = 1/2m sum ((0.5 - 1)<sup>2</sup> + (1 - 2)<sup>2</sup> + (1.5 - 3)<sup>2</sup>)

As you can see, on each of the three points, the prediction is incrementing by 0.5, while the actual is incrementing by 1.

The equation above simplifies to 1/(2*3) *  3.5/1 = 3.5/6 = around 0.58.

### problem #1

Supposed we have a training set with m=3, how do we find J(0)?

### problem #1, further explaination of examples above

Taking all of these potential J(x) values, we get a graph of what all of the hypothesis are for this problem.

For each value of Θ<sub>1</sub>, there was a different straight line fit, allowing for a different value of J(Θ<sub>1</sub>).

The optimization objective is to choose the value of Θ<sub>1</sub> that minimzes J(Θ<sub>1</sub>).

The optimization path for this problem is J(1). 

#### official coursera summary

##### Cost Function - Intuition I

If we try to think of it in visual terms, our training data set is scattered on the x-y plane. We are trying to make a straight line (defined by hθ(x)) which passes through these scattered data points.

Our objective is to get the best possible line. The best possible line will be such so that the average squared vertical distances of the scattered points from the line will be the least. Ideally, the line should pass through all the points of our training data set. In such a case, the value of J(θ0,θ1) will be 0. The following example shows the ideal situation where we have a cost function of 0.

![Image of Lecture notes](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/_B8TJZtREea33w76dwnDIg_3e3d4433e32478f8df446d0b6da26c27_Screenshot-2016-10-26-00.57.56.png?expiry=1492905600000&hmac=OQ95OwrwAnaRa2ygmdzd0TzwRmVYnj20Jw_VnmuBBE0)

When θ1=1, we get a slope of 1 which goes through every single data point in our model. Conversely, when θ1=0.5, we see the vertical distance from our fit to the data points increase.

![Image of Lecture notes](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/8guexptSEeanbxIMvDC87g_3d86874dfd37b8e3c53c9f6cfa94676c_Screenshot-2016-10-26-01.03.07.png?expiry=1492905600000&hmac=Hjyih4rUIsVDKwygWhbPCFStv5Q9Lh7YBX375J9MmqE)

This increases our cost function to 0.58. Plotting several other points yields to the following graph:

![Image of Lecture notes](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/fph0S5tTEeajtg5TyD0vYA_9b28bdfeb34b2d4914d0b64903735cf1_Screenshot-2016-10-26-01.09.05.png?expiry=1492905600000&hmac=BTLnqMJKV2sfySI6zQECzFLNVxsmBGKeyOm-uogy9dc)

Thus as a goal, we should try to minimize the cost function. In this case, θ1=1 is our global minimum.