import bgImg from "./img.jpg";

export default function contactLoad() {
    const container = document.querySelector("#content");

    let parent = document.createElement("div");
    let img = document.createElement("div");

    let phone = document.createElement("h3");
    let address = document.createElement("h3");
    let hours = document.createElement("h3");

    img.style.background = "url(bgImg)";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.backgroundSize = "cover";
    img.style.display = "flex";
    img.style.alignItems = "center";
    img.style.justifyContent = "center";
    img.style.flexDirection = "column";

    phone.textContent = "Phone-Number: 000-101337";
    address.textContent = "Address: 333 Nowhere Street, Fakeville, USR";
    hours.textContent = "Contact Hours: None, please don't call us";

    parent.style.height = "90vh";
    parent.style.margin = "0 auto";
    parent.style.background = "#1f1f1f";
    parent.style.color = "white";
    parent.style.fontFamily = "sans-serif";
    parent.style.fontWeight = "bold";

    img.appendChild(phone);
    img.appendChild(address);
    img.appendChild(hours);

    parent.appendChild(img);

    container.appendChild(parent);
};