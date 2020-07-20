---
id: '03'
title: '해석 입문 03주차 정의'
sidebar_label: '7기 해석학 03주차'
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" />

**Defn. 49.** 이항연산  

- $E$가 집합이고 $\phi$가 $E^2$으로부터 $E$로의 함수일 때 $\phi$를 $E$ 위에서의 이항연산 
이라고 부른다. 예를 들면 우리가 일상적으로 사용하는 덧셈, 뺄셈, 곱셈은 모두 실수 집합 
$\mathbb{R}$에서의 이항연산이다. 
- $\phi$가 $E$위에서의 이항연산이고 $a$와 $b$가 $E$의 원소일 때, 보통 $\phi (a,b)=c$를 $a \; \phi \; b=c$로 나타낸다. 예를 들면 '2와 3의 합은 
5이다'를 함수의 표기법대로 나타내면 $+(2,3)=5$이지만, 보통은 $2+3=5$로 나타낸다.


<br/>
<br/>

**Defn. 50.** 0을 제외한 집합  

- $E$가 수의 집합일 때 $E$에서 0을 제외한 집합을 $E^*$로 나타낸다. 이를테면 
$\mathbb{R^*} = \mathbb{R} \; \setminus \; \{0\}$이다.


<br/>
<br/>

**Defn. 51.** 항등원, 역원  

- $0을$ 덧셈에 대한 항등원이라고 하며 $1$을 곱셈에 대한 항등원이라고 한다.  
- $x+x^{'}=0$일 때 $x^{'}$을 $x$의 덧셈에 대한 역원 이라고 부르며 $-x$로 나타낸다.  
- $xx^{'}=1$일 때 $x^{'}$을 $x$의 곱셈에 대한 역원 이라고 하며 $x^{-1}$ 또는 $\frac{1}{x}$ 
또는 $1/x$로 나타낸다. 곱셈에 대한 역원을 간단히 역수라고 부르기도 한다.  
- $x+(-y)$를 $x-y$로 나타낸다. 또한 $x \cdot \frac{1}{y}$을 $x/y$ 또는 $\frac{x}{y}$로 나타낸다.


<br/>
<br/>

**Defn. 52.** 등호  

- 등호는 항상 동치관계의 조건을 만족시키는 것으로 약속한다. 즉, 등호는 반사적이고 대칭적이며 
추이적인 관계이다. 또한 $a=b$는 $a$와 $b$가 집합의 원소로서 동일함을 의미한다. 즉, $a=b$와 
$\{a\}=\{b\}$는 동치이다.


<br/>
<br/>

**실수계의 순서공리** Order Axioms  

- 실수 집합 $\mathbb{R}$에 관계 $<$가 주어져 있으며(실수 집합은 전순서집합), 
이 관계는 다음 네 개의 법칙을 모두 만족시킨다.
<br/>

  1. 임의의 실수 $x,y$에 대해여 $x<y$, $x=y$, $y<x$ 중 하나가 성립한다. 그러나 셋 중 둘 이상이 
동시에 성립하지는 않는다. (삼자택일법칙)  
  2. 실수 $x,y,z$에 대하여 $x<y$이고 $y<z$이면 $x<z$이다. (추이법칙)  
  3. 실수 $x,y,z$에 대하여 $x<y$이면 $x+z<y+z$이다. (평행이동법칙)  
  4. 실수 $x,y,z$에 대하여 $x<y$이고 $0<z$이면 $xz<yz$이다.


<br/>
<br/>

**Defn 54.** 부등호  

- 부등호 $\leq$는 $\mathbb{R}$에서의 전순서관계이다.


<br/>
<br/>

**Defn 55.** 절댓값  

- 수직선에서 실수 $x$가 원점으로부터 떨어진 거리를 $x$의 절댓값(absolute value)이라고 부르며
$|x|$로 나타낸다. 즉, 실수 $x$에 대하여

$$
|x|= 
\begin{cases}
x & \text{if} \;\; x \geq 0 \\
-x & \text{if} \;\; x < 0
\end{cases}
$$
이다. 

- $x$를 1차원 벡터로 생각할 때에는 $x$의 절댓값을 $||x||$로 나타낸다.


<br/>
<br/>

**정리** 삼각부등식(triangle inequality)  

