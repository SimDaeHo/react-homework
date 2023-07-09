<template>
    <div class="css-16fremm-StyledTooltip e1gz3wmf0" style="position: absolute; inset: auto auto 0px 0px; transform: translate(-150px, -25px); z-index: 1000">
        <div width="300" spacing="12" class="css-q7jt1a e1spskf00">
            <div class="pastel-ui-text css-1yx410a e1mejzrt0">{{ tooltipTitle }}</div>
            <div v-html="tooltiptxt" class="pastel-ui-text css-1voxopm e1mejzrt0"></div>
        </div>
        <div id="arrow" style="position: absolute; left: 0px; transform: translate(150px, -5px)" class="top"></div>
    </div>
</template>

<script>
export default {
    watch: {
        "tooltipNum": function (newTTNum) {
            this.$nextTick(function () {
                if (newTTNum == "") {
                    this.tooltipTitle = "";
                    this.tooltiptxt = "";
                    this.translateVal = "";
                }
                if (newTTNum == "dashBoard002") {
                    this.tooltipTitle = "방문자";
                    this.tooltiptxt = "상품 상세페이지를 방문한 사용자 수 입니다. <br> 하루에 여러번 방문해도 1로 집계합니다.";
                }
                if (newTTNum == "dashBoard003") {
                    this.tooltipTitle = "주문액";
                    this.tooltiptxt = "주문 완료된 내역을 표시합니다.(미입금 포함) <br> 배송비가 포함되지 않은 총 상품 주문 금액입니다.";
                }
                if (newTTNum == "dashBoard004") {
                    this.tooltipTitle = "주문수";
                    this.tooltiptxt =
                        "주문 완료된 내역을 표시합니다.(미입금 포함) <br> 주문 단위로 표시됩니다.(1건의 주문에 서로 다른 2개의 상품이 있을 경우 1건으로 표시됩니다.)";
                }
                if (newTTNum == "dashBoard005") {
                    this.tooltipTitle = "상품클릭";
                    this.tooltiptxt = "상품 목록에서 상품을 클릭한 수를 표시합니다. <br> 자사몰 내에서의 이동은 집계하지 않습니다.";
                }
                if (newTTNum == "dashBoard006") {
                    this.tooltipTitle = "주문금액";
                    this.tooltiptxt = "미입금/취소/반품을 포함한 상품 주문 완료 금액입니다. <br> 배송비가 포함되지 않습니다.";
                }
                if (newTTNum == "dashBoard007") {
                    this.tooltipTitle = "주문수";
                    this.tooltiptxt =
                        "미입금/취소/반품을 포함한 상품 주문 완료 수 입니다. <br> 1건의 주문에 서로 다른 2개의 상품이 있을 경우 2건으로 표시합니다.";
                }
                if (newTTNum == "dashBoard008") {
                    this.tooltipTitle = "상품클릭";
                    this.tooltiptxt = "상품 목록에서 상품을 클릭한 수를 표시합니다. <br> 자사몰 내에서의 이동은 집계하지 않습니다.,";
                }
                if (newTTNum == "dashBoard009") {
                    this.tooltipTitle = "상품 찜";
                    this.tooltiptxt = "찜 변화량입니다. <br> 음수인 경우, 추가보다 제거가 더 많았다는 뜻입니다.";
                }
                if (newTTNum == "dashBoard0010") {
                    this.tooltipTitle = "방문자";
                    this.tooltiptxt = "상품을 클릭한 사용자 수 입니다. <br> 하루에 여러 번 방문해도 1로 집계합니다.,";
                }
                if (newTTNum == "dashBoard0011") {
                    this.tooltipTitle = "즐겨찾기";
                    this.tooltiptxt = "즐겨찾기 변화량입니다. 음수인 경우, 추가보다 제거가 더 많았다는 뜻입니다.";
                }
            });
        },
    },
    computed: {},
    props: ["tooltipNum"],

    data: () => ({
        tooltipTitle: "",
        tooltiptxt: "",
    }),
};
</script>
