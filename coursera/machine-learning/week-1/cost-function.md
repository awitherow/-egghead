# cost function.

How do we choose the Θ values in the function

h<sub>Θ</sub>(x) = Θ<sub>0</sub> + Θ<sub>1</sub>x

- Θ<sub>0</sub> is determined where the line crosses y.
- Θ<sub>1</sub> is the "rise/run" value, determinining the data fit.

## how do we choose Θ<sub>0</sub>, Θ<sub>1</sub>?

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

## official coursera summary

### Cost Function

We can measure the accuracy of our hypothesis function by using a cost function. This takes an average difference (actually a fancier version of an average) of all the results of the hypothesis with inputs from x's and the actual output y's.

![Image of full Minimization Equation](https://raw.githubusercontent.com/awitherow/learning/master/coursera/machine-learning/week-1/img/full-eq.png)

To break it apart, it is 12 x¯ where x¯ is the mean of the squares of hθ(xi)−yi , or the difference between the predicted value and the actual value.

This function is otherwise called the "Squared error function", or "Mean squared error". The mean is halved (12) as a convenience for the computation of the gradient descent, as the derivative term of the square function will cancel out the 12 term. The following image summarizes what the cost function does:

![Image of Lecture notes](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/R2YF5Lj3EeajLxLfjQiSjg_110c901f58043f995a35b31431935290_Screen-Shot-2016-12-02-at-5.23.31-PM.png?expiry=1492905600000&hmac=t_jgZ_Hjs7mmHBsSQAM3g82xWDLmtGv8GzFzqEpp3xM)