- 실수 $x,y,z$에 대하여 $||x|-|y|| \leq |x+y| \leq |x|+|y|$가 성립한다.


<br/>
<br/>

**Defn 57.** 구간  

- 실수 $a,b$에 대하여 다음과 같이 정의한다.  
<br/>

  1. $(a,b) := \{x \in \mathbb{R} \; | \; a < x < b \}$ 열린구간  
  2. $[a,b] := \{x \in \mathbb{R} \; | \; a \leq x \leq b \}$ 닫힌구간  
  3. $[a,b) := \{x \in \mathbb{R} \; | \; a \leq x < b \}$ 반단힌구간  
  4. $(a,b] := \{x \in \mathbb{R} \; | \; a < x \leq b \}$ 반닫힌구간  
  5. $(- \infty ,b) := \{x \in \mathbb{R} \; | \; x < b \}$ 열린구간  
  6. $(a, \infty) := \{x \in \mathbb{R} \; | \; a < x \}$ 열린구간  
  7. $(- \infty, b] := \{x \in \mathbb{R} \; | \; x \leq b \}$ 반닫힌구간  
  8. $[a, \infty) := \{x \in \mathbb{R} \; | \; a \leq x \}$ 반닫힌구간  
  9. $(- \infty, \infty) := \mathbb{R}$ 열린구간


<br/>
<br/>

**Defn 58.** 자연수  

- 실수 집합의 부분집합 $E$가 두 조건  
<br/>

  1. $1 \in E$  
  2. $n \in E \implies n+1 \in E$  
를 모두 만족시킬 때 $E$를 귀납적 집합이라고 한다. 실수 집합의 부분집합 중에서 귀납적인 
집합들을 모두 교집합한 집합을 자연수 집합이라고 부르며 $\mathbb{N}$으로 나타낸다. 
$\mathbb{N}$의 원소를 자연수라고 한다.


<br/>
<br/>

**페아노 공리계** 자연수 공리  

1. $1$ belongs to $\mathbb{N}$  
2. If $n$ belongs to $\mathbb{N}$, then its successor $n+1$ belongs to $\mathbb{N}$  
3. $1$ is not the successor of any element in $\mathbb{N}$  
4. If $n$ and m in $\mathbb{N}$ have the same successor, then $n=m$  
5. A subset of $\mathbb{N}$ which contains $1$, and which contains $n+1$ whenever it contains $n$, must equal $\mathbb{N}$.


<br/>
<br/>

**Defn 59.** 정수, 유리수, 무리수  

1. 집합 $\mathbb{Z}:=(-\mathbb{N})  \cup  \{0\} \; \cup \; \mathbb{N})$을 정수 집합이라고 하며, 
$\mathbb{Z}$의 원소를 정수라고 한다.  
2. 집합 $\mathbb{Q}:=\{p/q \; | \; p \in \mathbb{Z}, \; q \in \mathbb{Z^{*}} \}$를 유리수 집합
이라고 하며, $\mathbb{Q}$의 원소를 유리수 라고 한다.  
3. 유리수가 아닌 실수를 무리수 라고 한다.


<br/>
<br/>

**Defn 60.** 명제함수  
- 참 또는 거짓을 값으로 갖는 함수를 명제함수라고 한다.


<br/>
<br/>

**정리** 수학적 귀납법  

- 정의역이 자연수 집합인 명제 $p$가 두 조건
<br/>

  1. $p(1)$이 참이다.  
  2. $p(k)$가 참이라고 가정하면 $p(k+1)$도 참이다.  
를 모두 만족시키면, 임의의 자연수 $n$에 대하여 $p(n)$은 참이다.
여기서 $p(k)$는 귀납적 가정이라고 한다.
어떠한 명제가 임의의 자연수에 대하여 참임을 보일 때에는 수학적 귀납법을 사용 하면 유용하게 
증명할 수 있다.


<br/>
<br/>

**Defn 61.** 베르누이 부등식  

- $x \geq -1$ 일 때, 임의의 자연수 $n$에 대하여 다음의 부등식이 성립한다.
- $(1+x)^n \geq 1+nx$ 이 부등식을 베르누이 부등식이라고 한다.


<br/>
<br/>

**정리** 자연수 집합의 정렬성  

- 자연수 집합 $\mathbb{N}$은 순서관계 $\leq$를 가진 정렬집합이다.