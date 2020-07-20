---
id: '01'
title: '03주차 확률론 퀴즈 with R'
sidebar_label: '03주차 확률론 퀴즈 with R'
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" />

### Example 4.26

- Jane and Amy are gambling together. A fair coin is tossed repeatedly. Each time a 
head comes up, Jane wins a dollar from Amy, and each time a tail comes up, Jace loses
a dollar to Amy.
 
- Carry out this experiment 50 times, and estimate the number of times that Jane is ahead 
in these 50 tosses. How much has Jane won or lost?
 
### 문제풀이 (R을 활용한 시뮬레이션)

To generate the 50 tosses, we could write

```{r}
x <- sample(c(1, -1), 50000, replace = T)
# x
```
To calculate the accumulated losses and gains at each toss, write in R

```{r}
winnings <- cumsum(x)
# winnings
```
A plot of this is obtained with

```{r pressure, echo=FALSE}
num <- 1:50000
plot(num, winnings, type = "o",
     xlab = "Toss number", ylab = "Winnings")
abline(0,0)
```

![](https://images.velog.io/images/otter275/post/0279d597-ad3b-4800-9067-7592d7ce74c9/plot.png)

### 문제 1

- 원의 둘레에 5개의 점이 찍혀 있다. 이 5개의 점을 가지고 만들 수 있는 직선과 반직선의 
가능한 갯수를 구하시오.

### 문제 2

- A card is selected at random from an ordinary deck of 52 playing cards. If E is the 
event that the selected card is an ace and F is the event that it is a spade, then 
E and F are independent. This follows because...

### 문제 3

- Suppose that we toss 2 fair dice. Let E denote the event that the sum of the dice 
is 6 and F denote the event that the first die equals 4. Is E independent from F?