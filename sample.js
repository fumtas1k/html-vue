new Vue({
  el: "#app",
  data: {
    name: "",
    course: "",
    acceptancePeriod: "",
    students: [
      { name: '野呂浩良', course: '機械学習コース', acceptancePeriod: '2019年01月期' },
      { name: '富永修司', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
      { name: '斉藤一起', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
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
      if(this.name != "" && this.course != "" && this.acceptancePeriod != ""){
        let year_month = /(\d{4})-(\d{2})/.exec(this.acceptancePeriod);
        this.students.push({name: this.name, course: this.course, acceptancePeriod: `${year_month[1]}年${year_month[2]}月期`})
        this.name = ""
        this.course = ""
        this.acceptancePeriod = ""
        return false
      }
    },
  },
})
