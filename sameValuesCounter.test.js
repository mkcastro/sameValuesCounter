function sameValuesCounter(array) {
    let output = [];
    let temp = {};
    array.forEach((element) => {
        temp[element] = (temp[element] || 0) + 1;
    });
    for (var key in temp) {
        if (temp.hasOwnProperty(key)) {
            output.push({
                count: temp[key],
                value: key,
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
