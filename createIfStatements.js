const action_list = ["forward", "left", "clockwise", "counterclockwise", "backward"]; //example values
const times = [110, 2140, 6340, 5609, 22234]; //example values

const start = `double mills = autoTimer.milliseconds();

`;

var final = "";

for (let action in action_list) {
    final += `else if (mills < ${times[action]}) {
    return "${action_list[action]}";
}
`;
}

final = final.replace("else ", start);

console.log(final);
