//your code here
for (let i = 0; i < 400; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.id = `pixel${i}`;
        document.getElementById("gameContainer").appendChild(pixel);
      }

 let food = Math.floor(Math.random() * 400);
    document.getElementById(`pixel${food}`).classList.add("food");

    let snake = [19 * 20];
    document.getElementById(`pixel${snake[0]}`).classList.add("snakeBodyPixel");

    let direction = "right";
    let score = 0;

    function startGame() {
      // Moving snake in 100ms intervals
      setInterval(moveSnake, 100);
    }

    function moveSnake() {
      // Removing last snake body part
      let last = snake.pop();
      document.getElementById(`pixel${last}`).classList.remove("snakeBodyPixel");

      // Updating snake head position
      let nextHead;
      switch (direction) {
        case "right":
          nextHead = snake[0] + 1;
          break;
        case "left":
          nextHead = snake[0] - 1;
          break;
        case "up":
          nextHead = snake[0] - 20;
          break;
        case "down":
          nextHead = snake[0] + 20;
          break;
      }
      snake.unshift(nextHead);

      // Adding snake head
      document.getElementById(`pixel${nextHead}`).classList.add("snakeBodyPixel");

      // Checking if food is eaten
      if (nextHead === food) {
        score++;
        document.getElementById("score").innerHTML = score;
        // Generating new food location
        food = Math.floor(Math.random() * 400);
        document.getElementById(`pixel${food}`).classList.add("food");
        // Adding new snake body part
        snake.push(last);
      }
    }

    // Handling arrow key events
    document.onkeydown = function (event)