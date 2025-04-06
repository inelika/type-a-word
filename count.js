const wordInput = document.getElementById("wordInput");
const lengthDisplay = document.getElementById("length");
const clearBtn = document.getElementById("clearBtn");

wordInput.addEventListener("input", () => {
    const word = wordInput.value;
    let count = 0;
  
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= 'а' && char <= 'я') ||
        (char >= 'А' && char <= 'Я') ||
        char === 'ё' || char === 'Ё'
      ) {
        count++;
      }
    }
  
    lengthDisplay.innerText = count;
  });
  

clearBtn.addEventListener("click", () => {
  wordInput.value = "";
  lengthDisplay.innerText = "0";
});
