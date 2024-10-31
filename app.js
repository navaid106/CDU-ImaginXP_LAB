const mainDiv = document.getElementById('main');

function myStoreAPI(){
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => displayData(data))
    .catch((err) => console.log(err));
}

myStoreAPI();


function displayData(arr){
    
    arr.forEach((item) => {
        proDiv = document.createElement('div'); // <div></div>
        proDiv.classList.add('product');

        image = document.createElement('img'); // <img src />
        image.src=item.image; // <img src="item.image" />

        heading = document.createElement('h2'); // <h2> </h2>
        heading.innerHTML=item.title;

        price = document.createElement('p'); // <p> </p>
        price.innerHTML='₹'+item.price; 

        proDiv.append(image, heading, price);

        mainDiv.appendChild(proDiv);

    })
}

