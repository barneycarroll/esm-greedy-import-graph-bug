# ESM greedy import graph bug

The first pass import / export parse-&-load phase of module import graph resolution ought to foreclose the loading and execution of exported modules that are not imported.

Running the code from `index.js` (Node) or `index.html` (browser) ought in my mind to follow the process:

1. Entry point imports named module `A` from `./many.js`
2. `./many.js` exports 2 references, `A` & `B`
3. Import `A` from `./A.js`
4. Dependency graph complete, execute & resolve from leaf to root:
5. Execute `./A.js`, resolving dependency `A` for `./many.js` & index
6. Execute `./many.js`
7. Execute index with fully resolved dependency graph 

In practice, `./B.js` is imported and its contents executed after `./A.js` & before `./many.js` despite its exports being unreachable (`./many.js` attempts to query it)

To test:

Node:
```
node index.js
```

Browser:
```
npm run serve
```