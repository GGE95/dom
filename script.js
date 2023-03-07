function click_footer(){
  document.querySelector('footer').addEventListener("click", function() {
    console.log("clique");
  });
}

function click_x_footer(){
  var x = 1;
  document.querySelector('footer').addEventListener("click", function() {
    console.log(`clic numéro ${x}`);
    x += 1
});
}

function hamburger(){
  var hbrg = document.getElementById('navbarHeader')
  document.querySelector('.navbar-toggler').addEventListener("click", function() {
    hbrg.classList.toggle("collapse");
    hbrg.classList.forEach(function(className) {
      console.log(className);
    });
});
}

function edit_card_red(){
  document.querySelectorAll('.card .btn:last-of-type')[0].addEventListener("click", function() {
    document.querySelectorAll('.card .card-text')[0].style.color = "red";
  });
}

function edit_card_green(){
  var secondCard_text = document.querySelectorAll('.card .card-text')[1];
  document.querySelectorAll('.card .btn:last-of-type')[1].addEventListener("click", function() {
    if (secondCard_text.style.color === 'green'){
      secondCard_text.style.color = '';
    }else
    secondCard_text.style.color = "green";
  });
}

function remove_bootstrap(){
  var link = document.querySelector('link');
  document.querySelector('header').addEventListener("dblclick", function() {
    if (link.disabled === true) link.disabled = false;
    else link.disabled = true;
  });
}

function mouseover(){
  var viewBtns = document.getElementsByClassName("btn btn-sm btn-success");
  var cards = document.querySelectorAll(".card");
  for (let i = 0; i < viewBtns.length; i++) {
    viewBtns[i].addEventListener("mouseover", function() {
  if (cards[i].style.transform === "scale(1)") {
    cards[i].querySelector('.card-text').textContent = '';
    cards[i].style.transform = "scale(0.2)";
  } else {
    cards[i].querySelector('.card-text').textContent = 'test';
    cards[i].style.transform = "scale(1)";
  }
});
};
}

function wtf(){
  document.querySelector('btn btn-secondary my-2').addEventListener("click", function() {
    
  });
}



click_footer();
click_x_footer();
hamburger();
edit_card_red()
edit_card_green()
remove_bootstrap()
mouseover()
wtf()