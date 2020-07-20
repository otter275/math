---
id: '00'
title: '7기 해석학 01주차 정의'
sidebar_label: '7기 해석학 01주차 정의'
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" />

### Defn. 1. 순서관계  

- 반사적이고 반대칭적이며 추이적인 관계를 순서관계라고 한다.
  - 반사적: A relation $R$ on a set $A$ is reflexive if for all $a \in A$, $aRa$ holds.
  - 반대칭적: A relation $R$ on a set $A$ is antisymmetric if $aRb$ and $bRa$ implies that $a=b$, where $a,b \in A$.
  - 추이적: A relation $R$ on a set $A$ is transitive if $aRb$ and $bRc$ implies that $aRc$, where $a,b,c \in A$.
  
### Defn. 2. 순서집합  

- 집합 A상에 순서관계 $≤$가 주어진 경우 $A$를 순서집합이라 하고, 이를 $(A, ≤)$로 나타낸다. (여기서 모든 원소들이 순서관계를 가져야 하는 것은 아니다.)

### Defn. 3. 극대원소와 극소원소

- $A$가 순서집합이라 할 때 $\forall x \in A, x≥a ⇒ x=a$ 를 만족하는 $A$의 원소 $a$를 극대원소, $\forall x \in A, x≤b ⇒ x=b$ 를 만족하는 $A$의 원소 $b$를 극소원소라 한다.
- 극대원소와 극소원소는 유일하지 않다.  
- ex> 멱집합 $P(X)$에서 $\emptyset$, $X$

### Defn. 4. 최대원소와 최소원소  

- $A$가 순서집합이라 할 때 $\forall x \in A, x≤a$ 를 만족하는 $A$의 원소 $a$를 최대원소, 
$\forall x \in A, x≥b$ 를 만족하는 $A$의 원소 $b$를 최소원소라 한다.

### Defn. 5. 상계와 하계  

- B가 순서집합 A의 부분집합이라 할 때 $\forall$ $x \in B$, $x≤a$ 인 $a \in A$를 $A$에서 $B$의 상계, ($B$의 원소일 수도, 아닐수도 있다.) $\forall x \in B, x≥b인 b \in A$를 $A$에서 $B$의 하계라 한다. ($B$의 원소일 수도, 아닐수도 있다.)

### Defn. 6. 상한과 하한  

- 순서집합 A의 부분집합 B에 대하여 B의 상계(하계)들의 집합이 최소(최대)원소를 가질 때 이 원소를 $A$에서 $B$의 상한(하한)이라 하고, sub$B$ (inf$B$)로 나타낸다.  
- ex> $A=[0,1) \subset \mathbb{R}$ 에서 $0$, $1$

### Defn. 7. 첨수, 첨수집합, 집합족, 첨수족  

- 첨수집합: $I=\{1,2,3\}$
- 집합족: $\{A_i|i \in I\}$ 여기서 $i$는 첨수, 집합족은 집합들을 원소로 갖는 집합을 말하며 첨수가 붙은 집합들을 원소로 가진 집합족은 첨수족이라고 한다.

### Defn. 8. 집합족에 대한 합집합과 교집합  

- 집합족 $F=\{A_i|i \in I \}$에 대하여 합집합: $\bigcup$ $F$ $:=$ $\bigcup_{S \in F} S$ $:=$ $\bigcup_{i \in I} A_i$ $:=$ $\{x|\exists i \in I : x \in A_i \}$ 교집합: $\bigcap F := \bigcap_{S \in F} S:= \bigcap_{i \in I} A_i := \{x|\forall i \in I : x \in A_i \}$

### Defn. 9. 데카르트 곱  

- 두 집합 A와 B의 데카르트 곱을 다음과 같이 정의한다. $A \times B := \{(x,y)|x \in A \wedge y \in B \}$ 같은 방법으로 집합 $A_1, A_2, \dots , A_n$의 데카르크 곱을 $A_1 \times A_2 \times \cdots \times A_n := \{(x_1, x_2, \dots , x_n) | \forall i : x_i \in A_i \}$로 정의한다.
- 이것을 간단하게 $\Pi_{i=1}^{n} A_i = A_1 \times A_2 \times \cdots \times A_n$으로 나태낸다. 
- 특히 $A^n$을 다음과 같이 정의한다. $A^n := \Pi_{i=1}^{n} A = A \times A \times \cdots \times A$ (n times)

### Defn. 10. 관계  

