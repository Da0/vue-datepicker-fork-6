"use strict";(self.webpackChunkvue3_date_time_picker_documentation=self.webpackChunkvue3_date_time_picker_documentation||[]).push([[766],{4766:(e,o,t)=>{t.r(o),t.d(o,{default:()=>r});var s=t(6252),c=t(3577),i=t(4689),l=t(8680),n=t(2650);const a={components:{Datepicker:l.Z},props:["uid","placeholder","useTriggerSlot","position","useInputIconSlot","useClearIconSlot","useClockIconSlot","useArrowLeftSlot","useArrowRightSlot","useArrowUpSlot","useArrowDownSlot","useCalendarIconSlot","useDaySlot","useActionButtonSlot","useActionPreviewSlot"],data:()=>({date:new Date,dark:!0}),computed:{todayDay:()=>(new Date).getDate()+1,getDate:()=>e=>`Selected ${new Date(e).getDate()}`},mounted(){this.dark=(0,n.vs)()},methods:{selectDate(){this.$refs.dpSlotDemo.selectDate()}},ssrRender:(...e)=>(e[2].appContext.provides[s.Uc]._registeredComponents.add("D:\\Projects\\vue3-date-picker-documentation\\node_modules\\@vuepress\\bundler-webpack\\lib\\build\\ssr\\vuepressLoader.js!D:\\Projects\\vue3-date-picker-documentation\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!D:\\Projects\\vue3-date-picker-documentation\\docs\\.vuepress\\components\\DemoSlots.vue"),function(e,o,t,l,n,a,r,u){const d=(0,s.up)("Datepicker");o(`<div${(0,i.fq)((0,s.dG)({class:"demo-wrap"},l))}>`),o((0,i.FG)(d,{modelValue:r.date,"onUpdate:modelValue":e=>r.date=e,uid:n.uid,placeholder:n.placeholder,dark:r.dark,position:n.position,ref:"dpSlotDemo"},(0,s.Nv)({_:2},[n.useTriggerSlot?{name:"trigger",fn:(0,s.w5)(((e,o,t,c)=>{if(!o)return[(0,s.Wm)("p",{class:"clickable-text"},"This is some custom clickable text that will open datepicker")];o(`<p class="clickable-text"${c}>This is some custom clickable text that will open datepicker</p>`)}))}:void 0,n.useInputIconSlot?{name:"input-icon",fn:(0,s.w5)(((e,o,t,c)=>{if(!o)return[(0,s.Wm)("img",{class:"input-slot-image",src:"/logo.png"})];o(`<img class="input-slot-image" src="/logo.png"${c}>`)}))}:void 0,n.useClearIconSlot?{name:"clear-icon",fn:(0,s.w5)(((e,o,t,c)=>{if(!o)return[(0,s.Wm)("img",{class:"input-slot-image-clear",src:"/logo.png"})];o(`<img class="input-slot-image-clear" src="/logo.png"${c}>`)}))}:void 0,n.useClockIconSlot?{name:"clock-icon",fn:(0,s.w5)(((e,o,t,c)=>{if(!o)return[(0,s.Wm)("img",{class:"slot-icon",src:"/logo.png"})];o(`<img class="slot-icon" src="/logo.png"${c}>`)}))}:void 0,n.useArrowLeftSlot?{name:"arrow-left",fn:(0,s.w5)(((e,o,t,c)=>{if(!o)return[(0,s.Wm)("img",{class:"slot-icon",src:"/logo.png"})];o(`<img class="slot-icon" src="/logo.png"${c}>`)}))}:void 0,n.useArrowRightSlot?{name:"arrow-right",fn:(0,s.w5)(((e,o,t,c)=>{if(!o)return[(0,s.Wm)("img",{class:"slot-icon",src:"/logo.png"})];o(`<img class="slot-icon" src="/logo.png"${c}>`)}))}:void 0,n.useArrowUpSlot?{name:"arrow-up",fn:(0,s.w5)(((e,o,t,c)=>{if(!o)return[(0,s.Wm)("img",{class:"slot-icon-m",src:"/logo.png"})];o(`<img class="slot-icon-m" src="/logo.png"${c}>`)}))}:void 0,n.useArrowDownSlot?{name:"arrow-down",fn:(0,s.w5)(((e,o,t,c)=>{if(!o)return[(0,s.Wm)("img",{class:"slot-icon-m",src:"/logo.png"})];o(`<img class="slot-icon-m" src="/logo.png"${c}>`)}))}:void 0,n.useCalendarIconSlot?{name:"calendar-icon",fn:(0,s.w5)(((e,o,t,c)=>{if(!o)return[(0,s.Wm)("img",{class:"slot-icon",src:"/logo.png"})];o(`<img class="slot-icon" src="/logo.png"${c}>`)}))}:void 0,n.useDaySlot?{name:"day",fn:(0,s.w5)((({day:e},o,t,l)=>{if(!o)return[e===u.todayDay?((0,s.wg)(),(0,s.j4)("img",{key:0,class:"slot-icon",src:"/logo.png"})):((0,s.wg)(),(0,s.j4)(s.HY,{key:1},[(0,s.Uk)((0,c.zw)(e),1)],64))];e===u.todayDay?o(`<img class="slot-icon" src="/logo.png"${l}>`):o(`\x3c!--[--\x3e${(0,i.E5)(e)}\x3c!--]--\x3e`)}))}:void 0,n.useActionButtonSlot?{name:"action-select",fn:(0,s.w5)(((e,o,t,c)=>{if(!o)return[(0,s.Wm)("p",{class:"custom-select",onClick:u.selectDate},"Select",8,["onClick"])];o(`<p class="custom-select"${c}>Select</p>`)}))}:void 0,n.useActionPreviewSlot?{name:"action-preview",fn:(0,s.w5)((({value:e},o,t,l)=>{if(!o)return[(0,s.Uk)((0,c.zw)(u.getDate(e)),1)];o(`${(0,i.E5)(u.getDate(e))}`)}))}:void 0]),t)),o("</div>")}(...e))},r=a},2650:(e,o,t)=>{t.d(o,{vs:()=>s.vs});var s=t(2791);t(8639)},8639:(e,o,t)=>{t.d(o,{Fg:()=>l,c9:()=>c});var s=t(7788);const c=e=>!(0,s.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,i={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},l=({docsRepo:e,docsBranch:o,docsDir:t,filePathRelative:l,editLinkPattern:n})=>{const a=c(e);let r;return n?r=n:null!==a&&(r=i[a]),r?r.replace(/:repo/,(0,s.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,o).replace(/:path/,(0,s.FY)(`${(0,s.U1)(t)}/${l}`)):null}}}]);