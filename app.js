var choice = confirm("Congratulations! You have discovered the magical land of Unitopia! Your job is to help Glitter the Unicorn retrieve her magic powers back from the Evil Wizard. It won't be easy, but with your help, we can do it! There may even be a reward at the end! Do you want to play?")

if (choice) {
    alert("Let's do this!")
    
} 

else {
    alert("Oh no! Come back when you are ready to fight!")
}

var wizardHealth = 100;

function update(attackType){
  if (wizardHealth <=0) {
  console.log("The Evil Wizard is dead! Glitter has regained her powers!");
  alert("The Evil Wizard is dead! Glitter has regained her powers!");
  } else {
    var comment = attackType + "!" 
    console.log("Continue fighting the Evil Wizard.")
  document.getElementById('health').innerText = wizardHealth;
  document.getElementById('comment').innerText = comment;
  }
}

function damageWizard(amount, attackType) {
  wizardHealth = wizardHealth - amount;
  update(attackType)
}


