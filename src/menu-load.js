import bgImg from "./img.jpg";

export default function menuLoad() {
    const container = document.querySelector("#content");

    let parent = document.createElement("div");
    let img = document.createElement("div");

    let header = document.createElement("h2");
    let itemA = document.createElement("h3");
    let itemB = document.createElement("h3");
    let itemC = document.createElement("h3");
    let itemD = document.createElement("h3");

    img.style.background = "url(bgImg)";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.backgroundSize = "cover";
    img.style.display = "flex";
    img.style.alignItems = "center";
    img.style.justifyContent = "center";
    img.style.flexDirection = "column";

    header.textContent = "MENU";
    itemA.textContent = "Basic Toasted Cheese - $100";
    itemB.textContent = "Well Cooked Steak - $200";
    itemC.textContent = "Microwave Lasagna  - $70";
    itemD.textContent = "Pizza?  - $155";

    parent.style.height = "90vh";
    parent.style.margin = "0 auto";
    parent.style.background = "#1f1f1f";
    parent.style.color = "white";
    parent.style.fontFamily = "sans-serif";
    parent.style.fontWeight = "bold";

    img.appendChild(header);
    img.appendChild(itemA);
    img.appendChild(itemB);
    img.appendChild(itemC);
    img.appendChild(itemD);

    parent.appendChild(img);

    container.appendChild(parent);
}