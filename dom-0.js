function calculet(){
    const inputtex = document.getElementById('inputlet');
    const inputtex1=inputtex.value;
    const base=parseFloat(inputtex1);
    // console.log(inputletar);

    const inputh = document.getElementById('inputhig');
    const inputh1=inputh.value;
    const height=parseFloat(inputh1);
    // console.log(inputhiter)

    const area = 0.5 * base * height;

    const tariangler = document.getElementById('traiangel');
    tariangler.innerText=area;
}

function rectangl(){
    const rectWidthOn = document.getElementById('rectWidth');
    const rectInputSet= rectWidthOn.value;
    const valueFloted= parseFloat(rectInputSet);  
    console.log(valueFloted);

    const rectlagetss = document.getElementById('rectLargt');
    const rectInputLargt=rectlagetss.value;
    console.log(rectInputLargt);
}