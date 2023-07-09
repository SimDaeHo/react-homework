<template>
    <div class="css-1ljgxb-StyledSidebar egysmo41">
        <div class="css-1tvviw9-StyledContainer esqhdjl0">
            <div class="css-1ry038z-Container e1oyk2ul5">
                <div class="css-e1lz6-ShopImageWrapper e1oyk2ul4">
                    <img src="@/assets/img/mainImg.jpg" alt="샵 대표 이미지" />
                </div>
                <div class="css-f01ztm-ShopNameContainer e1oyk2ul0">
                    <div class="css-88kxdf-ShopName e1oyk2ul3">잇모멘텀</div>
                    <a href="https://www.momentum-shop.com" target="_blank" rel="noreferrer" class="css-11g3ia7-ShopLink e1oyk2ul1">www.momentum-shop.com</a>
                </div>
            </div>
            <div spacing="6" class="css-157zbvz exuu7bz0">
                <div class="css-h1dhl6-ShopShortLinkContainer e40mrk81">
                    <button type="button" class="pds-button css-txb7qq">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path
                                fill="#FA6EE3"
                                d="M2 5.022A3.016 3.016 0 0 1 5.01 2h13.98A3.016 3.016 0 0 1 22 5.022v13.956A3.016 3.016 0 0 1 18.99 22H5.01A3.016 3.016 0 0 1 2 18.978V5.022Z"></path>
                            <path fill="#000" d="M8.198 6.5v2.57h3.395L8 17.5h7.802v-2.577h-3.37L16 6.5H8.198Z"></path></svg
                        >스토어홈 링크 복사
                    </button>
                </div>
                <button type="button" class="pds-button css-txb7qq">마이스토어 프로필 공유</button>
            </div>
            <div class="css-16lhwhn-MainFrameShopInfo exuu7bz0">
                <a class="css-wzae47-Container e2jhs522" href="/shop/momentum-shop/wallet"
                    ><svg width="18" height="18" fill="none" viewBox="0 0 16 16" class="css-yxt0co-AdCoinIcon e2jhs521">
                        <rect width="13" height="13" x="1.5" y="1.5" stroke="#FF349C" rx="6.5"></rect>
                        <path
                            fill="#FF349C"
                            fill-rule="evenodd"
                            d="M10.998 7.202 11.418 5h-1.093l-.68 3.374L8.553 5H7.447l-1.11 3.424L5.674 5H4.58l.42 2.202H4v1.046h1.197L5.72 11h1.105L8 6.9 9.174 11h1.105l.524-2.752H12V7.202h-1.002Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div class="css-p48kll-AdCoinText e2jhs520"><span>광고 코인</span><span>1,134,433원</span></div>
                </a>
            </div>
            <div class="css-i93fg-Container e1so7ai73">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" class="css-16st8k3-InsightSubscriptionIcon e1so7ai72">
                    <path fill="#FF349C" d="M18.178 6.847h-7.26v1.551h7.26V6.847ZM10.917 10.725h7.261v1.55h-7.26v-1.55Z"></path>
                    <path
                        fill="#FF349C"
                        fill-rule="evenodd"
                        d="M7.096 2H22v15.347C22 19.917 19.947 22 17.414 22H5.153v-.004C3.398 21.912 2 20.441 2 18.64V7.847h5.096V2Zm1.528 16.64a3.38 3.38 0 0 1-.52 1.809h9.31c1.688 0 3.057-1.389 3.057-3.102V3.55H8.624V18.64ZM7.096 9.398H3.529v9.242c0 .999.798 1.809 1.783 1.809.985 0 1.784-.81 1.784-1.81V9.399Z"
                        clip-rule="evenodd"></path>
                </svg>
                <div class="css-sp5gkc-InsightSubscriptionText e1so7ai71">
                    <span>인사이트 플랜</span
                    ><a href="/shop/momentum-shop/insight/sales-performance"
                        ><span class="pds-text css-rnb2v4 e2vc0tk0" kind="Body_12_SemiBold" color="#FF349C">Advanced</span></a
                    >
                </div>
            </div>
        </div>
        <ul class="css-1t14w34-StyledMenuList e1bycd2o0">
            <li class="css-ix8wse-Container e101nguq0" @click="[this.$pageMove('/DashBoard'), chgTabMeIndex(0)]">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            :fill="tabTF != 0 ? '#AAAAB7' : '#FF349C'"
                            d="m17.058 11.419-1.14-.976-2.902 3.386-2.857-2-3.217 3.752 1.14.977 2.33-2.72 2.858 2 3.788-4.42Z"></path>
                        <path
                            :fill="tabTF != 0 ? '#AAAAB7' : '#FF349C'"
                            fill-rule="evenodd"
                            d="M12 1.498 1.502 10.805 2 12.117h1.75V22.25h16.5V12.117H22l.498-1.312L12 1.498Zm-8.024 9.119L12 3.502l8.024 7.115H18.75V20.75H5.25V10.617H3.976Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text e2vc0tk0" :class="tabTF != 0 ? 'css-1bh553v' : 'css-rnb2v4'" kind="Body_12_SemiBold" color="#FF349C"
                            >대시보드</span
                        >
                    </div>
                </div>
            </li>
            <li class="css-1khvnnm-Container e11tcuto1" @click="chgTabMeIndex(1)">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            :fill="tabTF != 1 ? '#AAAAB7' : '#FF349C'"
                            fill-rule="evenodd"
                            d="M17.75 3.778c-1.62.14-3.906.868-6.39 3.353-1.929 1.928-3.105 4.056-3.833 5.932a1.11 1.11 0 0 0 .269 1.17l.408.41 2.048-2.048 1.06 1.06-2.047 2.048.502.502a1.11 1.11 0 0 0 1.17.268 16.915 16.915 0 0 0 5.932-3.833c2.485-2.484 3.213-4.77 3.353-6.39a6.778 6.778 0 0 0-.099-1.932 5.143 5.143 0 0 0-.085-.356 5.099 5.099 0 0 0-.356-.086 6.78 6.78 0 0 0-1.933-.098Zm2.88-.408.298-.689.273.118.118.273-.689.298Zm-.69.295v-.002.002Zm-9.851 14.33a2.635 2.635 0 0 1-1.383-.73l-.502-.501-1.299 1.299-1.06-1.061 1.299-1.3-.41-.408a2.635 2.635 0 0 1-.73-1.383l-4.863-2.093L8.16 8.65a18.055 18.055 0 0 1 2.14-2.58c2.727-2.728 5.341-3.615 7.32-3.787a8.277 8.277 0 0 1 2.362.124 6.216 6.216 0 0 1 .862.24c.022.01.041.017.055.022l.018.008.006.002.003.001c.001.001.002.001-.296.69.689-.298.689-.297.69-.297v.004l.003.006.008.018.021.055c.018.046.04.11.067.19.051.16.116.387.174.672.117.572.209 1.381.124 2.362-.172 1.979-1.059 4.593-3.787 7.32a18.163 18.163 0 0 1-2.582 2.145l-3.166 7.014-2.093-4.863Zm1.579-.125.547 1.27.869-1.924c-.461.235-.933.453-1.416.654Zm-4.884-6.954-1.925.87 1.271.546c.2-.483.418-.955.654-1.416Zm6.79-4.178c1.013-1.014 2.666-1 3.677.01 1.012 1.012 1.025 2.665.011 3.679-1.014 1.013-2.666 1-3.678-.011-1.011-1.012-1.024-2.664-.01-3.678Zm2.617 1.071a1.106 1.106 0 0 0-1.557-.01c-.42.42-.423 1.122.011 1.556.434.434 1.137.43 1.556.011.42-.42.424-1.122-.01-1.557Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text e2vc0tk0" :class="tabTF != 1 ? 'css-1bh553v' : 'css-rnb2v4'" kind="Body_12_SemiBold" color="#787887"
                            >광고 관리</span
                        >
                    </div>
                    <div class="css-2xdu6v-IconWrapper e11tcuto0">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" :style="tabTF != 1 ? '' : 'transform:rotate(180deg)'">
                            <path
                                :fill="tabTF != 1 ? '#C1C1CB' : '#FF349C'"
                                fill-rule="evenodd"
                                d="m3.47 8.53 1.06-1.06L12 14.94l7.47-7.47 1.06 1.06L12 17.06 3.47 8.53Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <ul v-if="tabTF == 1">
                    <li class="css-1530ewp-MenuContainer e1yg31530" v-for="(item, index) in adManageList" :key="item.val + index" @click="[this.$pageMove(item.path), chgCla(index)]">
                        <div spacing="4" class="css-1ioqd1z eayv39d0">
                            <span class="pds-text e2vc0tk0" :class="sttlmanInd == index + 1 ? 'css-rnb2v4' : 'css-1bh553v'" kind="Body_12_SemiBold" color="#787887">{{ item.title }}</span>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="css-1khvnnm-Container e11tcuto1">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path fill="#AAAAB7" d="m5.25 13 2.5-1v8h-2.5v-7ZM10.75 5l2.5-1v16h-2.5V5ZM16.25 8l2.5-1v13h-2.5V8Z"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">지그재그 인사이트</span
                        ><span class="pds-badge css-58ak1x">N</span>
                    </div>
                    <div class="css-2xdu6v-IconWrapper e11tcuto0">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                            <path
                                fill="#C1C1CB"
                                fill-rule="evenodd"
                                d="m3.47 8.53 1.06-1.06L12 14.94l7.47-7.47 1.06 1.06L12 17.06 3.47 8.53Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </li>
            <li class="css-1khvnnm-Container e11tcuto1">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="m1.084 17.876 10.5-7h.832l10.5 7-.416 1.374h-21l-.416-1.374Zm2.893-.126h16.046L12 12.401 3.977 17.75Z"
                            clip-rule="evenodd"></path>
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="M12 6.25c-.643 0-1.25.574-1.25 1.393h-1.5c0-1.548 1.183-2.893 2.75-2.893s2.75 1.345 2.75 2.893c0 1.29-.82 2.437-2 2.785V11.5h-1.5V9.786a.75.75 0 0 1 .75-.75c.643 0 1.25-.574 1.25-1.393 0-.819-.607-1.393-1.25-1.393Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">상품 관리</span>
                    </div>
                    <div class="css-2xdu6v-IconWrapper e11tcuto0">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                            <path
                                fill="#C1C1CB"
                                fill-rule="evenodd"
                                d="m3.47 8.53 1.06-1.06L12 14.94l7.47-7.47 1.06 1.06L12 17.06 3.47 8.53Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </li>
            <li class="css-ix8wse-Container e101nguq0">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="M18 14.5V19H2V5h16v4.5l4.5-3v11l-4.5-3Zm-14.5-8h13v11h-13v-11ZM18 12.78l3 1.911V9.305l-3 1.916v1.558Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">동영상 등록/관리</span
                        ><span class="pds-badge css-19lbavy">Beta</span>
                    </div>
                </div>
            </li>
            <li class="css-1khvnnm-Container e11tcuto1">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="M4.946 5.25H1.5v-1.5h4.79l.33 3h15.882l-3.088 10.5H6.27l-1.323-12Zm1.84 3 .827 7.5h10.679l2.206-7.5H6.786Z"
                            clip-rule="evenodd"></path>
                        <path fill="#AAAAB7" d="M11 20a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16.5 21.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">주문 관리</span>
                    </div>
                    <div class="css-2xdu6v-IconWrapper e11tcuto0">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                            <path
                                fill="#C1C1CB"
                                fill-rule="evenodd"
                                d="m3.47 8.53 1.06-1.06L12 14.94l7.47-7.47 1.06 1.06L12 17.06 3.47 8.53Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </li>
            <li class="css-1khvnnm-Container e11tcuto1">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="M14.25 5.75H5v-1.5h10.75v5h4.925l3.075 2.924v5.576h-2.76a3 3 0 1 1-5.98 0h-3.02a3 3 0 1 1-5.98 0H4v-1.5h2.563A2.996 2.996 0 0 1 9 15c1.004 0 1.892.493 2.437 1.25h2.813V5.75Zm1.5 10.266V10.75h4.325l2.175 2.067v3.433h-1.813A2.996 2.996 0 0 0 18 15c-.896 0-1.7.393-2.25 1.016ZM9 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19.5 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                            clip-rule="evenodd"></path>
                        <path fill="#AAAAB7" d="M3 9.75h3v-1.5H3v1.5ZM5 13.75H0v-1.5h5v1.5ZM8.099 9.402V8H12l-1.784 4.595h1.685V14H8l1.797-4.598H8.099Z"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">직진배송</span>
                    </div>
                    <div class="css-2xdu6v-IconWrapper e11tcuto0">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                            <path
                                fill="#C1C1CB"
                                fill-rule="evenodd"
                                d="m3.47 8.53 1.06-1.06L12 14.94l7.47-7.47 1.06 1.06L12 17.06 3.47 8.53Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </li>
            <li class="css-1khvnnm-Container e11tcuto1">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="M4.25 9a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM7 7.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
                            clip-rule="evenodd"></path>
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="M1.25 3.25h21.5v17.5H1.25V3.25Zm1.5 1.5v14.5h2.928l9.808-10.324 5.764 5.763V4.75H2.75Zm18.5 12.06-5.736-5.736-7.767 8.176H21.25v-2.44Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">프로모션 관리</span
                        ><span class="pds-badge css-58ak1x">N</span>
                    </div>
                    <div class="css-2xdu6v-IconWrapper e11tcuto0">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                            <path
                                fill="#C1C1CB"
                                fill-rule="evenodd"
                                d="m3.47 8.53 1.06-1.06L12 14.94l7.47-7.47 1.06 1.06L12 17.06 3.47 8.53Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </li>
            <li class="css-1khvnnm-Container e11tcuto1">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="M2.5 4.5v4.041c.778.128 1.451.539 1.936 1.023C5.02 10.15 5.5 11.012 5.5 12s-.479 1.85-1.064 2.436c-.485.484-1.158.895-1.936 1.023V19.5h19v-4.041c-.777-.128-1.451-.539-1.936-1.023C18.98 13.85 18.5 12.988 18.5 12s.479-1.85 1.064-2.436c.485-.484 1.159-.895 1.936-1.023V4.5h-19ZM1 3h22v7h-1c-1 0-2 1-2 2s1 2 2 2h1v7H1v-7h1c1 0 2-1 2-2s-1-2-2-2H1V3Z"
                            clip-rule="evenodd"></path>
                        <path fill="#AAAAB7" fill-rule="evenodd" d="m8.47 14.47 6-6 1.06 1.06-6 6-1.06-1.06Z" clip-rule="evenodd"></path>
                        <path fill="#AAAAB7" d="M11 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">혜택 관리</span
                        ><span class="pds-badge css-58ak1x">N</span>
                    </div>
                    <div class="css-2xdu6v-IconWrapper e11tcuto0">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                            <path
                                fill="#C1C1CB"
                                fill-rule="evenodd"
                                d="m3.47 8.53 1.06-1.06L12 14.94l7.47-7.47 1.06 1.06L12 17.06 3.47 8.53Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </li>
            <li class="css-1khvnnm-Container e11tcuto1">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="m4.543 16.108-.59 3.94 3.899-.612.424.207a8.5 8.5 0 1 0-3.935-3.951l.202.416Zm-2.376 5.739.824-5.503A9.967 9.967 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.965 9.965 0 0 1-4.382-1.01l-5.451.857Z"
                            clip-rule="evenodd"></path>
                        <path
                            fill="#AAAAB7"
                            d="M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">메시지 관리</span
                        ><span class="pds-badge css-58ak1x">N</span>
                    </div>
                    <div class="css-2xdu6v-IconWrapper e11tcuto0">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                            <path
                                fill="#C1C1CB"
                                fill-rule="evenodd"
                                d="m3.47 8.53 1.06-1.06L12 14.94l7.47-7.47 1.06 1.06L12 17.06 3.47 8.53Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </li>
            <li class="css-1khvnnm-Container e11tcuto1">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="M2.25 2.25h19.5v19.5H2.25V2.25Zm1.5 1.5v5.534h16.5V3.75H3.75Zm16.5 7.034h-9.77v9.466h9.77v-9.466ZM8.98 20.25v-9.466H3.75v9.466h5.23Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">스토어 전시 관리</span
                        ><span class="pds-badge css-58ak1x">N</span>
                    </div>
                    <div class="css-2xdu6v-IconWrapper e11tcuto0">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                            <path
                                fill="#C1C1CB"
                                fill-rule="evenodd"
                                d="m3.47 8.53 1.06-1.06L12 14.94l7.47-7.47 1.06 1.06L12 17.06 3.47 8.53Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </li>
            <li class="css-ix8wse-Container e101nguq0">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="M6.625 5.457a.75.75 0 0 1 .518-.207h8a.75.75 0 0 1 .518.207l2.068 1.975h5.021v8.045h-2.307l.357.341-2.854 2.725a.75.75 0 0 1-1.035 0L15.714 17.4l-1.196 1.142a.75.75 0 0 1-1.036 0L12.286 17.4l-1.197 1.142a.75.75 0 0 1-1.035 0l-3.212-3.066H1.25V7.432h3.307l2.068-1.975Zm12 10.358-5.196-4.96-1.768 1.688a.75.75 0 0 1-1.036 0L7.768 9.815a.75.75 0 0 1 0-1.085l2.074-1.98H7.443L5.158 8.932H2.75v5.045h4.693l3.128 2.986 1.197-1.142a.75.75 0 0 1 1.036 0L14 16.963l1.196-1.142a.75.75 0 0 1 1.036 0l1.197 1.142 1.2-1.145-.004-.003Zm-6.61-9.065L9.372 9.273l1.77 1.69 2.287-2.182 5.443 5.196h2.378V8.932h-4.122L14.842 6.75h-2.827Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">파트너 지원 프로그램</span
                        ><span class="pds-badge css-58ak1x">N</span>
                    </div>
                </div>
            </li>
            <li class="css-1khvnnm-Container e11tcuto1">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            fill="#AAAAB7"
                            d="M12 3.75A6.25 6.25 0 0 0 5.75 10v5H2.5v-5h1.75a7.75 7.75 0 1 1 15.5 0h1.75v5h-1.824a6.758 6.758 0 0 1-4.752 5.472 1.5 1.5 0 1 1-.309-1.475A5.252 5.252 0 0 0 18.25 14v-4A6.25 6.25 0 0 0 12 3.75Z"></path>
                        <path
                            fill="#AAAAB7"
                            d="M9.5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14.5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13.5 13a1.5 1.5 0 0 1-3 0h-1a2.5 2.5 0 0 0 5 0h-1Z"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">문의/리뷰</span>
                    </div>
                    <div class="css-2xdu6v-IconWrapper e11tcuto0">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                            <path
                                fill="#C1C1CB"
                                fill-rule="evenodd"
                                d="m3.47 8.53 1.06-1.06L12 14.94l7.47-7.47 1.06 1.06L12 17.06 3.47 8.53Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </li>
            <li class="css-1khvnnm-Container e11tcuto1">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0" @click="chgTabMeIndex(13)">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            :fill="tabTF != 13 ? '#AAAAB7' : '#FF349C'"
                            fill-rule="evenodd"
                            d="m10.143 16.23 1.321-4.112h.863l1.091 4.076 1.439.036 1.321-4.112H18v-1.5h-1.34l.768-2.388L16 7.77l-.915 2.848h-1.607l-.753-2.812-1.439-.036-.915 2.848H8.764L8.01 7.806l-1.449.388.65 2.424H6v1.5h1.612l1.092 4.076 1.439.036Zm-.978-4.112h.723l-.394 1.227-.329-1.227Zm5.043 1.227-.328-1.227h.723l-.395 1.227Z"
                            clip-rule="evenodd"></path>
                        <path
                            :fill="tabTF != 13 ? '#AAAAB7' : '#FF349C'"
                            fill-rule="evenodd"
                            d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-1.5 0a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text e2vc0tk0" :class="tabTF != 13 ? 'css-1bh553v' : 'css-rnb2v4'" kind="Body_12_SemiBold" color="#787887"
                            >정산 관리</span
                        >
                    </div>
                    <div class="css-2xdu6v-IconWrapper e11tcuto0" :style="tabTF != 13 ? '' : 'transform:rotate(180deg)'">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                            <path
                                :fill="tabTF != 13 ? '#C1C1CB' : '#FF349C'"
                                fill-rule="evenodd"
                                d="m3.47 8.53 1.06-1.06L12 14.94l7.47-7.47 1.06 1.06L12 17.06 3.47 8.53Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <ul v-show="tabTF == 13">
                    <li
                        class="css-1530ewp-MenuContainer e1yg31530"
                        v-for="(item, index) in manageLiList"
                        :key="item.val + index"
                        @click="[this.$pageMove(item.path), chgCla(index)]">
                        <div spacing="4" class="css-1ioqd1z eayv39d0">
                            <span
                                class="pds-text e2vc0tk0"
                                :class="sttlmanInd == index + 1 ? 'css-rnb2v4' : 'css-1bh553v'"
                                kind="Body_12_SemiBold"
                                color="#787887"
                                >{{ item.title }}</span
                            >
                        </div>
                    </li>
                </ul>
            </li>
            <li class="css-1khvnnm-Container e11tcuto1">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path fill="#AAAAB7" fill-rule="evenodd" d="M11.25 17.5v-7h1.5v7h-1.5ZM11.25 8.5v-2h1.5v2h-1.5Z" clip-rule="evenodd"></path>
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Zm0 1.5c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">스토어 관리</span>
                    </div>
                    <div class="css-2xdu6v-IconWrapper e11tcuto0">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                            <path
                                fill="#C1C1CB"
                                fill-rule="evenodd"
                                d="m3.47 8.53 1.06-1.06L12 14.94l7.47-7.47 1.06 1.06L12 17.06 3.47 8.53Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </li>
            <li class="css-ix8wse-Container e101nguq0">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="m23.1 6.54-4.654-2.541-6.534 10.7-.392 3.051H9.333a1.017 1.017 0 0 1-.043-.044 4.855 4.855 0 0 1-.398-.536l-.025-.037c-.14-.206-.314-.463-.497-.667-.161-.18-.512-.534-1.022-.53-.63.004-.907.517-1.001.73-.085.19-.152.435-.2.613l-.03.109c-.043.148-.078.25-.109.319l-.014-.031a2.736 2.736 0 0 1-.122-.37c-.147-.543-.267-1.292-.377-1.982l-.07-.436c-.073-.447-.198-.908-.44-1.291-.257-.41-.65-.726-1.195-.822-.59-.104-1.076.128-1.414.433-.323.29-.545.67-.69.998-.63 1.413-.53 2.928 0 4.387l.257.705 1.41-.512-.257-.705c-.438-1.207-.47-2.303-.04-3.265.099-.224.216-.396.324-.493.09-.082.127-.075.149-.071h.001c.065.012.118.036.187.145.086.136.168.369.228.734l.063.396c.11.688.245 1.543.416 2.172.105.386.245.792.519 1.091.328.359.74.46 1.13.46.536 0 .905-.286 1.126-.608.179-.26.28-.566.344-.788l.108.158.006.009c.146.214.331.488.533.705.177.191.53.524 1.032.524h2.949l.057.036a1.5 1.5 0 0 0 1.641-.064l2.628-1.868L23.101 6.54ZM18.983 6l-5.623 9.208L13 18l2.377-1.69L21 7.102 18.982 6ZM7.179 17.394a.041.041 0 0 1-.009-.006l.009.006Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">계약 정보 관리</span>
                    </div>
                </div>
            </li>
            <li class="css-ix8wse-Container e101nguq0">
                <div height="60" spacing="8" class="css-1xi1tjr eayv39d0">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path fill="#AAAAB7" fill-rule="evenodd" d="m4 14.96 13 4.875V4.165L4 9.04v5.92ZM2.5 8v8l16 6V2l-16 6Z" clip-rule="evenodd"></path>
                        <path
                            fill="#AAAAB7"
                            fill-rule="evenodd"
                            d="m7.295 22.256-2-5.5 1.41-.512 2 5.5-1.41.512ZM20.75 12a3.25 3.25 0 0 0-3.25-3.25v-1.5a4.75 4.75 0 1 1 0 9.5v-1.5A3.25 3.25 0 0 0 20.75 12ZM7.75 17V7h1.5v10h-1.5Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div spacing="4" class="css-1ioqd1z eayv39d0">
                        <span class="pds-text css-1bh553v e2vc0tk0" kind="Body_12_SemiBold" color="#787887">공지사항</span>
                        <div class="css-1mdgzzf-NewIconWrapper e2ly1b80">
                            <svg width="9" height="9" fill="none" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M2 22h5.489V9.53h.137L15.86 22H22V2h-5.489v11.19h-.103L8.964 2H2v20Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="css-to1l0r-StyledContainer e1pd3zha1">
            <div class="css-3qr22f-StyledRow e1pd3zha0">
                <button type="button" class="pastel-ui-button css-10h9yuq">
                    <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                        <rect width="13" height="13" x="0.5" y="0.5" stroke="#ffffff" rx="6.5"></rect>
                        <path fill="#ffffff" d="M3.733 6.533h6.533v.933H3.733z"></path>
                        <path fill="#ffffff" d="M6.533 3.733h.933v6.533h-.933z"></path></svg
                    >&nbsp;원클릭 판매채널 확장
                </button>
            </div>
            <div class="css-3qr22f-StyledRow e1pd3zha0">
                <button type="button" class="pastel-ui-button css-j2ysfg">
                    <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                        <rect width="13" height="13" x="0.5" y="0.5" stroke="#ffffff" rx="6.5"></rect>
                        <path fill="#ffffff" d="M3.733 6.533h6.533v.933H3.733z"></path>
                        <path fill="#ffffff" d="M6.533 3.733h.933v6.533h-.933z"></path></svg
                    >&nbsp;글로벌 판매 시작하기
                </button>
            </div>
            <div class="css-3qr22f-StyledRow e1pd3zha0">
                <button type="button" class="pastel-ui-button css-j2ysfg">
                    <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                        <rect width="13" height="13" x="0.5" y="0.5" stroke="#ffffff" rx="6.5"></rect>
                        <path fill="#ffffff" d="M3.733 6.533h6.533v.933H3.733z"></path>
                        <path fill="#ffffff" d="M6.533 3.733h.933v6.533h-.933z"></path></svg
                    >&nbsp;추가 입점 신청
                </button>
            </div>
        </div>
        <div class="css-1xymohc-StyledContainer e5pla902">
            <div>
                <div class="css-3uax4t-Label e5pla901">관련 사이트 바로가기</div>
                <div class="css-1kk49ip-Desc e5pla900" style="cursor: pointer">
                    파트너라운지<svg width="12" height="12" fill="none" viewBox="0 0 14 14" style="margin-left: 4px">
                        <mask id="OutlinkTwo_14_svg__a" width="14" height="14" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha">
                            <path fill="#fff" fill-rule="evenodd" d="M5.833 0v8.167H14V14H0V0h5.833Z" clip-rule="evenodd"></path>
                        </mask>
                        <g mask="url(#OutlinkTwo_14_svg__a)">
                            <path
                                fill="#787887"
                                d="M5.833 1.167h-3.5a1.155 1.155 0 0 0-1.166 1.166v9.334a1.155 1.155 0 0 0 1.166 1.166h9.334a1.155 1.155 0 0 0 1.166-1.166V8.248H14v3.419c0 .618-.245 1.213-.688 1.645a2.363 2.363 0 0 1-1.645.688H2.333a2.294 2.294 0 0 1-1.645-.688A2.363 2.363 0 0 1 0 11.667V2.333C0 1.715.245 1.12.688.688A2.363 2.363 0 0 1 2.333 0h3.489l.011 1.167Z"></path>
                        </g>
                        <path
                            fill="#787887"
                            fill-rule="evenodd"
                            d="M12.833 0H8.167v1.167h3.838L4.97 8.213l.817.817 7.046-7.035v3.838H14V0h-1.167Z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
            <div>
                <div class="css-3uax4t-Label e5pla901">고객센터</div>
                <div class="css-1kk49ip-Desc e5pla900">(02) 1670-8051</div>
            </div>
            <div>
                <div class="css-3uax4t-Label e5pla901">운영 시간</div>
                <div class="css-1kk49ip-Desc e5pla900">평일 09:00~18:00<br />토/일/공휴일 휴무</div>
            </div>
        </div>
        <button class="css-1t4a3he-StyledButton eezbr3f1" style="top: calc(50vh + 0px)">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16" class="css-1wzg4l8-StyledIconArrow eezbr3f0">
                <path fill="#ffffff" d="m5 8 4.243-4.243.707.707-4.243 4.243z"></path>
                <path fill="#ffffff" d="m5 8 .707-.707 4.243 4.243-.707.707z"></path>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    data: () => ({
        tabTF: 0, //정산관리 탭 true/false
        sttlmanInd: 0,
    }),
    methods: {
        chgCla(i) {
            this.sttlmanInd = i + 1;
        },
        chgTabMeIndex(i) {
            if (this.tabTF != i) {
                this.sttlmanInd = 0;
            }
            this.tabTF = i;
        },
    },
    props: {
        adManageList: {
            type: Array,
            default: () => [
                {
                    title: "[지그재그] 파워업 AI 광고",
                    val: "adlist00",
                    path: "/PowerUpAiAd",
                },
                {
                    title: "[지그재그] 어텐션 광고",
                    val: "adlist00",
                    path: "#",
                },
                {
                    title: "[지그재그] 프리미엄 디스플레이 광고",
                    val: "adlist00",
                    path: "#",
                },
                {
                    title: "[패션바이카카오] 핫 광고",
                    val: "adlist00",
                    path: "#",
                },
                {
                    title: "광고비 관리",
                    val: "adlist00",
                    path: "#",
                },
                {
                    title: "광고 알림 관리",
                    val: "adlist00",
                    path: "#",
                },
            ],
        },
        manageLiList: {
            type: Array,
            default: () => [
                {
                    title: "일별 스토어 정산",
                    val: "list00",
                    path: "/settleManage/DailyStoreSettlement",
                },
                {
                    title: "일별 스토어 공제 정산",
                    val: "list00",
                    path: "#",
                },
                {
                    title: "일별 스토어 환급 정산",
                    val: "list00",
                    path: "#",
                },
                {
                    title: "스토어 공제 등록 현환",
                    val: "list00",
                    path: "#",
                },
                {
                    title: "정산예정내역",
                    val: "list00",
                    path: "#",
                },
                {
                    title: "정산기준내역",
                    val: "list00",
                    path: "#",
                },
                {
                    title: "세금계산서",
                    val: "list00",
                    path: "#",
                },
                {
                    title: "국내 부가세 참고자료",
                    val: "list00",
                    path: "#",
                },
                {
                    title: "해외 부가세 참고자료",
                    val: "list00",
                    path: "#",
                },
                {
                    title: "스토어 쿠폰 정산 상세 내역",
                    val: "list00",
                    path: "#",
                },
                {
                    title: "스토어 수수료 정산 상세 내역",
                    val: "list00",
                    path: "#",
                },
            ],
        },
    },
};
</script>
