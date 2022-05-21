import {onBeforeMount, onBeforeUnmount, shallowRef} from 'vue';
import {constants} from '@/constants/constants';
import store from '@/store';
import {Notification} from '@/interfaces/notification.interface';

export function useFetchNotifications() {
    let notifications = shallowRef<Notification[]>([]);
    let fetchNotificationsInterval: number | undefined = undefined;
    onBeforeMount(() => {
        const fetchNotifications = () => {
            store.dispatch('notification/fetchNotifications')
                .then((resp) => {
                    notifications.value = resp;
                });
        };
        fetchNotifications();
        fetchNotificationsInterval = setInterval(() => {
            fetchNotifications();
        }, constants.FETCH_NOTIFICATIONS_INTERVAL_MS);
    });
    onBeforeUnmount(() => {
        fetchNotificationsInterval && clearInterval(fetchNotificationsInterval);
    });

    return {notifications};
}
