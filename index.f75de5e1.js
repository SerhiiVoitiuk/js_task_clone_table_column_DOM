"use strict";
const row = [
    ...document.querySelectorAll("tr")
];
row.forEach((tr)=>{
    const cloneElement = tr.children[1].cloneNode(true);
    const lastElement = tr.lastElementChild;
    lastElement.before(cloneElement);
});

//# sourceMappingURL=index.f75de5e1.js.map
