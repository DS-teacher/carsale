(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4c52"],{JYtv:function(e,t,r){var a=r("Rx2n");a(a.S,"Number",{isInteger:r("lmZm")})},M6yv:function(e,t,r){},Yfch:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"c",function(){return s}),r.d(t,"b",function(){return l}),r.d(t,"d",function(){return o});var a=r("e9eg"),n=r.n(a);function i(e){return/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(e)}var s=function(e,t,r){if(""===t||void 0===t)r(new Error("请输入身份证号"));else{/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(t)||r(new Error("请输入正确的身份证号")),r()}},l=function(e,t,r){if(!t)return r(new Error("年龄不能为空"));setTimeout(function(){n()(t)?t<18?r(new Error("必须年满18岁")):r():r(new Error("请输入数字值"))},1e3)},o=function(e,t,r){if(!t)return r(new Error("请输入员工薪资"));setTimeout(function(){n()(t)?t<1800?r(new Error("薪资必须大于1800元")):r():r(new Error("请输入数字值"))},1e3)}},e9eg:function(e,t,r){e.exports={default:r("jTtr"),__esModule:!0}},jTtr:function(e,t,r){r("JYtv"),e.exports=r("g24s").Number.isInteger},lmZm:function(e,t,r){var a=r("OMyi"),n=Math.floor;e.exports=function(e){return!a(e)&&isFinite(e)&&n(e)===e}},oeZj:function(e,t,r){"use strict";var a=r("M6yv");r.n(a).a},tWMt:function(e,t,r){"use strict";r.r(t);var a=r("6ZY3"),n=r.n(a),i=r("Yfch"),s=r("t3Un");var l=r("fe1z"),o=[{key:"1",display_name:"销售"},{key:"0",display_name:"经理"}],u=[{key:"1",display_name:"在职"},{key:"0",display_name:"已离职"}],d=o.reduce(function(e,t){return e[t.key]=t.display_name,e},{}),c=u.reduce(function(e,t){return e[t.key]=t.display_name,e},{}),p={filters:{typeFilter:function(e){return c[e]},rulesFilter:function(e){return d[e]}},data:function(){var e=this;return{info:{name:null,id:null,role:null,entryTime:null,salary:null,phone:null,idCard:null,gender:null,status:null,pass:null},statusOptions:u,rulesOptions:o,temp:{id:"",name:"",phone:"",idCard:"",gender:""},ruleForm:{oldPass:"",newPass:"",checkPass:""},dialogFormVisible:!1,dialogPassVisible:!1,rules:{name:[{required:!0,message:"请输入员工姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入员工联系电话",trigger:"blur"}],idCard:[{required:!0,validator:i.c,trigger:"blur"}],gender:[{required:!0,message:"请选择员工性别",trigger:"change"}],date:[{type:"date",required:!0,message:"请选择入职日期",trigger:"change"}],status:[{required:!0,message:"请选择员工就职状态",trigger:"blur"}],salary:[{validator:i.d,required:!0,trigger:"blur"}],age:[{validator:i.b,required:!0,trigger:"blur"}],oldPass:[{validator:function(e,t,r){""===t?r(new Error("请输入旧密码")):function(e){return Object(s.a)({url:"/user/validPassword",method:"post",params:{validPass:e}})}(t).then(function(e){2e4===e.data.code?r():r(new Error("旧密码不正确!"))})},required:!0,trigger:"blur"}],newPass:[{validator:function(t,r,a){""===r?a(new Error("请输入密码")):r.length<6?a(new Error("密码长度不得少于6个字符")):(e.ruleForm.checkPass,a())},required:!0,trigger:"blur"}],checkPass:[{validator:function(t,r,a){""===r?a(new Error("请再次输入密码")):r!==e.ruleForm.newPass?a(new Error("两次输入密码不一致!")):a()},required:!0,trigger:"blur"}]}}},created:function(){this.getInfo()},methods:{getInfo:function(){var e=this;Object(l.a)(this.$store.getters.token).then(function(t){2e4===t.data.code&&(e.info=t.data.data)})},handleUpdate:function(){var e=this;this.temp=n()({},this.info),this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.temp.clearValidate()})},passwordUpdate:function(){var e=this;this.dialogPassVisible=!0,this.$nextTick(function(){e.$refs.ruleForm.clearValidate()})},updatePass:function(){var e=this;this.$refs.ruleForm.validate(function(t){t?function(e){return Object(s.a)({url:"/user/updatePassword",method:"post",params:e})}({oldPass:e.ruleForm.oldPass,newPass:e.ruleForm.newPass}).then(function(t){2e4===t.data.code&&e.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})}):e.$message.error("验证失败无法提交")})},updateData:function(){var e=this;this.$refs.temp.validate(function(t){if(t){var r=n()({},e.temp);(function(e){return Object(s.a)({url:"/user/updateMessage",method:"post",params:e})})({id:r.id,name:r.name,phone:r.phone,idCard:r.idCard,gender:r.gender}).then(function(t){2e4===t.data.code&&(e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3}))})}})}}},m=(r("oeZj"),r("ZrdR")),f=Object(m.a)(p,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-container"},[r("h2",[e._v("我的信息")]),e._v(" "),r("hr"),e._v(" "),r("div",[r("ul",[r("el-row",{attrs:{gutter:32}},[r("el-col",{attrs:{xs:24,sm:24,lg:12}},[r("li",[r("label",[e._v("姓名：")]),e._v(" "),r("span",[e._v(e._s(e.info.name))])]),e._v(" "),r("li",[r("label",[e._v("员工编号：")]),e._v(" "),r("span",[e._v(e._s(e.info.id))])]),e._v(" "),r("li",[r("label",[e._v("角色：")]),e._v(" "),r("span",[e._v(e._s(e._f("rulesFilter")(e.info.role)))])]),e._v(" "),r("li",[r("label",[e._v("入职时间：")]),e._v(" "),r("span",[e._v(e._s(e._f("parseTime")(e.info.entryTime,"{y}年{m}月{d}日")))])]),e._v(" "),r("li",[r("label",[e._v("薪资：")]),e._v(" "),r("span",[e._v(e._s(e.info.salary))])])]),e._v(" "),r("el-col",{attrs:{xs:24,sm:24,lg:12}},[r("li",[r("label",[e._v("联系电话：")]),e._v(" "),r("span",[e._v(e._s(e.info.phone))])]),e._v(" "),r("li",[r("label",[e._v("身份证号：")]),e._v(" "),r("span",[e._v(e._s(e.info.idCard))])]),e._v(" "),r("li",[r("label",[e._v("性别：")]),e._v(" "),r("span",[e._v(e._s(e.info.gender))])]),e._v(" "),r("li",[r("label",[e._v("状态：")]),e._v(" "),r("span",[e._v(e._s(e._f("typeFilter")(e.info.status)))])])])],1)],1),e._v(" "),r("div",{staticClass:"edit-button"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleUpdate}},[e._v("修改信息")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.passwordUpdate}},[e._v("修改密码")])],1)]),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogFormVisible,title:"修改信息"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"temp",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"100px"}},[r("el-form-item",{attrs:{label:"姓名",prop:"name"}},[r("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[r("el-input",{model:{value:e.temp.phone,callback:function(t){e.$set(e.temp,"phone",t)},expression:"temp.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"身份证号",prop:"idCard"}},[r("el-input",{model:{value:e.temp.idCard,callback:function(t){e.$set(e.temp,"idCard",t)},expression:"temp.idCard"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"性别",prop:"gender"}},[r("el-radio-group",{model:{value:e.temp.gender,callback:function(t){e.$set(e.temp,"gender",t)},expression:"temp.gender"}},[r("el-radio",{attrs:{label:"男"}}),e._v(" "),r("el-radio",{attrs:{label:"女"}})],1)],1),e._v(" "),r("el-form-item",[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v("确 认")])],1)],1)],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogPassVisible,title:"修改密码"},on:{"update:visible":function(t){e.dialogPassVisible=t}}},[r("el-form",{ref:"ruleForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.ruleForm,"label-position":"left","label-width":"100px"}},[r("el-form-item",{attrs:{label:"旧密码",prop:"oldPass"}},[r("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.oldPass,callback:function(t){e.$set(e.ruleForm,"oldPass",t)},expression:"ruleForm.oldPass"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"新密码",prop:"newPass"}},[r("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.newPass,callback:function(t){e.$set(e.ruleForm,"newPass",t)},expression:"ruleForm.newPass"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[r("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1),e._v(" "),r("el-form-item",[r("el-button",{on:{click:function(t){e.dialogPassVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.updatePass}},[e._v("确 认")])],1)],1)],1)],1)},[],!1,null,"4a01557b",null);f.options.__file="message.vue";t.default=f.exports}}]);