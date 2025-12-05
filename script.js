// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Modal
const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const modalItems = document.getElementById("modalItems");
const modalTitle = document.getElementById("modalTitle");

document.querySelectorAll(".discover-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    modalItems.innerHTML = "";
    modalTitle.textContent = category.toUpperCase();

    menuData[category].forEach(item => {
      const div = document.createElement("div");
      div.className = "modal-item";

      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <p>${item.name}</p>
      `;

      modalItems.appendChild(div);
    });

    modal.style.display = "flex";
  });
});

closeModal.onclick = () => modal.style.display = "none";

modal.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};


closeModal.onclick = () => {
    modal.style.display = "none";
};

modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};
const menuData = {
  inasal: [
    { name: "INASAL PAA P125", img: "assets/inasal/inasalpaa.png" },
    { name: "INASAL PECHO P125", img: "assets/Pecho-Large-PM2.webp" },
    { name: "INASAL LIEMPO P170", img: "assets/inasal/INASALLIEMPO.png" }
  ],
  silog: [
    { name: "BANGUS SILOG P125", img: "assets/silog/bangussilog.png" },
    { name: "HOTSILOG P99", img: "assets/silog/hotsilog.png" },
    { name: "LONGSILOG P99", img: "assets/silog/longsilog.png" },
    { name: "PORKSILOG P99", img: "assets/silog/porksilog.png" },
    { name: "SISIGSILOG P99", img: "assets/silog/sisigsilog.jpg" }
  ],
  milktea: [
    { name: "CAPPUCCINO MILKTEA P39", img: "assets/milktea/milktea(1).jpg" },
    { name: "MATCHA MILKTEA P39", img: "assets/milktea/milktea(2).jpg" },
    { name: "STRAWBERRY MILKTEA P39", img: "assets/milktea/milktea(3).jpg" },
    { name: "TARO MILKTEA P39", img: "assets/milktea/milktea(4).jpg" }
  ]
};
