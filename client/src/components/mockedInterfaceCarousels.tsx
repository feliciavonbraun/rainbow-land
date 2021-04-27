export interface Carousel {
    id: number,
    name: string,
    image: string,
    tickets: number
};

export const carousels: Carousel[] = [
    {
        id: 1,
        name: 'Flying carousel',
        image: 'https://images.pexels.com/photos/136412/pexels-photo-136412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        tickets: 3,
    }, {
        id: 2,
        name: 'Roller coaster',
        image: 'https://images.pexels.com/photos/749061/pexels-photo-749061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        tickets: 4,
    }, {
        id: 3,
        name: 'Ferris wheel',
        image: 'https://images.pexels.com/photos/784917/pexels-photo-784917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        tickets: 2,
    }, {
        id: 4,
        name: 'Carousel',
        image: 'https://images.pexels.com/photos/1375016/pexels-photo-1375016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        tickets: 2,
    }
];