- 두 집합 $A$, $B$에 대하여 $A \times B$ 의 부분집합 $R$을 $A$로 부터 $B$로의 관계 라고 부른다. 보통 $(a,b) \in R$을 $aRb$로 나타내며 '$a$와 $b$는 $R$로 관계가 있다.' 라고 읽는다.
- $A$로부터 $B$로의 관계가 항상 특정한 규칙을 가지는 것은 아니다. $A \times B$의 임의의 부분집합은 $A$로 부터 $B$로의 관계가 된다.

### Defn. 11. $R$의 공역, 정의역, 치역  

- $R$이 $A$로 부터 $B$로의 관계인 것을 $R:A→B$로 나타낸다. 이 때 $B$를 $R$의 공역이라고 한다. 또한 $A$로 부터 $B$로의 관계 $R$에 대해여 다음과 같이 정의 한다.
- $R$의 정의역: dom$R$ $:= \{x \in A| \exists y \in B : (x,y) \in R \}$
- $R$의 치역: ran$R$ := im$R$ $:= \{y \in B | \exists x \in A : (x,y) \in R \}$

### Defn. 12.** $R$의 역관계  

- $R$이 $A$로 부터 $B$로의 관계일 때, $R$의 역관계를 $R^{-1} := \{(y,x) \in B \times A | (x,y) \in R \}$로 정의한다. 이 때 $R^{-1}$는 $B$로부터 $A$로의 관계가 된다. 또한 $R$의 정의역은 $R^{-1}$의 치역이 되며, $R$의 치역은 $R^{-1}$의 정의역이 된다.

### Defn. 13.** $R$의 합성관계  

- 세 집합 $A, B, C$와 두 관계 $R:A→B, S:B→C$에 대하여 $R$과 $S$의 합성관계를 $S \circ R := \{(x,z)| \exists y \in B : (x,y) \in R \wedge (y,z) \in S \}$로 정의 한다. 이 때 $S \circ R$은 $A$로 부터 $C$로의 관계가 된다.

### Defn. 14.** 반사적, 대칭적, 추이적  

- $A$가 집합이고 $R$이 $A$에서의 관계일 때, 다음과 같이 정의한다.
  - $R$이 반사적(reflexive)이라는 것은 $\forall x \in A : xRx$를 만족시키는 것이다.
  - $R$이 대칭적(symmetric)이라는 것은 $xRy \Leftrightarrow yRx$를 만족시키는 것이다.
  - $R$이 추이적(transitive)이라는 것은 $xRy \wedge yRz ⇒ xRz$를 만족시키는 것이다.
- 반사적이고 대칭적이며 추이적인 관계를 동치관계(equivalent relation)라고 부른다.

### Defn. 15. 대각관계  

- 공집합이 아닌 집합 $A$에 대하여 $\Delta_A = \{(x,y) \in A \times A | x=y \}$는 $A$에서의 가장 작은 동치 관계이다. 이 관계를 $A$에서의 대각관계라고 부른다. 
- 한편 $A \times A$는 그 자체로 $A$에서의 동치 관계 이며, $A$에서 가장 큰 동치관계이다.

### Defn. 16. 동치류, 상집합  

- $R$이 $A$에서의 동치관계일 때 $x \in A$의 동치류(equivalence class)를 $[x]_R := \{y \in A | (x,y) \in R \}$로 정의한다. 즉, $x$의 동치류란 $R$에 의해 $x$와 관계가 있는 원소들을 모두 모은 것이다. 
- $A$에서의 동치관계 $R$에 의한 동치류들을 모두 모은 집합을 $R$에 의한 $A$의 상집합(quotient set)이라고 부르며 $A/R$로 나타낸다.

### Defn. 17.** 분할  

- 집합 $A$의 부분집합들의 모임 $P$가 두 조건
  1. $P$의 원소들은 공집합이 아니고 쌍마다 서로소이다. 
  2. $P$의 모든 원소의 합집합은 $A$가 된다.
- 위의 두 가지 조건을 모두 만족시키면 $P$를 $A$의 분할(partition)이라고 부른다.

### Defn. 18. 함수  

