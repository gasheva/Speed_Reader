import {Module} from 'vuex';

interface State {
}

const state: State = {};

const mutations = {};

const actions = {
    async fetchNotifications(props: any) {
        const mockedNotifications = [
            {
                uid: '1',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos harum ipsa nemo numquam, odit provident\n' +
                    '        sed. Animi aut, cum cumque, deleniti ea id illo libero magni placeat quia ullam.',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos harum ipsa nemo numquam, odit provident\n' +
                    '        sed. Animi aut, cum cumque, deleniti ea id illo libero magni placeat quia ullam.',
                date: new Date(),
            },
            {
                uid: '2',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos harum ipsa nemo numquam, odit provident\n' +
                    '        sed. Animi aut, cum cumque, deleniti ea id illo libero magni placeat quia ullam.',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos harum ipsa nemo numquam, odit provident\n' +
                    '        sed. Animi aut, cum cumque, deleniti ea id illo libero magni placeat quia ullam.',
                date: new Date(),
            },
            {
                uid: '3',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos harum ipsa nemo numquam, odit provident\n' +
                    '        sed. Animi aut, cum cumque, deleniti ea id illo libero magni placeat quia ullam.',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos harum ipsa nemo numquam, odit provident\n' +
                    '        sed. Animi aut, cum cumque, deleniti ea id illo libero magni placeat quia ullam.',
                date: new Date(),
            }
        ];
        return mockedNotifications;
    }
};

export const notification: Module<State, any> = {
    namespaced: true,
    state,
    mutations,
    actions
};
