// create snake, Water and Gun game in JS
// The game should ask you to enter s,w and g. The computer should be able to randomly generate S,W,G and declare win or loss in alert
// Use alert,prompt and confirm Whenever required!
let user = prompt("Enter S,W and G");
let cpuI = Math.floor(Math.random() * 3);

let cpu = ["S", "W", "G"][cpuI]

const match = (cpu, user) => {
  if (cpu === user) {
    return "Nobody"
  }
  else if (cpu === "W" && user === "G") {
    return "MATCH DREW"
  }
  else if (cpu === "W" && user === "S") {
    return "USER WON THE MATCH";
  }
  else if (cpu === "S" && user === "W") {
    return "CPU WON THE MATCH"
  }
  else if (cpu === "S" && user === "G") {
    return "USER WON THE MATCH"
  }
  else if (cpu === "G" && user === "S") {
    return "USER WON THE MATCH"
  }
  else if (cpu === "G" && user === "W") {
    return "MATCH DREW"
  }

}
let result = match(cpu, user)
document.write(`CPU:${cpu} <br> USER:${user} <br> The WINNER is:  ${result}`)
