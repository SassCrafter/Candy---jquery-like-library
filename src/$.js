function qsa(selector, context) {
    if (typeof selector !== 'string') {
        return [selector]
    }

    const a = [];
    const items = context.querySelectorAll(selector);
    items.forEach(item => {
        a.push(item);
    })
    return a;
}

function $(selector, context) {
    let arr = [];
    if (!context && selector instanceof Candy ) {
        return [selector];
    }
    if (!selector) {
        return new Candy(arr);
    }
    if (typeof selector === 'string') {
        arr = qsa(selector.trim(), context || document);
    } else if (
        selector.nodeType ||
        selector === document ||
        selector === window) {
            arr.push(selector);
    } else if (Array.isArray(selector)) {
        return new Candy(selector);
    }
    return new Candy(arr);
}


