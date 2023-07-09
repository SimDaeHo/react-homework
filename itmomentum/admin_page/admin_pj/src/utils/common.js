export default {
  install(app){
    /**
    * 
    * @param {
    * }
    * @returns YYYY.MM.DD
    * 
    * 오늘 날짜 YYYY.MM.DD format
    */
    app.config.globalProperties.$formattingToday = function() {
      const date = new Date();
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      month = month > 9 ? month : `0${month}`;
      const day = date.getDate();
      return `${year}.${month}.${day}`;
    }

    /**
    * 
    * @param { YYYYMMDD (년, 월, 일 있어도 되지만 YYYY MM DD 형태 있어야함 ex.2023년 07월 01일) 
    * }
    * @returns YYYY.MM.DD
    * 
    */
    app.config.globalProperties.$formattingDate = function(item) {
      if(!item) return "";
      const regex = /[^0-9]/g;
      const regDate = item.replace(regex, "");
      const year = regDate.substr(0, 4);
      const month = regDate.substr(4, 2);
      var day = regDate.substr(6);

      if(day.length < 2){
        day =  "0" + regDate.substr(6)
      }else{
        day = regDate.substr(6)
      }
      
      return `${year}.${month}.${day}`;
    }

    /**
     * @param { link }
     * 
     * router에 등록된 link 페이지로 이동
     */
    app.config.globalProperties.$pageMove = function(link){
      this.$router.push({ path: link });
    }

  }
} 