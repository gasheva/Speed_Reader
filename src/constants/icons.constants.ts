const icons = Object.freeze({
    bell: `<svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.7794 17.5V17.8081L17.996 18.0272L20.25 20.3081V20.5H0.75V20.3081L3.00405 18.0272L3.22059 17.8081V17.5V10.625C3.22059 7.10514 5.56916 4.27383 8.82502 3.47858L9.39706 3.33886V2.75V1.875C9.39706 1.28082 9.93432 0.75 10.5 0.75C11.0657 0.75 11.6029 1.28082 11.6029 1.875V2.75V3.33886L12.175 3.47858C15.4308 4.27383 17.7794 7.10514 17.7794 10.625V17.5ZM12.0532 23.25C11.774 23.8421 11.1767 24.25 10.5 24.25C9.82329 24.25 9.22596 23.8421 8.94678 23.25H12.0532Z" stroke="#3C4858" stroke-width="1.5"/>
    </svg>`,
    chevronDown: `<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8C6.73738 8 6.48611 7.89576 6.30411 7.71106L0.269656 1.5936C-0.100135 1.21901 -0.0880662 0.623009 0.296449 0.262771C0.680723 -0.097467 1.29189 -0.0859375 1.66144 0.288889L7 5.70093L12.3386 0.288889C12.7079 -0.0857022 13.319 -0.097467 13.7036 0.262771C14.0881 0.623009 14.1001 1.21901 13.7303 1.5936L7.69589 7.71106C7.51389 7.89576 7.26262 8 7 8Z" fill="black"/>
    </svg>`,
    envelop: `<svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0.230774V21.7693H30V0.230774H0ZM27.5054 2.53849L15 12.9596L2.49469 2.53849H27.5054ZM27.6923 19.4615H2.30771V5.38656L15 15.9635L27.6923 5.38656V19.4615Z" fill="black" fill-opacity="0.6"/>
    </svg>`,
    messagesMails: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.4878 5.56097V2.04877H0V18.439H3.5122V21.9512H24V5.56097H20.4878ZM20.4878 7.3171H22.1504L20.4878 8.87574V7.3171ZM18.6382 3.80489L10.2439 11.6745L1.84969 3.80489H18.6382ZM1.75608 16.6829V6.12431L10.2439 14.0817L18.7317 6.12431V16.6829H1.75608ZM22.2439 20.1951H5.26828V18.439H20.4878V11.2828L22.2439 9.63647V20.1951H22.2439Z" fill="black"/>
    <path d="M16.9758 13.1707H15.2197V14.9268H16.9758V13.1707Z" fill="black"/>
    </svg>`,
    settings: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7717 9.48068L21.0871 9.1949C20.9116 8.62837 20.686 8.08189 20.4103 7.56048L21.403 6.17172C21.8241 5.58011 21.7589 4.77293 21.2425 4.26154L19.7485 2.7675C19.4677 2.48674 19.0967 2.33131 18.7007 2.33131C18.3898 2.33131 18.094 2.42657 17.8433 2.60706L16.4496 3.59975C15.9081 3.31398 15.3416 3.07834 14.755 2.90286L14.4742 1.23835C14.3539 0.521412 13.7372 0 13.0102 0H10.8995C10.1726 0 9.55588 0.521412 9.43556 1.23835L9.14477 2.94297C8.58325 3.11845 8.03677 3.34907 7.51536 3.62983L6.13662 2.63714C5.88594 2.45665 5.58513 2.3614 5.27429 2.3614C4.87821 2.3614 4.50219 2.51682 4.22645 2.79758L2.72739 4.29162C2.216 4.80301 2.14581 5.61019 2.56695 6.2018L3.56967 7.61061C3.29392 8.13704 3.07332 8.68352 2.90286 9.25005L1.23835 9.53081C0.521412 9.65114 0 10.2678 0 10.9948V13.1055C0 13.8325 0.521412 14.4491 1.23835 14.5695L2.94297 14.8602C3.11845 15.4218 3.34907 15.9682 3.62983 16.4897L2.64216 17.8634C2.22102 18.455 2.28619 19.2622 2.80259 19.7736L4.29664 21.2676C4.5774 21.5484 4.9484 21.7038 5.34448 21.7038C5.65532 21.7038 5.95112 21.6085 6.2018 21.428L7.61061 20.4253C8.11699 20.691 8.64842 20.9066 9.1949 21.0771L9.47567 22.7616C9.59599 23.4786 10.2127 24 10.9396 24H13.0554C13.7823 24 14.399 23.4786 14.5193 22.7616L14.8051 21.0771C15.3716 20.9016 15.9181 20.676 16.4395 20.4003L17.8283 21.3929C18.079 21.5734 18.3798 21.6687 18.6906 21.6687C19.0867 21.6687 19.4577 21.5133 19.7385 21.2325L21.2325 19.7385C21.7439 19.2271 21.8141 18.4199 21.3929 17.8283L20.4003 16.4345C20.676 15.9081 20.9066 15.3616 21.0771 14.8001L22.7617 14.5193C23.4786 14.399 24 13.7823 24 13.0554V10.9446C24.01 10.2177 23.4886 9.601 22.7717 9.48068ZM22.6564 13.0554C22.6564 13.1205 22.6112 13.1757 22.5461 13.1857L20.4404 13.5367C20.1746 13.5818 19.9641 13.7773 19.8989 14.033C19.7084 14.77 19.4176 15.4769 19.0265 16.1337C18.8912 16.3643 18.9012 16.6501 19.0566 16.8707L20.295 18.6154C20.3301 18.6656 20.3251 18.7408 20.2799 18.7859L18.7859 20.2799C18.7508 20.315 18.7157 20.32 18.6906 20.32C18.6605 20.32 18.6355 20.31 18.6154 20.295L16.8757 19.0566C16.6601 18.9012 16.3693 18.8912 16.1387 19.0265C15.4819 19.4176 14.775 19.7084 14.038 19.8989C13.7773 19.9641 13.5818 20.1797 13.5417 20.4404L13.1857 22.5461C13.1757 22.6112 13.1205 22.6564 13.0554 22.6564H10.9446C10.8795 22.6564 10.8243 22.6112 10.8143 22.5461L10.4633 20.4404C10.4182 20.1746 10.2227 19.9641 9.967 19.8989C9.25005 19.7134 8.55818 19.4276 7.91143 19.0566C7.80614 18.9965 7.68582 18.9664 7.57051 18.9664C7.43514 18.9664 7.29476 19.0065 7.17945 19.0917L5.42469 20.3401C5.39962 20.3551 5.37456 20.3652 5.34949 20.3652C5.32943 20.3652 5.28933 20.3601 5.25423 20.325L3.76018 18.831C3.71506 18.7859 3.71005 18.7157 3.74514 18.6605L4.97848 16.9309C5.13391 16.7103 5.14393 16.4195 5.00857 16.1888C4.61751 15.5371 4.31669 14.8302 4.12618 14.0932C4.05599 13.8375 3.84542 13.6419 3.58471 13.5968L1.46397 13.2358C1.39879 13.2258 1.35367 13.1707 1.35367 13.1055V10.9948C1.35367 10.9296 1.39879 10.8745 1.46397 10.8644L3.55463 10.5135C3.82035 10.4684 4.03593 10.2728 4.10111 10.0121C4.28661 9.27512 4.57238 8.56319 4.95843 7.90641C5.0938 7.67579 5.07876 7.39001 4.92334 7.17443L3.67495 5.41968C3.63986 5.36954 3.64487 5.29434 3.68999 5.24922L5.18404 3.75517C5.21914 3.72008 5.25423 3.71506 5.2793 3.71506C5.30938 3.71506 5.33445 3.72509 5.3545 3.74013L7.08419 4.97347C7.30479 5.12889 7.59557 5.13892 7.8262 5.00355C8.47796 4.61249 9.18488 4.31168 9.92187 4.12116C10.1776 4.05097 10.3731 3.8404 10.4182 3.5797L10.7792 1.45895C10.7892 1.39377 10.8444 1.34865 10.9095 1.34865H13.0203C13.0854 1.34865 13.1406 1.39377 13.1506 1.45895L13.5016 3.54961C13.5467 3.81533 13.7422 4.03092 14.0029 4.09609C14.76 4.28661 15.4819 4.58241 16.1538 4.97848C16.3844 5.11385 16.6702 5.10382 16.8907 4.9484L18.6204 3.70503C18.6455 3.68999 18.6706 3.67997 18.6956 3.67997C18.7157 3.67997 18.7558 3.68498 18.7909 3.72008L20.2849 5.21412C20.3301 5.25924 20.3351 5.32943 20.3 5.38458L19.0616 7.12429C18.9062 7.33988 18.8962 7.63067 19.0315 7.86129C19.4226 8.51807 19.7134 9.22499 19.9039 9.96198C19.9691 10.2227 20.1847 10.4182 20.4454 10.4583L22.5511 10.8143C22.6163 10.8243 22.6614 10.8795 22.6614 10.9446V13.0554H22.6564Z" fill="black"/>
    <path d="M12.0023 6.81839C9.14453 6.81839 6.82324 9.13968 6.82324 11.9974C6.82324 14.8552 9.14453 17.1764 12.0023 17.1764C14.86 17.1764 17.1813 14.8552 17.1813 11.9974C17.1813 9.13968 14.86 6.81839 12.0023 6.81839ZM12.0023 15.8228C9.89155 15.8228 8.17691 14.1081 8.17691 11.9974C8.17691 9.8867 9.89155 8.17206 12.0023 8.17206C14.113 8.17206 15.8276 9.8867 15.8276 11.9974C15.8276 14.1081 14.113 15.8228 12.0023 15.8228Z" fill="black"/>
    </svg>`,
    defaultAvatar: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="21" fill="#F6F6F6"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8024 27.1142C13.808 26.0501 16.2132 24.8649 18.2232 24.1644L20.3957 26.012C20.7363 26.3018 21.2367 26.3018 21.5773 26.012L23.7498 24.1644C25.7598 24.8649 28.165 26.0501 29.1706 27.1142H12.8024ZM23.8283 22.2686C23.5283 22.1724 23.2002 22.2385 22.9604 22.4425L20.9864 24.1211L19.0127 22.4425C18.7729 22.2385 18.4448 22.1724 18.1448 22.2686C16.8682 22.6758 10.5 24.8674 10.5 28.0268C10.5 28.5304 10.9083 28.9387 11.4119 28.9387H30.561C31.0646 28.9387 31.4729 28.5304 31.4729 28.0268C31.4729 24.8674 25.1046 22.6758 23.8283 22.2686ZM20.9865 11.1577C23.3656 11.1577 25.301 13.1052 25.301 15.4993C25.301 17.8938 23.3656 19.8418 20.9865 19.8418C18.6077 19.8418 16.6723 17.8938 16.6723 15.4993C16.6723 13.1052 18.6077 11.1577 20.9865 11.1577ZM20.9864 21.665C24.371 21.665 27.1246 18.8988 27.1246 15.4987C27.1246 12.0991 24.371 9.33337 20.9864 9.33337C17.602 9.33337 14.8484 12.0991 14.8484 15.4987C14.8484 18.8988 17.602 21.665 20.9864 21.665Z" fill="#3C4858"/>
    </svg>`,
    clock: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6534 11.4849C12.976 11.8075 12.976 12.3306 12.6534 12.6532C12.4921 12.8145 12.2808 12.8952 12.0694 12.8952C11.8579 12.8952 11.6466 12.8145 11.4853 12.6532L8.91597 10.0842C8.76108 9.92934 8.67393 9.7191 8.67393 9.49998V4.57671C8.67393 4.12051 9.04381 3.75063 9.50002 3.75063C9.95622 3.75063 10.3261 4.12051 10.3261 4.57671V9.15778L12.6534 11.4849ZM9.49997 17.3479C5.17272 17.3479 1.65214 13.8273 1.65214 9.50003C1.65214 5.17278 5.17272 1.65221 9.49997 1.65221C13.8274 1.65221 17.3478 5.17278 17.3478 9.50003C17.3478 13.8273 13.8274 17.3479 9.49997 17.3479ZM9.5 0C4.26178 0 0 4.26178 0 9.5C0 14.7382 4.26178 19 9.5 19C14.7384 19 19 14.7382 19 9.5C19 4.26178 14.7384 0 9.5 0Z" fill="black"/>
    </svg>`
});

export {icons};
