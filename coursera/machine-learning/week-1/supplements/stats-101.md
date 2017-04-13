# Statistics 101: Simple Linear Regression, The Very Basics

[YouTube Video](https://www.youtube.com/watch?v=ZkjP5RJLQF4).

This video introduces the theory on good regression models.

## Real World Problem

Small restaurant owner, concerned with tips for service.

Develop a model to predict the amount of tip to expect for any given bill amount.

Meal | Tip ($) | residual | residual<sup>2</sup> | 
--- | --- | --- | --- | 
1 | 5 | -5 | 25 | 
2 | 17 | +7 | 49 | 
3 | 11 | +1 | 1 | 
4 | 8 | -2| 4 | 
5 | 14 | +4| 16 | 
6 | 5 | -5 | 25 | 

distance from the mean of the chart is called a residual(error).

Residuals always add up to zero!

Why do we square them?
1) it makes them all positive
2) emphasizes larger deviations.

Adding the residiuals, to get the **sum of squared errors**, we get **120*.

**Sum of squared errors** are hugely important in all of statistics.

The goal of simple linear regression is to create a linear model that minimizes the sum of the squares of the residuals/errors (SSE)

If our regression model is significant, it will "eat up" much of the raw SSE we had when we assumed (like this problem) that the independent variable did not even exist. The regression line will/should literally "fit" the data better. It will minimize the residuals.

### visual example

![tips for service visual](https://github.com/awitherow/learning/blob/master/coursera/machine-learning/week-1/img/tips-for-service.jpg?raw=true)

## Review

- Simple linear regression is a comparison of two models
    - one is where the independent does not even exist
    - other uses the best fit regression line.
        - used to compare to the first one
- if only one variable, the best prediction of the mean of that dependent variable.
- the diff between the best fit line and the observed value is the residual.
- residuals are squared to generate sum of residuals..errors
- simple linear regression is designed to find the best fitting line through the data that minimizes the SSE.