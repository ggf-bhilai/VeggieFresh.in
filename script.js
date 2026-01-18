// Safety: images array available hona chahiye
if (typeof images !== "undefined") {

  // Extra safety: JS side sort (A–Z)
  images.sort((a, b) => a.localeCompare(b));

  const grid = document.getElementById("product-grid");

  images.forEach((image, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${index * 0.02}s`;

    const img = document.createElement("img");
    img.src = "products/" + image;
    img.loading = "lazy";

    const productName = image
      .replace(/[-_]/g, " ")
      .replace(/\.(png|jpg|jpeg)$/i, "");

    const name = document.createElement("p");
    name.textContent = productName;

    // 👉 CLICK = COPY TO CLIPBOARD
    card.addEventListener("click", () => {
      navigator.clipboard.writeText(productName).then(() => {
        card.classList.add("copied");
        setTimeout(() => card.classList.remove("copied"), 800);
      });
    });

    card.appendChild(img);
    card.appendChild(name);
    grid.appendChild(card);
  });
}
