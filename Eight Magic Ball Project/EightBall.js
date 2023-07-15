document.getElementById("fortuneForm").addEventListener("submit", function(event) {
   event.preventDefault(); // Prevent form submission from refreshing the page
    
    let userName = document.getElementById("userNameInput").value;
    let randomNumber = document.getElementById("randomNumberInput").value;
    let userQuestion = document.getElementById("userQuestionInput").value;
    let eightBall = "";

    // Validate if all fields are filled
  if (userName.trim() === "" || userQuestion.trim() === "" || randomNumber.trim() === "") {
    alert("Please fill in all fields before submitting.");
    return;
  }
    let greeting = userName ? `Hello, ${userName}!` : "Hello!";
    let reply = `${userName} asked: ${userQuestion}`;
    randomNumber = Math.floor(Math.random() * 8);
    if (randomNumber === 0) {
        eightBall = 'It is certain';
      } else if (randomNumber === 1) {
        eightBall = 'It is decidedly so';
      } else if (randomNumber === 2) {
        eightBall = 'Reply hazy try again';
      } else if (randomNumber === 3) {
        eightBall = 'Cannot predict now';
      } else if (randomNumber === 4) {
        eightBall = 'Do not count on it';
      } else if (randomNumber === 5) {
        eightBall = 'My sources say no';
      } else if (randomNumber === 6) {
        eightBall = 'Outlook not so good';
      } else if (randomNumber === 7) {
        eightBall = 'Signs point to yes';
      }
      
    let eightBallReply=`Eight Ball MAGIC Said: ${eightBall}`;

    document.getElementById("greeting").innerHTML = greeting;
    document.getElementById("user-question").innerHTML = reply;
    document.getElementById("eightBall").innerHTML = eightBallReply;

     // Clear input fields
  document.getElementById("userNameInput").value = "";
  document.getElementById("randomNumberInput").value = "";
  document.getElementById("userQuestionInput").value = "";
  });
  