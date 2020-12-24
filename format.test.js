const formatDuration = require("./index");

test("Duration Formatter", () => {
    expect(formatDuration(3662)).toBe("1 hour, 1 minute and 2 seconds");
    expect(formatDuration(62)).toBe("1 minute and 2 seconds");
});
