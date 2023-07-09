<template>
  <div id="mainFrame">
    <Header/>
    <div class="css-id6uat-StyledContainer egysmo42">
      <SideBarP/>
      <div class="mainWarp">
        <NoticeScrollBar></NoticeScrollBar>
        <router-view></router-view>
        <Footer/>
      </div>
    </div>

  </div>
</template>

<script>
import Header from './components/HeaderP'; //import 헤더 추가
import Footer from './components/FooterP'; //import 풋터 추가
import SideBarP from './components/SideBarP';
import NoticeScrollBar from './components/NoticeScrollBar.vue';
import './assets/css/fonts.css'
import './assets/css/common.css'

export default {
  name: 'App',
  components: {
    Header
    , Footer
    , SideBarP
    , NoticeScrollBar
  },

}
</script>

<style>
body {
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  color: #363644;
  line-height: 1.5;
}
body, button, div, p, table {
  font-family: 'pretendard', sans-serif;
}
#app {
  overflow: auto;
  background-color: #F1F2F8;
  position: absolute;
}
#app, body, html{
  height: 100%;
  width: 100%;
}
.css-id6uat-StyledContainer {
    display: flex;
    width: 100%;
    position: relative;
}
.mainWarp {
		flex: 1 0 0px;
		min-width: 0px;
	}

</style>
