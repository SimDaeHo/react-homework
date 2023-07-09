<template>
    <div class="noticeBannerWrapper">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="noticeIcon">
            <path fill="#ffffff"
                d="M19.5 11.47c0-.8-.3-1.6-.9-2.1-.4-.5-1-.8-1.8-.9v-2.8c0-.3-.2-.5-.5-.6-.2-.1-.5-.1-.8 0l-5.1 2.4H7.7c-1.5 0-2.7 1.2-2.7 2.7v2.6c0 1.4 1.1 2.5 2.4 2.7l1.5 4.1 1.4-.5-1.3-3.6h1.4l5.4 2.4c.1 0 .2.1.3.1h.2c.1 0 .2-.1.4-.2.2-.2.3-.4.3-.7v-2.5c.7-.1 1.3-.4 1.8-.8.4-.69.7-1.49.7-2.3ZM6.3 12.78v-2.6c0-.7.6-1.3 1.3-1.3h2.3v5.2H7.6c-.7 0-1.3-.6-1.3-1.3Zm5 1.6v-5.8l4.1-1.9.1 9.6-4.2-1.9Zm6.4-1.8c-.2.2-.5.3-.7.4v-3c.4.1.6.3.7.4.3.3.4.7.4 1.1 0 .4-.1.8-.4 1.1Z">
            </path>
        </svg>
        <div class="swiper-container StyledNoticeWrapper">
            <div class="swiper-wrapper css-cu8sw1-StyledNoticeRoller ehb8v6h0">
                <div class="swiper-slide Notice" v-for="(noticeItem, index) in NoticeList" :key="index">
                    <a class="noticeLink " :href="noticeItem.link">{{ noticeItem.title }}</a>
                    <span>{{ noticeItem.date }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper';
import 'swiper/swiper-bundle.css';

import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([ Autoplay ]);

export default {
    data: () => ({

    }),
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        NoticeList: {
            type: Array,
            default: () => [
                {
                    title: '[일반] [지그재그 인사이트] 메시지 광고비 지원 프로그램 종료',
                    date: '2023.04.27',
                    link: '#'
                },
                {
                    title: '[일반] [카카오스타일] 1원 단위 판매가 상품 지원 방식 변경 안내',
                    date: '2023.06.05',
                    link: '#'
                },
                {
                    title: '[기획전] [참여 모집] 패션 by kakao 7월 3주 - 8월 1주차 성장지원 스토어 모집 안내',
                    date: '2023.05.28',
                    link: '#'
                },
                {
                    title: '[기획전] [참여 모집] 7월 2주차 #주말특가 기획전',
                    date: '2023.06.29',
                    link: '#'
                },
                {
                    title: '[광고] [광고] 노출지원 프로그램 광고주 모집 안내 : 월 매출 500만원 이하 광고주 (접수 중)',
                    date: '2023.03.11',
                    link: '#'
                },
            ],
        },

    },
    mounted() {
        new Swiper('.swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            speed: 3000,
            autoHeight: 'auto',
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    },
}
</script>