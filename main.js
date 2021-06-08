// Menu burger
function myFunction(x) {
    x.classList.toggle("change");
}

// 25ans Marie

function mdp() {

    if (document.getElementById('mdp').value === "Nidalee7") {
        document.getElementById('article-mdp').classList.add('article_mdp');
        document.getElementById('article-intro').classList.remove('article_mdp');
        document.getElementById('article-video').classList.remove('article_mdp');
        document.getElementById('footer-mdp').classList.remove('bottom-fixe');
    } else {
        document.getElementById('mdp').style.border = "solid 2px red";
        document.getElementById('mdp').placeholder = ":(";
    }
}