let count = 0;

const countDisplay = document.getElementById("count");

const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");
const lockBtn = document.getElementById("lock");
const unlockBtn = document.getElementById("unlock");
const status = document.getElementById("status");



function increase()
{
    count++;
    countDisplay.textContent=count;
}
function decrease()
{
    count--;
    countDisplay.textContent=count;
}
function reset()
{
    count=0;
    countDisplay.textContent=count;
}

//add the event listerner for this funciton

incBtn.addEventListener("click", increase);
decBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);


//remove events

// lock events
lockBtn.addEventListener("click", function ()


{
  incBtn.removeEventListener("click", increase);
  decBtn.removeEventListener("click", decrease);
  resetBtn.removeEventListener("click", reset);

  status.textContent = "🔒 Counter Locked";
  status.style.color = "red";
  status.style.fontWeight="bold"
}
);

// unlock events
unlockBtn.addEventListener("click", function ()
 {
  incBtn.addEventListener("click", increase);
  decBtn.addEventListener("click", decrease);
  resetBtn.addEventListener("click", reset);

  status.textContent = "🔓 Counter Unlocked";
  status.style.color = "green";
  status.style.fontWeight="bold"
});

