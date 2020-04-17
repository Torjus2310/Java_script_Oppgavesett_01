const bilde = prompt ("Lim inn link til bilde");
const bredde = prompt ("Velg bredde (px) på bilde");
const tittel = prompt ("velg tittel på bilde");

document.write (`
<h1> ${tittel} </h1>
<img src=${bilde}>
<style> img {width:${bredde}px}</style>

`)