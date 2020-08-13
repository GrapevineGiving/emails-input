var counter = function (start) {
    if (start === void 0) { start = 1; }
    var count = start;
    return function () { return count++; };
};
export function store(subscribe) {
    // simple uid generator;
    var uid = counter();
    var data = {};
    var get = function () { return Object.keys(data).map(function (id) { return data[id]; }); };
    // pushes an item to the store ans returns the remover
    function push(email) {
        var id = uid();
        data[id] = email;
        subscribe(get());
        return function remove() {
            delete data[id];
            subscribe(get());
        };
    }
    // runs subscribe after first tick
    setTimeout(function () { return subscribe(get()); }, 0);
    return {
        push: push,
        get: get,
    };
}
