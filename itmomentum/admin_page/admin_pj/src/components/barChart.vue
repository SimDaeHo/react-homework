<template>
    <div>
        <canvas id="chart" role="img" height="240" width="969" class="css-1xncmkv-StyledBar e1n3ostm0" style="display: block; box-sizing: border-box; height: 240px; width: 969px;"></canvas>
    </div>
</template>

<script>
import {Chart, BarElement, BarController, LinearScale, CategoryScale} from 'chart.js/auto';
Chart.register(BarElement, BarController, LinearScale, CategoryScale);
import junChartData from '../utils/junBarChartData.js'
import julyChartData from '../utils/julyBarChartData.js'

//수정필요 여기 페이지 전체 데이터 수정및 기능 수정해야함.
export default {
    name: "barChart",
    methods: {
        //주문금액 데이터
        orderAmountData() {
            this.myChart = new Chart(document.getElementById('chart').getContext('2d'), {
                type: 'bar'
                //수정필요 데이터 받아와서 세팅해줄것 지금은 임의로 데이터 맵핑
                , data: junChartData[0]
                ,options: this.option
            });
        },
        //주문 수 데이터
        orderCountData() {
            this.myChart = new Chart(document.getElementById('chart').getContext('2d'), {
                type: 'bar'
                //수정필요 데이터 받아와서 세팅해줄것 지금은 임의로 데이터 맵핑
                , data: junChartData[1]
                , options: this.option
            });
        },
        itemClickData() {
            this.myChart = new Chart(document.getElementById('chart').getContext('2d'), {
                type: 'bar'
                //수정필요 데이터 받아와서 세팅해줄것 지금은 임의로 데이터 맵핑
                , data: junChartData[2]
                , options: this.option
            });
        },
        itemLikeCDate() {
            this.myChart = new Chart(document.getElementById('chart').getContext('2d'), {
                type: 'bar'
                //수정필요 데이터 받아와서 세팅해줄것 지금은 임의로 데이터 맵핑
                , data: junChartData[3]
                , options: this.option
            });
        },
        consumerCData() {
            this.myChart = new Chart(document.getElementById('chart').getContext('2d'), {
                type: 'bar',
                //수정필요 데이터 받아와서 세팅해줄것 지금은 임의로 데이터 맵핑
                data: junChartData[4]
                ,options: this.option
            });
        },
        favoriteCData() {
            this.myChart = new Chart(document.getElementById('chart').getContext('2d'), {
                type: 'bar',
                //수정필요 데이터 받아와서 세팅해줄것 지금은 임의로 데이터 맵핑
                data:junChartData[5]
                ,options: this.option
            });
        },
        julyorderAmountData() {
            this.myChart = new Chart(document.getElementById('chart').getContext('2d'), {
                type: 'bar',
                //수정필요 데이터 받아와서 세팅해줄것 지금은 임의로 데이터 맵핑
                data: julyChartData[0]
                , options: this.option
            });
        },
        //주문 수 데이터
        julyorderCountData() {
            this.myChart = new Chart(document.getElementById('chart').getContext('2d'), {
                type: 'bar',
                //수정필요 데이터 받아와서 세팅해줄것 지금은 임의로 데이터 맵핑
                data: julyChartData[1]
                , options: this.option
            });
        },
        julyitemClickData() {
            this.myChart = new Chart(document.getElementById('chart').getContext('2d'), {
                type: 'bar',
                //수정필요 데이터 받아와서 세팅해줄것 지금은 임의로 데이터 맵핑
                data: julyChartData[2]
                , options: this.option
            });
        },
        julyitemLikeCDate() {
            this.myChart = new Chart(document.getElementById('chart').getContext('2d'), {
                type: 'bar',
                //수정필요 데이터 받아와서 세팅해줄것 지금은 임의로 데이터 맵핑
                data: julyChartData[3]
                , options: this.option
            });
        },
        julyconsumerCData() {
            this.myChart = new Chart(document.getElementById('chart').getContext('2d'), {
                type: 'bar',
                //수정필요 데이터 받아와서 세팅해줄것 지금은 임의로 데이터 맵핑
                data: julyChartData[4]
                , options: this.option
            });
        },
        julyfavoriteCData() {
            this.myChart = new Chart(document.getElementById('chart').getContext('2d'), {
                type: 'bar',
                //수정필요 데이터 받아와서 세팅해줄것 지금은 임의로 데이터 맵핑
                data: julyChartData[5]
                , options: this.option
            });
        },

        //년 또는 탭 선택시 데이터표 변경
        canvasSetFuc(){
            if(this.date == '2023년 06월'){
                if(this.memuId == 'msm001'){
                    this.orderAmountData();
                }
                if(this.memuId == 'msm002'){
                    this.orderCountData();
                }
                if(this.memuId == 'msm003'){
                    this.itemClickData();
                }
                if(this.memuId == 'msm004'){
                    this.itemLikeCDate();
                }
                if(this.memuId == 'msm005'){
                    this.consumerCData();
                }
                if(this.memuId == 'msm006'){
                    this.favoriteCData();
                }
            }
            if(this.date == '2023년 07월'){
                if(this.memuId == 'msm001'){
                    this.julyorderAmountData();
                }
                if(this.memuId == 'msm002'){
                    this.julyorderCountData();
                }
                if(this.memuId == 'msm003'){
                    this.julyitemClickData();
                }
                if(this.memuId == 'msm004'){
                    this.julyitemLikeCDate();
                }
                if(this.memuId == 'msm005'){
                    this.julyconsumerCData();
                }
                if(this.memuId == 'msm006'){
                    this.julyfavoriteCData();
                }
            }
        }
    },

    created(){
        // console.log(this.param)
    },
    mounted() {
        this.canvas = document.getElementById('chart');
        this. ctx = this.canvas.getContext('2d')
        this.julyorderAmountData();
    },
    watch: {
        'param.date': async function(newDate){
            if(Chart.getChart(this.canvas)){
                Chart.getChart(this.canvas)?.destroy();
            }
            this.date = newDate
            this.canvasSetFuc();

        },
        'param.selcMenuId': function(newMenuId){
            if(Chart.getChart(this.canvas)){
                Chart.getChart(this.canvas)?.destroy();
            }
            this.memuId = newMenuId
            this.canvasSetFuc();
        }

    },
    data() {
        return {
            myChart: null
            , date: '2023년 07월'
            , memuId: 'msm001'
            , canvas: ''
            , ctx: ''
            , junChartData: junChartData
		    , julyChartData: julyChartData
            , option: {interaction: {mode: 'index'}, maintainAspectRatio :false, scales: { x:{ stacked: true, grid: { display: false }}, y: { stacked: true } },
                    plugins:{
                        legend:{ display: false },
                        tooltip:{ yAlign: 'bottom',
                            callbacks:{
                                title: (context) => {
                                    let title = (((this.date + context[0].label).replace('일', ' ')).replace("월", ". ")).replace('년', '.');
                                    return title;
                                }
                                // label: function(tooltipItem, data){
                                //     var label = data.datasets[tooltipItem.datasetIndex].label.sort((a, b) => b.order - a.value) || '';
                                //     return label;
                                // }

                            }
                        }
                    },
            }
        }
    },
    props:["param"]
}
</script>
<style>
</style>
