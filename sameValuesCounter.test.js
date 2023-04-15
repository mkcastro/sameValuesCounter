function sameValuesCounter(array) {
    let output = [];
    let temp = {};
    array.forEach((element) => {
        temp[element] = (temp[element] || 0) + 1;
    });
    temp = aggregateCounters(temp);
    return output;
}

function aggregateCounters(object) {
    let output = {};
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            output.push({
                value: key,
                count: object[key],
            });
        }
    }
    return output;
}

test("aggregates array that have same values", () => {
    expect(
        sameValuesCounter(["bar", "foo", "bar", "foobar", "bar", "foo"])
    ).toStrictEqual([
        { value: "bar", count: 3 },
        { value: "foo", count: 2 },
        { value: "foobar", count: 1 },
    ]);
});
