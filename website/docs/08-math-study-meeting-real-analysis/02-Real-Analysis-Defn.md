---
id: '01'
title: '7기 해석학 02주차 정의'
sidebar_label: '7기 해석학 02주차 정의'
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" />

### Defn. 27. 순서관계  

- 반사적이고 반대칭적이며 추이적인 관계를 순서관계라고 부른다. 예를 들어 $\leq$는
$\mathbb{R}$에서의 순서관계이다.

### Defn. 28. 순서집합(ordered set)  

- 순서관계 $\leq$가 주어진 집합 $A$를 순서집합이라고 부르고 $<A,\leq>$로 나타낸다.
혼동할 염려가 없을 때에는 $<A,\leq>$를 그냥 $A$로 나타낸다.

### Defn. 29. 비교 가능(comparable)  

- 순서집합 $A$의 원소 $x,y$에 대하여 $x \leq y$ 또는 $y \leq x$가 성립할 때 '$x$와 
$y$는 비교 가능하다' 라고 말한다.

### Defn. 30. 전순서집합(totally ordered set) 또는 선형순서집합(linearly ordered set)  

- 순서집합 $A$의 임의의 두 원소가 비교 가능 할 때 $A$를 전순서집합 또는 선형순서집합
이라고 부른다.

### Defn. 31. 사전식 순서(lexicological order)  

- 순서집합 $<A,\leq>$, $<B,\leqq>$가 주어졌다고 하자. 이제 집합 $A \times B$에 다음과 
같은 관계를 주자.
$$
(x_1,y_1) \leqslant (x_2,y_2) \Leftrightarrow ((x_1 \leq x_2 \; \wedge \; x_1 \neq x_2) \; \vee \; (x_1 = x_2 \; \wedge \; y_1 \leqq y_2))
$$

- 이러한 순서관계 $\leqslant$를 사전식 순서라고 한다.

### Defn. 32. 사슬(chain) 또는 쇄  

- 순서집합의 전순서부분집합을 사슬 도는 쇄라고 한다.

### Defn. 33. 순서보전함수 또는 증가함수  

- 순서집합 $<A,\leq>$, $<B,\leqq>$에 대하여
$$
\forall x,y \in A : (x \leq y \to f(x) \leq f(y))
$$
를 만족시키는 함수 $f:A \to B$를 순서보존함수 또는 증가함수라고 부른다.

### Defn. 34. 순서동형사상(order-isomorphism), 순서동형(order-isomorphic)  

- 순서보존함수 $f:A \to B$가 있을 때 $f$가 일대일대등이고 $f$와 $f^{-1}$가 모두 
순서를 보존하면 $f$를 순서동형사상이라고 부르고 이 때 '$A$와 $B$는 순서동형이다' 라고 
한다. 두 집합 $A$, $B$가 순서동형인 것을 $A \cong B$로 나타낸다. 순서집합들을 모은 집합족
에서 순서동형관계는 동치관계이다.

### Defn. 35. 최대원소 또는 끝 원소  

- $M$이 순서집합 $B$의 원소이고 $\forall x \in B : x \leq M$이 성립하면 $M$을 $B$의 
최대원소 또는 끝 원소라고 한다.

### Defn. 36. 최소원소 또는 첫 원소  

- $m$이 순서집합 $B$의 원소이고 $\forall x \in B : m \leq x$가 성립하면 $m$을 $B$의 
최소원소 또는 첫 원소라고 한다.

### Defn. 37. 극대원소  

- $b$가 순서집합 $C$의 원소이고 $\forall x \in C : (b \leq x \to b = x)$가 성립하면
$b$를 $C$의 극대원소라고 한다. 위 명제는 '$C$의 원소 중에서 $b$ 이상인 원소는 $b$ 
자신 밖에 없다'라는 의미이다.

### Defn. 38. 극소원소  

- $a$가 순서집합 $C$의 원소이고 $\forall x \in C : (x \leq a \to b = a)$가 성립하면 
$a$를 $C$의 극소원소라고 부른다. 위 명제는 '$C$의 원소 중에서 $a$ 이하인 원소는 
$a$ 자신 밖에 없다' 라는 의미이다. 
- 정의에 의하여 최대원소와 최소원소는 각각 극대원소와 극소원소가 된다.

### Defn. 39. 상계(upper bound)  

- $A$가 순서집합이고 $B \subseteq A$라고 하자. 만약 $u$가 $A$의 원소이고 $\forall x \in B : x \leq u$가 성립하면 $u$를 $B$의 상계라고 부른다.

### Defn. 40. 하계(lower bound)  

- $A$가 순서집합이고 $B \subseteq A$라고 하자. 만약 $v$가 $A$의 원소이고 $\forall x \in B : v \leq x$가 
성립하면 $v$를 $B$의 하계라고 부른다.

### Defn. 41. 위로 유계인 집합  

- 상계를 갖는 집합을 위로 유계인 집합이라고 한다.

### Defn. 42. 아래로 유계인 집합  

- 하계를 갖는 집합을 아래로 유계인 집합이라고 한다.

### Defn. 43. 최소상계(least upper bound) 또는 상한(supremum)  

- 상계 중 가장 작은 것을 최소상계 또는 상한이라고 한다.

### Defn. 44. 최대하계(greatest lower bound) 또는 하한(infimum)  

- 하계 중 가장 큰 것을 최대하계 또는 하한이라고 한다.

### Defn 45. 정렬집합(ordered set)  

- 순서집합 $A$에 대해여, $A$의 공집합이 아닌 모든 부분집합이 단 하나의 극소원소를 가지면 
$A$를 정렬집합 이라고 부른다. 자연순서가 주어진 자연수 집합 $\mathbb{N}$은 정렬집합이다. 
참고로 모든 정렬집합은 전순서집합이지만 그 역은 성립하지 않는다.

### Defn 46. 선택 함수(choice function), 선택 공리(axiom of choice)  

- 집합 $A$에 대하여 $\wp^{*} := \wp(A) \; \setminus \; \{ \emptyset \}$ 이라고 하자. 
조건 $\forall B \in \wp^{*}(A) : r(B) \in B$ 를 만족시키는 함수 $r : \wp^{*}(A) \to A$를 
$A$의 선택함수라고 한다. 이 때 명제 '임의의 집합에 선택 함수가 존재한다'를 선택 공리 라고 한다.

### Defn 47. 정렬 가능하다  

- 집합 $A$에 적절한 순서관계를 정의하여 A가 정렬집합이 되도록 할 수 있으면 'A는 정렬 가능하다'
라고 한다. 정렬 정리에 의하면 임의의 집합은 정렬 가능하다.

### Defn 48. 대등하다  

- 두 집합 $A$, $B$에 대하여 일대일대응 $f:A \to B$가 존재 할 때 'A와 B는 대등하다라고 한다. 
이것을 기호로 $A \approx B$로 나타낸다. 대등하다는 것을 '크기가 같다' 또는 '농도가 같다'
라고 표현하기도 한다.