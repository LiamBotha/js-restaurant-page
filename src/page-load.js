export default function pageLoad() {
    const container = document.querySelector('#content');

    let parent = document.createElement("div");

    let header = document.createElement("h1");
    let img = document.createElement("div");
    let copy = document.createElement("p");

    header.textContent = "Food Factory";
    header.style.margin = "2rem";
    header.style.textAlign = "center";
    header.style.fontSize = "4rem";

    img.style.background = "url(/src/img.jpg";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.backgroundSize = "cover";
    img.style.display = "flex";
    img.style.alignItems = "center";
    img.style.justifyContent = "center";
    img.style.flexDirection = "column";

    copy.textContent = "Food so good you can eat it. its edible we promise!";
    copy.style.margin = "2rem";
    copy.style.textAlign = "center";
    copy.style.fontSize = "2rem";

    parent.style.height = "90vh";
    parent.style.margin = "0 auto";
    parent.style.background = "#1f1f1f";
    parent.style.color = "white";
    parent.style.fontFamily = "sans-serif";
    parent.style.fontWeight = "bold";

    img.appendChild(header);
    img.appendChild(copy);
    parent.appendChild(img);

    container.appendChild(parent);
}