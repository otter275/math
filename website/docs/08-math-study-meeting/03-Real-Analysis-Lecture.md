---
id: '04'
title: '해석 입문 03주차 강의 자료'
sidebar_label: '7기 해석학 03주차'
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" />

**Note 1.11.**

These include the follwoing, where a and b are elements in an ordered field (like $\mathbb{R}$):

1. $|a| \geq 0$, with equality if and only if $a = 0$.  
2. $|a| = |-a|$.  
3. $-|a| \leq a \leq |a|$.  
4. $a \cdot b = |a| \cdot |b|$.  
5. $1/|a|=|1/a|$, if $a \neq 0$.
6. $|a/b|=|a|/|b|$, if $b \neq 0$.
7. $|a| \leq b$ if and only if $-b \leq a \leq b$.
8. The triangle inequality: $|a+b| \leq |a| + |b|$.
The reverse triangle inequality: $||a|-|b|| \leq |a-b|$.
- $\sqrt{a^2} = |a|$, $\sqrt{a}^{2} = a$


<br/>

**Prop. 1.12** $(|a| \leq b \;\; \text{iff} \; -b \leq a \leq b)$.

- If $\mathbb{F}$ is an ordered field (like $\mathbb{R}$) and $a,b \in \mathbb{F}$, then

$$
(|a| \leq b \;\; \text{if and only if} \; -b \leq a \leq b)
$$


<br/>

**Thm. 1.13** (The triangle inequality)

- If $\mathbb{F}$ is an ordered field (like $\mathbb{R}$) and if $x,y \in \mathbb{F}$, then
$$
|x+y| \leq |x|+|y|
$$

<br/>

**Corollary 1.14** (The reverse triangle inequality).

- Assume that $\mathbb{F}$ is an ordered field (like $\mathbb{R}$) and $x,y \in \mathbb{F}$. 
Then
$$
||x|-|y|| \leq |x-y|
$$

<br/>

**Corollary 1.15** (Triangle inequality corollaries).

- For both of the following, assume that $\mathbb{F}$ is an ordered field (like $\mathbb{R}$) 
and $x,y \in \mathbb{F}$.
- $|x-y| \leq |x|+|y|$.
  - Proof: Replace y with -y in the triangle inequality.
- $|x+y| \geq ||x|-|y||$.
  - Proof: Replace y with -y in the reverse triangle inequality.


<br/>

**Defn. 1.16.** 
- Let $\mathbb{F}$ be an ordered field. Then define the distance function 
$d: \mathbb{F} \times \mathbb{F} \to \mathbb{F}$ by
$$
d(x,y)=|x-y|
$$

<br/>

**Defn. 333**

- The length (or norm) of $v$ is the nonnegative scalar $||v||$ defined by
$$
||v||= \sqrt{v \cdot v} = \sqrt{v_1^2 + v_2^2 + \cdots + v_n^2}, \; \text{and} \; ||v||^2=v \cdot v
$$

<br/>

**Defn. L.P.335**

- For $u$ and $v$ in $\mathbb{R}^n$, the distance between $u$ and $v$, written as dist$(u,v)$, 
is the length of the vector $u-v$. That is,
$$
\text{dist}(u,v)=||u-v||
$$


<br/>

**Example 1 E.P.3 **

- Prove $1+2+ \cdots + n = \frac{1}{2}n(n+1)$ for positive integer n


<br/>

**Example 2 E.P.4**

- All numbers of the form $5^n - 4^n - 1$ are divisible by 16.


<br/>

**Example 3 E.P.4**

- Show $|\text{sin}nx| \leq n|\text{sin}x|$ for all positive integers $n$ and all 
real numbers $x$


<br/>

**Result 6.9 M.P.152**

- For every nonnegative integer $n$, $2^n > n$.


<br/>

**Result 6.12 M.P.154**

- For every nonnegative integer $n$, $9|(4^n - 1)$.


<br/>

**예제 2.3.5 P.48**

- $x \geq -1$일 때, 임의의 자연수 n에 대하여 다음 부등식이 성립함을 증명하여라.
$$
(1+x)^n \geq 1+nx
$$