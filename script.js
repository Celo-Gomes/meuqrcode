let qrcode = new QRCode(document.querySelector('.qrcode'));

// qrcode.makeCode("Coloque um endereço");
qrcode.makeCode(`
    Apos colocar uma URL
    clique no QRCode 
    seu QRCode sera gerado
    tire um print da tela e 
    corte ou edite no seu app de
    imagens
`);

function generateQr(){
    if(
        document.querySelector("input").value === "" ||
        document.querySelector("input").value === " "     
    ){
        alert("Endereço vazio");
    }
    else{
        qrcode.makeCode(document.querySelector('input').value);
    }
}

function show(){
    const opt = document.querySelector('.opt');
    opt.classList.toggle('show')
}

// function showSuggestions(){
//     document.querySelector('.opt').classList.add('show')
// }

// function showGoback() {
//     document.querySelector('.opt').classList.remove('show')
// }

