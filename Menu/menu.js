const menu = [
    {
        id:1,
        title: "classic-chocolate-mousse",
        category: "breakfast",
        price: 15,
        img: "./menupics/classic-chocolate-mousse.jpg",
        desc: `This Chocolate Mousse is thick, rich, creamy, and a perfect dessert for entertaining! Not only is
      it pretty, everyone gets their own serving, and you can make it a day ahead of time.`,
    },
    {
        id:2,
        title: "Mini Donuts",
        category: "lunch",
        price: 15,
        img: "./menupics/bakedminidonuts11.jpg",
        desc: `The cinnamon sugar coating was much too thick for their size, so instead I made a buttery donut batter then immediately dipped them warm from the oven in the cinnamon sugar coating and voila!`,
    },
    {
        id:3,
        title: "Cheese cake bars",
        category: "lunch",
        price: 15,
        img: "./menupics/cheesecake bars.jpg",
        desc: `Cheesecake Bars have just 5 ingredients in their rich sour cream-cream cheese filling over a buttery graham cracker crust. Perfect for a crowd or snacks on the go. If you want all the taste of a New York Cheesecake without all the fuss, you are going to love this easy Dessert Recipe. Perfect for parties or whenever you want creamy cheesecake on the go! Cheesecake is one of those desserts that everyone loves but usually only make for special occasions. Between the water bath and slowly cooling the cheesecake in the oven, it takes a lot of patience to make. This easy recipe cuts out all the fuss while still giving you creamy cheesecake every time.`,
    },
    {
        id:4,
        title: "Fudge bars",
        category: "lunch",
        price: 15,
        img: "./menupics/fudge_bars.jpg",
        desc: `Fudge is a brand of chocolate bar manufactured by Cadbury. It is a bar of fudge in a semi-circular cross-section covered in a layer of milk chocolate. Produced in small bite size bars and in larger bars, the Fudge continues to be produced and sold in countries such as the United Kingdom and Ireland.`,
    },
    {
        id:5,
        title: "Mango kulfi",
        category: "lunch",
        price: 15,
        img: "./menupics/Mango-Kulfi.jpg",
        desc: `Kulfi is Indian version of ice cream. It’s made without eggs, without an ice cream maker. Kulfi is made with milk and milk solids. It’s often flavored with nuts, cardamom and saffron.`,
    },
    {
        id:6,
        title: "Whoopie pies",
        category: "lunch",
        price: 15,
        img: "./menupics/whoopie-pies.jpg",
        desc: `Whoopie pies are two soft rounds of chocolate cake filled with vanilla buttercream frosting and marshmallow fluff. Traditionally, they’re handheld snacks, but there are also recipes out there for extra-large whoopies. At one Pennsylvania whoopie pie competition, a record-breaking 250-pound pie was created—and then a year later that record was decimated at a Maine whoopie pie celebration by a 1,000-pound pie.`,
    }

]

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');

//load items
window.addEventListener('DOMCotentLoaded', function () {       
    displayMenuItems(menu);
});

//filter items
filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        console.log(e.currentTarget.dataset);
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menu-item">
                <img src= ${item.img} class="photo" alt=${item.title} />
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </header>
                    <p class="item-text">${item - text}</p>
                </div>
                </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
};
