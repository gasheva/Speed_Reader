import {onBeforeMount, onBeforeUnmount, ref} from 'vue';

export function useDateInterval(customTimeSec?: number){
    const currentDate = ref(new Date());
    let interval: number | undefined = undefined;
    const intervalTime = customTimeSec || 3000;
    const getDate = () => {
        interval = setInterval(() => currentDate.value = new Date(), intervalTime);
    };

    onBeforeMount(async () => {
        getDate();
    });
    onBeforeUnmount(() => {
        interval && clearInterval(interval);
        interval = undefined;
    });
    return{
        currentDate
    }
}