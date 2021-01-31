//Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function(e){
    alert("você clicou na tela!");
    console.log('você clicou na tela!');
}