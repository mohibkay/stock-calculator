const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const numberOfStocks = document.querySelector("#number-of-stocks");

const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");
const errorMsg = document.querySelector("#error");

function calculateStockPrice() {
  const initialPriceValue = Number(initialPrice.value);
  const currentPriceValue = Number(currentPrice.value);
  const noOfStocks = Number(numberOfStocks.value);

  const isValidInput =
    initialPriceValue > 0 && currentPriceValue > 0 && noOfStocks > 0;

  if (isValidInput) {
    showMsg();
    hideError();
    if (currentPriceValue > initialPriceValue) {
      const profit = currentPriceValue - initialPriceValue;
      const profitPercentage = ((profit / initialPriceValue) * 100).toFixed(2);
      output.innerHTML = `Yay! Your profit is ₹${
        profit * noOfStocks
      } & profit percentage is ${profitPercentage}% 🚀`;
    } else if (currentPriceValue < initialPriceValue) {
      const loss = initialPriceValue - currentPriceValue;
      const lossPercentage = ((loss / initialPriceValue) * 100).toFixed(2);
      output.innerHTML = `Dude, your loss is ₹${
        loss * noOfStocks
      } & loss percentage is ${lossPercentage}% 😥`;
    } else {
      output.innerHTML = "No profit, no loss. That's weird 😐";
    }
  } else {
    output.style.display = "none";
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Please enter valid inputs";
  }
}

function hideError() {
  errorMsg.style.display = "none";
}

function showMsg() {
  output.style.display = "block";
}

checkBtn.addEventListener("click", calculateStockPrice);
