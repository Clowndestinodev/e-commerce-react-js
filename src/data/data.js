const products =[
    {
        id: "Sho001",
        name: "Blood West",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga incidunt voluptate iste eos? Ipsum nulla quisquam nobis voluptatibus animi laborum, accusamus voluptas, eius deserunt, sint eveniet est! Animi, neque id. ",
        stock: 5,
        price: 20,
        image: "/img/Bw.webp",
        category: "shooters" 
    },
    {
        id: "Sho002",
        name: "Serious Sam 4",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga incidunt voluptate iste eos? Ipsum nulla quisquam nobis voluptatibus animi laborum, accusamus voluptas, eius deserunt, sint eveniet est! Animi, neque id. ",
        stock: 5,
        price: 30,
        image: "/img/ss4.png",
        category: "shooters" 
    },
    {
        id: "Rpg001",
        name: "Baldurs Gate 3",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga incidunt voluptate iste eos? Ipsum nulla quisquam nobis voluptatibus animi laborum, accusamus voluptas, eius deserunt, sint eveniet est! Animi, neque id. ",
        stock: 5,
        price: 50,
        image: "/img/bg3.avif",
        category: "rpg" 
    },
    {
        id: "Rpg002",
        name: "Divinity Original Sin 2",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga incidunt voluptate iste eos? Ipsum nulla quisquam nobis voluptatibus animi laborum, accusamus voluptas, eius deserunt, sint eveniet est! Animi, neque id. ",
        stock: 5,
        price: 10,
        image: "/img/dv2.avif",
        category: "rpg" 
    },
    {
        id: "Dep001",
        name: "EA FC 25",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga incidunt voluptate iste eos? Ipsum nulla quisquam nobis voluptatibus animi laborum, accusamus voluptas, eius deserunt, sint eveniet est! Animi, neque id. ",
        stock: 5,
        price: 50,
        image: "/img/fifa.webp",
        category: "deportes" 
    },
    {
        id: "Dep002",
        name: "NBA 2K 25",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga incidunt voluptate iste eos? Ipsum nulla quisquam nobis voluptatibus animi laborum, accusamus voluptas, eius deserunt, sint eveniet est! Animi, neque id. ",
        stock: 5,
        price: 40,
        image: "/img/nba.webp",
        category: "deportes" 
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