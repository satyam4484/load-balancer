const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
    res.send("Hello from Node.js running on EC2 ");
});

app.get("/heavy", (req, res) => {``
    let sum = 0;
    for (let i = 0; i < 1e8; i++) {
        sum += i;
    }
    res.send(`Heavy computation done! Sum: ${sum}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
