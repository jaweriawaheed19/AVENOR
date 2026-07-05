// ==========================================
// SEARCH
// ==========================================

const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if(searchBtn){

    searchBtn.addEventListener("click",()=>{

        searchOverlay.classList.add("active");

        searchInput.value="";

        searchResults.innerHTML="";

        searchInput.focus();

    });

}

if(closeSearch){

    closeSearch.addEventListener("click",()=>{

        searchOverlay.classList.remove("active");

    });

}

if(searchOverlay){

    searchOverlay.addEventListener("click",(e)=>{

        if(e.target===searchOverlay){

            searchOverlay.classList.remove("active");

        }

    });

}

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        searchOverlay.classList.remove("active");

    }

});

if(searchInput){

    searchInput.addEventListener("input",renderSearch);

}

function renderSearch(){

    const keyword = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML="";

    if(keyword==="") return;

    const results = products.filter(product=>{

        return (

            product.name.toLowerCase().includes(keyword) ||

            product.category.toLowerCase().includes(keyword)

        );

    });

    if(results.length===0){

        searchResults.innerHTML=`

            <p style="padding:1rem;text-align:center;">

                No products found.

            </p>

        `;

        return;

    }

    results.forEach(product=>{

        searchResults.innerHTML+=`

        <div class="search-result"

             data-id="${product.id}">

            <img src="${product.image}" alt="${product.name}">

            <div>

                <h4>${product.name}</h4>

                <p>${product.category}</p>

                <span>

                    Rs. ${product.price.toLocaleString()}

                </span>

            </div>

        </div>

        `;

    });

}

document.addEventListener("click",(e)=>{

    const card = e.target.closest(".search-result");

    if(!card) return;

    window.location.href =
    `product.html?id=${card.dataset.id}`;

});