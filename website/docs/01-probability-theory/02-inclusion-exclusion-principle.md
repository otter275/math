---
title: "포함배제의 원리 증명"
id: '02'
sidebar_label: 포함배제의 원리 증명
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" />

### 이번 포스팅에서는 포함배제의 원리에 대해서 증명 해 보겠습니다.

### 포함배제의 원리의 정의는 다음과 같습니다.
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

- 포함배제의 원리는 수학적 귀납법을 통해서 증명 할 수 있는데요. 이번 포스팅 에서는 n=2 인 base case 에 대해서 증명 해 보겠습니다.

### Lemma $1$

- Claim: $A \cup(B \setminus A) = A \cup B$

$$\begin{aligned} A \cup(B \setminus A) &= A \cup(B \cap A') \\ &= (A \cup B) \cap (A \cup A') \\ &= (A \cup B) \cap (A' \cap A)' \\ &= (A \cup B) \cap (\varnothing)' \\ &= (A \cup B) \cap \mathbb U \\ &= A \cup B \;\;\;\; \blacksquare \end{aligned}$$

### Lemma $2$

- Claim: $A \cap(B \setminus A) = \varnothing$

$$\begin{aligned} A \cap(B \setminus A) &= A \cap(B \cap A') \\ &= (A \cap B) \cap (A \cap A') \\ &= (A \cap B) \cap \varnothing \\ &= \varnothing \;\;\;\; \blacksquare \end{aligned}$$

### Lemma $3$

- Claim: $(A \cap B) \cup (B \setminus A) = B$

$$\begin{aligned} (A \cap B) \cup (B \setminus A) &= (A \cap B) \cup (B \cap A') \\ &= B \cap (A \cup A') \\ &= B \cap (A' \cap A)' \\ &= B \cap (\varnothing)' \\ &= B \cap \mathbb U \\ &= B \end{aligned}$$

### Lemma $4$

- Claim: $(A \cap B) \cap (B \setminus A) = \varnothing$

$$\begin{aligned} (A \cap B) \cap (B \setminus A) &= (A \cap B) \cap (B \cap A') \\ &= B \cap (A \cap A') \\ &= B \cap \varnothing \\ &= \varnothing \end{aligned}$$

### Fact from Lemma $3$ and Lemma $4$
$$P(B)=P(A \cap B) + P(B-A)$$

$$P(B-A)=P(B)-P(A \cap B)$$

### 증명

$$\begin{aligned} P(A \cup B) &= A \cup(B \setminus A) \\ &= P(A) + P(B \setminus A) \\ &= P(A) + P(B) - P(A \cap B) \;\;\;\; \blacksquare \end{aligned}$$