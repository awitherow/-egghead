# machine learning introduction

database mining is huge right now in Silicon Valley... web click data, medical records, biology and engineering.

biology
- gene sequencing is done well in machine learning.

applications that cannot be programmed by hand
- autonomous helicotpers is an example, where they figure out how to not crash by learning its self.
- handwriting recognition allows for proper routing of hand written mail.

self customizing programs
- netflix, amazon, spotify are all hooked into learning algorithms.

understanding human learning
- learn about how the human learns, in order to eventually create the AI dream.

Top 12 IT skills, top of the list is Machine Learning!
- recruiters are hot after these guys. huge unfulfilled demand.

# what is machine learning?

what it is, when to use it?

> 1959, Arthur Samuel: Field of study that gives computers the ability to learn without being explicitly programmed.

The computer was able to get so much experience by simulating insane amounts of games.

> 1998, Tom Mitchell: A computer program is said to learn from experience E with respect to some tax T with some performance measure P. If its performance on T, as measured by P, improves with experience E.

In the Arthur Samuel example...

- E: tons of games against its self
- T: task of playing checker
- P: probability of win in next game.

## quiz

In an email program that is checking for spam by checking your inputs. Which is the T in such a program?

- **classify emails as spam or not spam** (T)
- watching you label emails as spam or not spam (E)
- the number or fraction of emails correctly classified. (P)

## algorithm types

- **supervised learning**
- **unsupervised learning**
- reinforcement learning
- recommender systems

We will concentrate heavily on practical advice.

Often machine learning is applied improperly from the beginning. Make sure you put a lot of thinking into how it is implemented from the beginning, or else there is a good chance you will just waste a lot of time or even get poor results that could have been better by tweaking it from the beginning.

## official summary provided by coursera site.

### What is Machine Learning?

Two definitions of Machine Learning are offered. Arthur Samuel described it as: "the field of study that gives computers the ability to learn without being explicitly programmed." This is an older, informal definition.

Tom Mitchell provides a more modern definition: "A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E."

Example: playing checkers.

E = the experience of playing many games of checkers

T = the task of playing checkers.

P = the probability that the program will win the next game.

In general, any machine learning problem can be assigned to one of two broad classifications:

Supervised learning and Unsupervised learning.

# supervised learning

linear functions
second order polynomial, quadratic functions

how do you decide to use a quadratic or linear function in such a learning algoritm?

a supervised learning program accepts a dataset where some of the right data is provided within the dataset.

a **regression problem** predicts continuous valued output.

a **classification problem** expects a discrete valued output (true, false... perhaps even a 3rd option depending on the data set)

How do you store an infinite number of things so that a computer can compute these variables against eachother?
- simple vector machines

## quiz

differientate between a regression problem or a classification problem:

1) large inventory, how many of these will sell over X time?
2) customer account analysis, hacked or not hacked?

- both classification
- 1 classification, 2 regression
- **1 regression, 2 classification**
- both regression

## official summary from coursera

### Supervised Learning

In supervised learning, we are given a data set and already know what our correct output should look like, having the idea that there is a relationship between the input and the output.

Supervised learning problems are categorized into "regression" and "classification" problems. In a regression problem, we are trying to predict results within a continuous output, meaning that we are trying to map input variables to some continuous function. In a classification problem, we are instead trying to predict results in a discrete output. In other words, we are trying to map input variables into discrete categories.

#### Example 1:

Given data about the size of houses on the real estate market, try to predict their price. Price as a function of size is a continuous output, so this is a regression problem.

We could turn this example into a classification problem by instead making our output about whether the house "sells for more or less than the asking price." Here we are classifying the houses based on price into two discrete categories.

#### Example 2:

(a) Regression - Given a picture of a person, we have to predict their age on the basis of the given picture

(b) Classification - Given a patient with a tumor, we have to predict whether the tumor is malignant or benign.

# unsupervised learning

data without "meaning" to be analysed.

- clustering algorithms

used for measuring gene expression. individuals are grouped in clusters based on the genes expressed without understanding anything about the individuals.

used in:
- organization of computing clusters
- social network analysis
- market segmentation
- astronomical data analysis

## Cocktail party problem algorithm

With two sources of output, and two sources of input, measure and separate the input based on which one is "nearer" or higher in "frequency?" to the microphone.

```
[W,s,v] = svd((repmat(sum(x.*x,1),size(x,1),1).*x)*x')
```

Using Octave or Matlab, many of these algorithms become similarly short.

### quiz

Which of these problems would be addressed using an unsupervised learning algorithm?

- given spam/not spam email, learn a spam filter
- **given a set of articles, group them into related clusters**
- **given customer data db, discover market segments and cluster customers**
- given a dataset of patients with diabetes/not, classifify new patients whether they have it or not.

## official coursera summary

### Unsupervised Learning

Unsupervised learning allows us to approach problems with little or no idea what our results should look like. We can derive structure from data where we don't necessarily know the effect of the variables.

We can derive this structure by clustering the data based on relationships among the variables in the data.

With unsupervised learning there is no feedback based on the prediction results.

Example:

Clustering: Take a collection of 1,000,000 different genes, and find a way to automatically group these genes into groups that are somehow similar or related by different variables, such as lifespan, location, roles, and so on.

Non-clustering: The "Cocktail Party Algorithm", allows you to find structure in a chaotic environment. (i.e. identifying individual voices and music from a mesh of sounds at a [cocktail party](https://en.wikipedia.org/wiki/Cocktail_party_effect)).
