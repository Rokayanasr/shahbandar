const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const leftData = document.querySelector(".left-data");
const rightData = document.querySelector(".right-data");

const toggleNav = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
};

window.onload = () => {
    let data;
    fetch("data.json")
        .then((res) => res.json())
        .then((res) => {
            data = [...res];
            console.log(data);
            drawData(data);
            return data;
        })
        .catch((err) => console.log(err));

    const drawData = (books) => {
        console.log(books);
        books.forEach((book) => {
            let leftDiv = document.createElement("div");
            let rightDiv = document.createElement("div");

            if (book.id <= 4) {
                leftDiv.classList.add("left-div", "mb-24");
                leftDiv.innerHTML = `
                <div class='book-data'>
                  <h2>${book.title}</h2>
                  <p>${book.description}</p>
                  <span>${book.price}</span>
                </div>
                <img src=${book.image} alt=${"img" + book.id} />
            `;
            }

            if (book.id > 4) {
                rightDiv.classList.add("right-div", "mb-24");
                rightDiv.innerHTML = `
                <img src=${book.image} alt=${"img" + book.id} />
                <div class='book-data'>
                  <h2>${book.title}</h2>
                  <p>${book.description}</p>
                  <span>${book.price}</span>
                </div>
            `;
            }

            leftData.appendChild(leftDiv);
            rightData.appendChild(rightDiv);
        });
    };
    // leftDiv.innerHTML = `<img src=${} alt="img1" />
};
mobileNav.addEventListener("click", () => toggleNav());
