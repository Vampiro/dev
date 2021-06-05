---
id: erc20
title: ERC20
---

# Interface

```js
function totalSupply() public constant returns (uint);
function balanceOf(address tokenOwner) public constant returns (uint balance);
function allowance(address tokenOwner, address spender) public constant returns (uint remaining);
function transfer(address to, uint tokens) public returns (bool success);
function approve(address spender, uint tokens) public returns (bool success);
function transferFrom(address from, address to, uint tokens) public returns (bool success);

event Transfer(address indexed from, address indexed to, uint tokens);
event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
```

Explanation of each method:

- https://en.bitcoinwiki.org/wiki/ERC20
- https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol

# Code Notes

- You cannot get "existing" keys for a mapping. You'd have to store them separately.
- `public` contract variables automatically have a getter created for them, but not a setter.
- When a `require` condition is not met, all prior transactions are undone.
