import {Link} from '@/components/app/Navigation/data/link.interface';

const links: Link[] = [
    {name: 'home', label: 'homePage', route: 'home', icon: '', isPublic: true},
    {name: 'statistic', label: 'statisticPage', route: 'statistic', icon: '', isPublic: false},
    // {name: 'exercises', label: 'exercisePage', route: 'exercises', icon: ''},
];

export default links;