- 집합 $A$의 각 원소를 $B$에 하나씩 대응시키는 관계를 $A$로부터 $B$로의 함수라고 부른다. 즉, $A$로부터 $B$로의 관계 $f$가 두 조건 $\forall$ $x \in A$  $\exists$ $y$ $\in B$ $: (x,y) \in f$, $((x,y)) \in f \wedge (x,z) \in f) ⇒ y=z$를 모두 만족시키면 $f$를 $A$로부터 $B$로의 함수라고 부른다. 그리고 $(x,y) \in f$ 인 것을 $y=f(x)$로 나타낸다. 
- 함수 $f$에 의해 $x$가 $y$에 대응되는 것을 $f:x \mapsto y$ 로 나타낸다.
- 즉, $f$가 $A$로부터 $B$로의 함수라는 것은 $f$에 의하여 $A$의 모든 원소가 각각 $B$의 원소에 하나씩 대응되는 것을 의미한다.

### Defn. 19. 항등함수  

- 두 집합 $A$, $B$에 대하여 $A \subseteq B$ 라고 하자. 이 때 $f= \{(x,y) \in A \times B | x=y \}$로 정의된 관계 $f$는 $A$로 부터 $B$로의 함수가 된다. 이처럼 $\forall x \in A : f(x) = x$를 만족시키는 함수 $f$를 $A$에서의 항등함수라고 부르며 보통 $I_A$로 나타낸다.

### Defn. 20. 상수함수  

- $A$, $B$가 집합이고 $c \in B$라고 하자. 이 때 $f=A \times \{c\} = \{(x,y) \in A \times B | y=c \}$로 정의된 관계 $f$는 $A$로부터 $B$로의 함수가 된다. 이처럼 $\exists c \in B \; \forall x \in A : f(x) = c$를 만족시키는 함수 $f$를 상수함수라고 부르며 보통 $K_c$로 나타낸다.

### Defn. 21. 제한함수와 확장함수  

- $f$가 $A$로 부터 $B$로의 함수라고 하자. $S \subseteq A$ 일 때 $f|_S=\{(x,y)|x \in S \wedge y=f(x) \}$로 정의된 $f|_S$는 $S$로부터 $B$로의 함수가 된다. 이러한 함수를 $f$의 정의역을 $S$로 제한한 함수라고 한다. 그리고 이 것을 줄여서 간단히 제한함수라고 부른다. 반대로 $f$를 $f|_S$의 확장함수라고 한다.

### Defn. 22. 단사함수, 전사함수, 전단사함수  

- 함수 $f:A→B$에 대해여 $\forall x_1 \in A \; \forall x_2 \in A : (f(x_1)=f(x_2) → x_1 = x_2)$이면 f를 단사함수라고 한다. 한편 공역과 치역이 같은 함수를 전사함수라고 한다. 그리고 단사이면서 전사인함수를 전단사함수라고 한다.

### Defn. 23.** 역함수  

- 함수 $f:A→B$가 단사이면 역관계 $f^{-1}$는 $B$로부터 $A$로의 함수가 된다. 이 함수 $f^{-1}$를 $f$의 역함수라고 부른다. 즉, $y=f(x) \Leftrightarrow x=f^{-1}(y)$이다. 참고로 $f$의 역함수의 역함수는 $f$자신이 된다.

### Defn. 24.** 합성함수  

- 두 함수 $f:A→B$와 $g:B→C$에 대하여 $g \circ f := \{(x,z)|\exists y \in B : (y=f(x) \wedge z = g(y)) \}$를 $f$와 $g$의 합성함수라고 한다.

### Defn. 25.** 상과 역상  

- 함수 $f:A→B$가 주어져 있고, $S \subseteq A$,  $T \subseteq B$ 라고 하자. 이 때 $f(S) := \{y \in B | \exists x \in S : y=f(x) \}$, $f^{-1}(T) := \{x \in A| \exists y \in T : y=f(x) \}$로 정의한다. 
- $f(S)$를 $f$에 의한 $S$의 상, $f^{-1}(T)$를 $f$에 의한 $T$의 역상이라고 부른다.

### Defn. 26.** 데카르트 곱  

- 두 집합 $A$, $B$에 대하여, 정의역이 $A$이고 공역이 $B$인 모든 함수들의 모임을 $B^A$로 나타낸다. 그리고 집합족 $\{$${A_i|i \in I}$$\}$와 $A=$ $\bigcup_{i \in I} A_i$에 대하여 $A_i$의 데카르트 곱을 $\Pi_{i \in I} A_i := \{f \in A^I | \forall i \in I : f(i) \in A_i \}$로 정의한다.
- 즉, 데카르트 곱 $\Pi_{i \in I} A_i$는 정의역이 $I$이고 공역이 $\bigcup_{i \in I} A_i$인 함수들 중에서 각 $i \in I$를 $A_i$의 원소에 대응시키는 함수들의 모임이다.