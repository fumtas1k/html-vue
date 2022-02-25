let vm = new Vue({
  el: "#app",
  data: {
    removeFlag: false,
    removeName: "",
    name: "",
    course: "",
    acceptancePeriod: "",
    defaultLastId: 3,
    students: [
      { id: 1, name: '野呂浩良', course: '機械学習コース', acceptancePeriod: '2019年01月期' },
      { id: 2, name: '富永修司', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: '斉藤一起', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
    ],
    courseOptions: [
      { value: "", text: "--コースを選択--" },
      { value: "Webエンジニアコースフルタイム", text: "Webエンジニアコースフルタイム" },
      { value: "Webエンジニアウィークリーサポートコース", text: "Webエンジニアウィークリーサポートコース" },
      { value: "Webエンジニアステップアップコース(java)", text: "Webエンジニアステップアップコース" },
      { value: "Webエンジニアステップアップコース(Ruby)", text: "Webエンジニアステップアップコース(Ruby)" },
      { value: "Webエンジニアステップアップコース(PHP)", text: "Webエンジニアステップアップコース(PHP)" },
      { value: "Webエンジニアステップアップコース(Python)", text: "Webエンジニアステップアップコース(Python)" },
      { value: "機械学習エンジニアコース", text: "機械学習エンジニアコース" },
    ],
  },
  methods: {
    addStudent: function(){
      this.defaultLastId += 1;
      this.students.push({
        id: this.defaultLastId,
        name: this.name,
        course: this.course,
        acceptancePeriod: this.changeDate(this.acceptancePeriod)});
        this.dataClear();
    },
    changeDate: function(acceptancePeriod){
      let year_month = /(\d{4})-(\d{2})/.exec(acceptancePeriod);
      return `${year_month[1]}年${year_month[2]}月期`
    },
    dataClear: function(){
      this.name = "";
      this.course = "";
      this.acceptancePeriod = "";
    },
    changeFlag: function(){
      this.removeFlag = !this.removeFlag;
    },
    removeStudent: function(index){
      this.removeName = this.students[index].name;
      this.students.splice(index, 1);
      this.removeFlag = true;
      setTimeout(this.changeFlag, 1000);
    },
  },
  computed: {
    activeSubmit: function(){
      return !(this.name != "" && this.course != "" && this.acceptancePeriod != "");
    }
  },
})
