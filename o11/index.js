const pris = prompt("Skriv inn pris for å finne ut moms og pris med moms");
const moms = (Number(25))

document.write(`

<ul>
  Pris:  ${Number(pris)}
</ul>
<ul>
  25% Moms: ${Number(moms) * (pris) / 100} 
</ul>
<ul>
   Pris + Moms: ${Number(moms) * (pris) / 100 + Number(pris)} 
</ul>

`)

