import {Link} from "@/components/app/Navigation/data/link.interface";

const links: Link[] = [
    {name: 'home', label: new Map([['ru', 'Домашняя']]), route: 'Home', icon: ''},
    {name: 'exercises', label: new Map([['ru', 'Упражнения']]), route: 'Exercises', icon: ''},
    // {name: 'logout', label: new Map([['ru', 'Выйти']]), icon: ''},
];

export default links;
