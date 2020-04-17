const fornavn = prompt ("Fornavn");
const etternavn = prompt ("etternavn");
const stilling = prompt ("stilling");
const bilde = prompt ("URL til bilde av deg selv");


document.write (`

<article>
    <h1>${fornavn} ${etternavn}</h1>
    <p><b>Stilling: </b>${stilling}</p>
    <img src="${bilde}" style="width: 300px" Style="height:300px">
</article>
`)



