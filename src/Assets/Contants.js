import bgImg from './bg-slate.png';
import BlackCoffee from './black.png';
import Cover from './coffee-cover.jpg';
import Map from './world-map.png';
import coffee1 from './coffee/coffee1.png';
import coffee3 from './coffee/coffee3.png';

export const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}

export const Image = {
    bgImage: bgImage,
    BlackCoffee : BlackCoffee,
    Cover: Cover,
    Map: Map,
}

export const Service = [
    {
        image: coffee3,
        title:"Black Coffee",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        image: coffee1,
        title:"Hot Coffee",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        image: coffee3,
        title:"Cold Coffee",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
]