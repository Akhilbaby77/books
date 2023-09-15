const fetchButton = document.getElementById("fetchBooks");
const bookList = document.getElementById("bookList");

fetchButton.addEventListener("click", fetchBooks);

function fetchBooks() {
    const apiUrl = "https://openlibrary.org/works/OL45804W/editions.json"; 

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch books.");
            }
            return response.json();
        })
        .then((books) => {
            console.log(books.entries,"hihihih")
            displayBooks(books.entries);
        })
        .catch((error) => {
            bookList.textContent = "Error fetching books: " + error.message;
        });
}

function displayBooks(books) {
    bookList.innerHTML = "";

    const ul = document.createElement("ul");

    books.forEach((book) => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author}`;
        ul.appendChild(li);
    });

    bookList.appendChild(ul);
}