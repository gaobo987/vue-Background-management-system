import Vue from 'vue'
import Router from 'vue-router'

//默认页面
import defa from '@/components/Default/defa'

//任务管理
import createTask from '@/components/Task/createTask'
import taskView from '@/components/Task/taskView'

//消息管理
import send from '@/components/Message/send'
import Receiving from '@/components/Message/Receiving'
import Shipping from '@/components/Message/Shipping'
import Message from '@/components/Message/Message'
//项目系统
import Basic from '@/components/Project/Basic'
import cost from '@/components/Project/cost'
import demand from '@/components/Project/demand'
import Demanddetails from '@/components/Project/Demanddetails'
import Features from '@/components/Project/Features'
import Module from '@/components/Project/Module'
import plan from '@/components/Project/plan'
//客户
import client from '@/components/Customer/client'

//人员管理
import jobs from '@/components/crew/jobs'
import Position from '@/components/crew/Position'
import information from '@/components/crew/information'
//考勤系统
import Attendance from '@/components/Attendance/Attendance'
import jobss from '@/components/Attendance/jobss'

//系统管理
import registered from '@/components/system/registered'
import manual from '@/components/system/manual'


//添加角色

Vue.use(Router)

export default new Router({
	mode:'history',
	linkActiveClass:'ro-font',
  routes: [
    {
      path: '/',
      name: 'defa',
      component: defa
    },
     {
      path: '/createTask',
      name: 'createTask',
      component: createTask
    },
     {
      path: '/taskView',
      name: 'taskView',
      component: taskView
    },
    {
    	path:'/send',
    	name:'send',
    	component:send
    },
    {
    	path:'/Receiving',
    	component:Receiving
    },
    {
    	path:'/Shipping',
    	component:Shipping
    },
	{
    	path:'/Message',
    	component:Message
    },
	{
    	path:'/Basic',
    	component:Basic
    },
	{
    	path:'/cost',
    	component:cost
    },
	{
    	path:'/demand',
    	component:demand
    },
	{
    	path:'/Demanddetails',
    	component:Demanddetails
    },
	{
    	path:'/Features',
    	component:Features
    },
	{
    	path:'/plan',
    	component:plan
    },
	{
    	path:'/Module',
    	component:Module
    },
	{
    	path:'/client',
    	component:client
    },
	{
    	path:'/jobs',
    	component:jobs
    },
	{
    	path:'/Position',
    	component:Position
    },
	{
    	path:'/information',
    	component:information
    },
	{
    	path:'/Attendance',
    	component:Attendance
    },
	{
    	path:'/jobss',
    	component:jobss
    },
	{
    	path:'/registered',
    	component:registered
    },
	{
    	path:'/manual',
    	component:manual
    }
	
   
  ]
})
