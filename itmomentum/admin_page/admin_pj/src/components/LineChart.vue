<template>
    <div>
        <canvas ref="chartCanvas" style="box-sizing: border-box; display: block; height: 150px; width: 486px" width="486" height="150"></canvas>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Chart, registerables } from "chart.js";

export default defineComponent({
    mounted() {
        // 바 그래프 데이터 정의
        const barChartData = {
            labels: [
                "06.11",
                "06.12",
                "06.13",
                "06.14",
                "06.15",
                "06.16",
                "06.17",
                "06.18",
                "06.19",
                "06.20",
                "06.21",
                "06.22",
                "06.23",
                "06.24",
                "06.25",
                "06.26",
                "06.27",
                "06.28",
                "06.29",
                "06.30",
                "07.01",
                "07.02",
                "07.03",
                "07.04",
                "07.05",
                "07.06",
                "07.07",
                "07.08",
                "07.09",
                "07.10",
                "07.11",
            ],
            datasets: [
                {
                    type: "bar",
                    label: "클릭수",
                    data: [
                        4320, 4100, 5269, 6066, 6123, 4549, 6237, 5860, 6807, 8306, 10048, 8168, 8017, 7995, 8079, 7379, 8344, 10311, 8721, 8763, 9700, 10561,
                        7781, 10282, 11268, 9837, 9461, 9670, 10711, 9535, 11174,
                    ],
                    backgroundColor: "rgba(129, 209, 251, 0.5)",
                    borderColor: "rgb(129, 209, 251)",
                    yAxisID: "bar-y-axis",
                },
            ],
        };

        // 라인 차트 데이터 정의
        const lineChartData = {
            labels: [
                "06.11",
                "06.12",
                "06.13",
                "06.14",
                "06.15",
                "06.16",
                "06.17",
                "06.18",
                "06.19",
                "06.20",
                "06.21",
                "06.22",
                "06.23",
                "06.24",
                "06.25",
                "06.26",
                "06.27",
                "06.28",
                "06.29",
                "06.30",
                "07.01",
                "07.02",
                "07.03",
                "07.04",
                "07.05",
                "07.06",
                "07.07",
                "07.08",
                "07.09",
                "07.10",
                "07.11",
            ],
            datasets: [
                {
                    type: "line",
                    label: "노출수",
                    data: [
                        200032, 189432, 260883, 297562, 324928, 240478, 318383, 303178, 297001, 317842, 376504, 346705, 328041, 312164, 312641, 288640, 305658,
                        345342, 315045, 327267, 360453, 365696, 277991, 351960, 375436, 352963, 343620, 349171, 413819, 388381, 430956,
                    ],
                    borderColor: "rgb(71, 105, 247)",
                    pointBackgroundColor: "rgba(71, 105, 247, 1)",
                    tension: 0,
                    yAxisID: "line-y-axis",
                },
            ],
        };

        // 차트 생성
        Chart.register(...registerables);
        new Chart(this.$refs.chartCanvas, {
            type: "bar",
            data: {
                labels: barChartData.labels,
                datasets: [...lineChartData.datasets, ...barChartData.datasets],
            },
            options: {
                scales: {
                    "line-y-axis": {
                        position: "left",
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 450000,
                            min: 0,
                            stepSize: 90000,
                            color: "blue",
                        },
                    },
                    "bar-y-axis": {
                        position: "right",
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            stepSize: 2800,
                            suggestedMax: 15000, // 변경된 값
                            color: "skyblue",
                        },
                    },
                    x: {
                        grid: {
                            display: false, // 가로줄 제거
                        },
                    },
                },
                plugins: {
                    tooltip: {
                        backgroundColor: "#363644",
                        borderColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0,
                        titleFont: {
                            size: 13,
                            letterSpacing: -0.3,
                            color: "#C1C1CB",
                        },
                        bodyFont: {
                            size: 13,
                            color: "#C1C1CB",
                        },
                        callbacks: {
                            label: function (context) {
                                let label = "";
                                if (context.dataset.type === "line") {
                                    label += lineChartData.datasets[0].label + ": " + context.parsed.y.toLocaleString() + "회";
                                } else if (context.dataset.type === "bar") {
                                    label += barChartData.datasets[0].label + ": " + context.parsed.y.toLocaleString() + "회";
                                }
                                return label;
                            },
                            labelColor: function (context) {
                                if (context.dataset.type === "line") {
                                    return {
                                        borderColor: "rgba(0, 0, 0, 0)",
                                        backgroundColor: "rgba(71, 105, 247, 1)", // 하늘색으로 변경
                                        borderRadius: 5,
                                    };
                                } else if (context.dataset.type === "bar") {
                                    return {
                                        borderColor: "rgba(0, 0, 0, 0)",
                                        backgroundColor: "rgba(129, 209, 251, 0.5)", // 클릭수 아이콘의 색상
                                        borderRadius: 5,
                                    };
                                }
                            },
                            labelTextColor: function (context) {
                                if (context.dataset.type === "line") {
                                    return "#C1C1CB";
                                } else if (context.dataset.type === "bar") {
                                    return "#E7E7ED";
                                }
                            },
                        },
                        mode: "index",
                        intersect: true,
                    },
                    legend: {
                        display: false,
                    },
                },
                elements: {
                    bar: {
                        barThickness: 10, // 막대의 너비를 조정합니다.
                    },
                },
            },
        });
    },
});
</script>
