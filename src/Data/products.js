import Laptop from "../Assets/Laptop.png";
import Nintendo from "../Assets/Nintendo.png";
import system_unit from "../Assets/systemUnit.png";
import gaming_set from "../Assets/gaming.png";
import gamepad from "../Assets/gamepad.png";
import MacBook from "../Assets/Mac.png";
import iphone from "../Assets/iphone.png";



const products =
    [
        {
            id: "001",
            image: Laptop,
            name: "ASUS",
            category: "LAPTOP",
            price: "$299",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quae"
        },
        {
            id: "002",
            image: Nintendo,
            name: "Nintendo",
            category: "GAMES",
            price: "$299",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quae"
        },
        {
            id: "003",
            image: system_unit,
            name: "AlienWare Unit",
            category: "SYSTEM UNIT",
            price: "$299",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quae"
        },
        {
            id: "004",
            image: gaming_set,
            name: "Gaming Set",
            category: "GAME ACCESSORIES",
            price: "$299",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quae"
        },
        {
            id: "005",
            image: gamepad,
            name: "Gaming Pad",
            category: "GAME ACCESSORIES",
            price: "$299",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quae"
        },
        {
            id: "006",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "007",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "008",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "009",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "010",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "009",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "010",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "009",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "010",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "009",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "010",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "009",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "010",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "009",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "010",
            image: MacBook,
            name: "MacBook Pro",
            category: "LAPTOP",
            price: "$1.309",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "3+ day Shipping",
            about: "Our most powerful notebooks supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display."
        },
        {
            id: "011",
            image: iphone,
            name: "iPhone 14 Plus 128GB Blue",
            category: "PHONE",
            price: "$1,288",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "2- day Shipping",
            about: "iPhone 14 Plus - Think big with a larger 6.7-inch display1 and all-day battery life.2 Capture stunning photos in low light and bright light with the new dual-camera system. Get peace of mind with groundbreaking safety features."
        },
        {
            id: "012",
            image: iphone,
            name: "iPhone 14 Plus 128GB Blue",
            category: "PHONE",
            price: "$1,288",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "2- day Shipping",
            about: "iPhone 14 Plus - Think big with a larger 6.7-inch display1 and all-day battery life.2 Capture stunning photos in low light and bright light with the new dual-camera system. Get peace of mind with groundbreaking safety features."
        },
        {
            id: "013",
            image: iphone,
            name: "iPhone 14 Plus 128GB Blue",
            category: "PHONE",
            price: "$1,288",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "2- day Shipping",
            about: "iPhone 14 Plus - Think big with a larger 6.7-inch display1 and all-day battery life.2 Capture stunning photos in low light and bright light with the new dual-camera system. Get peace of mind with groundbreaking safety features."
        },
        {
            id: "014",
            image: iphone,
            name: "iPhone 14 Plus 128GB Blue",
            category: "PHONE",
            price: "$1,288",
            price_decimal: "00",
            shipping_price: "$6.88",
            shipping_days: "2- day Shipping",
            about: "iPhone 14 Plus - Think big with a larger 6.7-inch display1 and all-day battery life.2 Capture stunning photos in low light and bright light with the new dual-camera system. Get peace of mind with groundbreaking safety features."
        },
    ]


export default products;