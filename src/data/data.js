const products =[
    {
        id: "Sho001",
        name: "Demon Slayers",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga incidunt voluptate iste eos? Ipsum nulla quisquam nobis voluptatibus animi laborum, accusamus voluptas, eius deserunt, sint eveniet est! Animi, neque id. ",
        stock: 5,
        price: 20,
        image: "/img/Kimetsu n1.jpg",
        category: "shonen" 
    },
    {
        id: "Sho002",
        name: "My Hero Academy",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga incidunt voluptate iste eos? Ipsum nulla quisquam nobis voluptatibus animi laborum, accusamus voluptas, eius deserunt, sint eveniet est! Animi, neque id. ",
        stock: 5,
        price: 30,
        image: "/img/my-hero-academia-1.jpg",
        category: "shonen" 
    },
    {
        id: "Rpg001",
        name: "D-Gray Man",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga incidunt voluptate iste eos? Ipsum nulla quisquam nobis voluptatibus animi laborum, accusamus voluptas, eius deserunt, sint eveniet est! Animi, neque id. ",
        stock: 5,
        price: 50,
        image: "/img/Dgrayman n1.webp",
        category: "rpg" 
    },
    {
        id: "Rpg002",
        name: "Vigilante",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga incidunt voluptate iste eos? Ipsum nulla quisquam nobis voluptatibus animi laborum, accusamus voluptas, eius deserunt, sint eveniet est! Animi, neque id. ",
        stock: 5,
        price: 10,
        image: "/img/vigilante-1.webp",
        category: "shonen" 
    },
    {
        id: "Dep001",
        name: "Slam Dunk",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga incidunt voluptate iste eos? Ipsum nulla quisquam nobis voluptatibus animi laborum, accusamus voluptas, eius deserunt, sint eveniet est! Animi, neque id. ",
        stock: 5,
        price: 50,
        image: "/img/SLAM-DUNK-1.webp",
        category: "isekai" 
    },
    {
        id: "Dep002",
        name: "Saint Seiya",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga incidunt voluptate iste eos? Ipsum nulla quisquam nobis voluptatibus animi laborum, accusamus voluptas, eius deserunt, sint eveniet est! Animi, neque id. ",
        stock: 5,
        price: 40,
        image: "/img/saint seiya n1.webp",
        category: "shonen" 
    },
];

const getProducts = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}


export { getProducts }