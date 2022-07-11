interface Link {
    label: string,
    componentName: string,
    icon: string,
}

export const links: Link[] = [
    {
        label: 'accountMainInformation',
        componentName: 'AccountMainInformation',
        icon: 'settings'
    },
    {
        label: 'accountMessages',
        componentName: 'AccountMainMessages',
        icon: 'messagesMails'
    },
]