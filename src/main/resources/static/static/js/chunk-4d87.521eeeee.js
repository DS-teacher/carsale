(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4d87"],{QSRe:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return l}),r.d(t,"c",function(){return i});var a=r("t3Un");function o(e){return console.log(e),Object(a.a)({url:"/market/addActivity",method:"get",params:e})}function l(e){return console.log(e),Object(a.a)({url:"/market/getList",method:"get",params:e})}function i(e){return console.log(e),Object(a.a)({url:"/market/update",method:"post",params:e})}},UXGI:function(e,t,r){"use strict";r.r(t);var a=r("QSRe"),o={data:function(){return{ruleForm:{name:"",phone:"",activityDate:void 0,detail:""},rules:{name:[{required:!0,message:"请输入承办人姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入承办人联系电话",trigger:"blur"}],activityDate:[{required:!0,message:"请选择活动时间",trigger:"change"}],detail:[{required:!0,message:"请输入活动内容",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(r){if(!r)return console.log("error submit!!"),!1;Object(a.a)(t.ruleForm).then(function(r){2e4===r.data.code?t.$notify({title:"成功",message:"添加成功",type:"success",duration:2e3}):t.$notify({title:"错误",message:r.data.message,type:"error",duration:2e3}),t.resetForm(e)})})},resetForm:function(e){this.$refs[e].resetFields()}}},l=r("ZrdR"),i=Object(l.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-header",[r("h3",{staticStyle:{"font-family":"Microsoft YaHei"}},[e._v("添加活动计划")]),e._v(" "),r("hr",{staticStyle:{border:"0.5px solid #dcdfe6"}})]),e._v(" "),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{width:"500px","margin-left":"50px"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"活动承办人",prop:"name"}},[r("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[r("el-input",{model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"活动时间",prop:"activityDate"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.ruleForm.activityDate,callback:function(t){e.$set(e.ruleForm,"activityDate",t)},expression:"ruleForm.activityDate"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"活动内容",prop:"detail"}},[r("el-input",{attrs:{autosize:{minRows:2,maxRows:10},type:"textarea",placeholder:"输入活动内容"},model:{value:e.ruleForm.detail,callback:function(t){e.$set(e.ruleForm,"detail",t)},expression:"ruleForm.detail"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("添加")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},[],!1,null,null,null);i.options.__file="addActivity.vue";t.default=i.exports}}]);