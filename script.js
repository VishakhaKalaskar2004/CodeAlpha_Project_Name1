
const folders = {
  pictures: {
    folder1: {
      cover: "img/d1.jpg",
      images: [
        "img/p1.jpg",
        "img/p2.jpg",
        "img/p3.jpg",
        "img/p4.jpg"
      ]
    },
  
    folder2: {
      cover: "img/d2.jpg",
      images: [
        "img/a1.jpg",
        "img/a2.jpg",
        "img/a3.jpg",
        "img/a4.jpg"
      ]
    }
  },
  stories: {
    folder1: {
      cover: "img/d3.jpg",
      images: [
        "img/c1.jpg",
        "img/c2.jpg",
        "img/c3.jpg",
        "img/c4.jpg"
      ]
    },
    
    folder2: {
      cover: "img/d4.jpg",
      images: [
        "img/n1.jpg",
        "img/n2.jpg",
        "img/n3.jpg",
        "img/n4.jpg"
      ]
    }
  },
  albums: {
    folder1: {
      cover: "img/d5.jpg",
      images: [
        "img/b1.jpg",
        "img/b2.jpg",
        "img/b3.jpg",
        "img/b4.jpg"
      ]
    },
    
    folder2: {
      cover: "img/d6.jpg",
      images: [
        "img/f1.jpg",
        "img/f2.jpg",
        "img/f3.jpg",
        "img/f4.jpg"
      ]
    }
  }
};

const folderContainer = document.getElementById("folderContainer");
const imageViewer = document.getElementById("imageViewer");
const imageContainer = document.getElementById("imageContainer");

let currentCategory = "pictures";

function filterGallery(category) {
  currentCategory = category;
  const categoryFolders = folders[category];
  folderContainer.innerHTML = "";

  Object.entries(categoryFolders).forEach(([folderName, details]) => {
    const folderDiv = document.createElement("div");
    folderDiv.classList.add("folder");
    folderDiv.innerHTML = `  
      <img src="${details.cover}" alt="${folderName}">
      <span>${folderName} (${details.images.length} Images)</span>
    `;
    folderDiv.onclick = () => openFolder(folderName);
    folderContainer.appendChild(folderDiv);
  });

  folderContainer.style.display = "flex";
  imageViewer.style.display = "none";
}

function openFolder(folderName) {
  const images = folders[currentCategory][folderName].images;
  imageContainer.innerHTML = images
    .map(
      (img) =>
        `<img src="${img}" alt="Image" onclick="window.open('${img}', '_blank')">`
    )
    .join("");

  folderContainer.style.display = "none";
  imageViewer.style.display = "block";
}

function goBack() {
  folderContainer.style.display = "flex";
  imageViewer.style.display = "none";
}

// Hamburger menu toggle
function toggleMenu() {
  const menuOptions = document.getElementById("menuOptions");
  menuOptions.classList.toggle("hidden");
  document.querySelector(".hamburger-menu").classList.toggle("open");
}

// Search functionality
function searchGallery() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const allFolders = document.querySelectorAll(".folder");
  
  allFolders.forEach(folder => {
    const folderName = folder.querySelector("span").textContent.toLowerCase();
    if (folderName.includes(query)) {
      folder.style.display = "block";
    } else {
      folder.style.display = "none";
    }
  });
}

// Initialize
filterGallery(currentCategory);


