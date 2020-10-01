
import axios from 'axios'

const goods = {
	namespaced: true,
	state: {
		menuOpened: false,
		preload: false,
		// cases: [],
		cases: [
				{	
					id: 1,
					title: 'King’s Resort',
					theme: 'CASINO',
					servs: ['live streaming'],
					preBg: require('../assets/img/kingsbg.jpg'),
					logo: require('../assets/img/kingslogo.svg'),
					mainTask: ['Brand representation', 'Video'],
					video: 'https://player.vimeo.com/video/358492866',
					// video: 'https://admin.kings-resort.com/wp-content/uploads/2020/02/Kings-Casino.mp4',
					overview: 'King’s Resort is a prestigious venue for poker players from all over the world. We have been working closely with King’s for over a year to attract new customers and maintain current ones. We provide full marketing services to King’s. We have built and now manage their social media presence, which includes content creation, social media advertising and customer support. Additionally, we manage King’s Google ads campaigns and email marketing.',
					bigPhoto: require('../assets/img/kingsbig.jpg'),
					galery: [require('../assets/img/kingsbig.jpg'), require('../assets/img/kingsbig.jpg'), require('../assets/img/kingsbig.jpg'), require('../assets/img/kingsbig.jpg')],
					results: ['Organic Instagram followers increased by over 6,000', 'Transition to video content only', 'Improvement of email marketing' ]
				},
				{
					id: 2,
					title: 'Entropiq',
					theme: 'CYBER TEAM',
					servs: ['marketing', 'video production'],
					preBg: require('../assets/img/entrbg.jpg'),
					logo: require('../assets/img/entrologo.svg'),
					mainTask: ['Brand representation', 'Video'],
					video: 'https://player.vimeo.com/video/329656711',
					// video: 'https://uploads-ssl.webflow.com/5dfb7057d19f96ef2358783c/5e2cad53d2e0675012aa29ee_5e2b20a6ea86286ddc1f35ca_Brandrepresentationv9%20(1)-transcode.mp4',
					overview: 'Entropiq is a prestigious venue for poker players from all over the world. We have been working closely with King’s for over a year to attract new customers and maintain current ones. We provide full marketing services to King’s. We have built and now manage their social media presence, which includes content creation, social media advertising and customer support. Additionally, we manage King’s Google ads campaigns and email marketing.',
					bigPhoto: require('../assets/img/kingsbig.jpg'),
					galery: [require('../assets/img/kingsbig.jpg'), require('../assets/img/kingsbig.jpg'), require('../assets/img/kingsbig.jpg'), require('../assets/img/kingsbig.jpg')],
					results: ['Organic Instagram followers increased by over 6,000', 'Transition to video content only', 'Improvement of email marketing' ]
				},
				{
					id: 3,
					title: 'Nikita Pugachev',
					theme: 'ONLINE COURSES',
					servs: ['website creation'],
					preBg: require('../assets/img/nikitabig.jpg'),
					logo: require('../assets/img/nikitalogo.svg'),
					mainTask: ['Brand representation', 'Video'],
					video: 'https://player.vimeo.com/video/460741059',
					// video: 'https://uploads-ssl.webflow.com/5dfb7057d19f96ef2358783c/5e2cad53d2e0675012aa29ee_5e2b20a6ea86286ddc1f35ca_Brandrepresentationv9%20(1)-transcode.mp4',
					overview: 'Entropiq is a prestigious venue for poker players from all over the world. We have been working closely with King’s for over a year to attract new customers and maintain current ones. We provide full marketing services to King’s. We have built and now manage their social media presence, which includes content creation, social media advertising and customer support. Additionally, we manage King’s Google ads campaigns and email marketing.',
					bigPhoto: require('../assets/img/nikitabig.jpg'),
					galery: [require('../assets/img/kingsbig.jpg'), require('../assets/img/kingsbig.jpg'), require('../assets/img/kingsbig.jpg'), require('../assets/img/kingsbig.jpg')],
					results: ['Organic Instagram followers increased by over 6,000', 'Transition to video content only', 'Improvement of email marketing' ]
				}
		],
		filters: [ 
					{
						title: 'all',
						active: true
					},
					{
						title: 'graphic design',
						active: false
					},
					{
						title: 'marketing',
						active: false
					},
					{
						title: 'video production',
						active: false
					},
					{
						title: 'live streaming',
						active: false
					},
					{
						title: 'website creation',
						active: false
					}
		],
		services: [
					{
						id: 1,
						title: 'Graphical design',
						img: require('../assets/img/serv1.png'),
						miniDescr: 'Our team of talented graphic designers creates striking designs that communicate your brand identity.',
						fullDescr: 'Capture your audience’s eye to capture their mind! Our team of talented graphic designers creates striking designs that communicate your brand identity. We’re result-driven, keep deadlines and deliver at a reasonable price! <br> 3D – design, print advertising, logos, merchandise, social media ads – you name it, we can do it. Our graphic design pros will guide you through the whole process of bringing to life visuals of any kind. In case you need to place your visual on social media, we also offer performance marketing. If you need graphics for print media we offer ad space buying services such as billboards, magazines and newspapers.',
						whatDo: ['Livestream production from scratch', 'Livestream equipment', 'Livestream placement'],
						imgBig: require('../assets/img/serv1big.png')
					},
					{
						id: 2,
						title: 'Perfomance marketing',
						img: require('../assets/img/serv2.png'),
						miniDescr: 'Our team of talented graphic designers creates striking designs that communicate your brand identity.',
						fullDescr: 'Capture your audience’s eye to capture their mind! Our team of talented graphic designers creates striking designs that communicate your brand identity. We’re result-driven, keep deadlines and deliver at a reasonable price! 3D – design, print advertising, logos, merchandise, social media ads – you name it, we can do it. Our graphic design pros will guide you through the whole process of bringing to life visuals of any kind. In case you need to place your visual on social media, we also offer performance marketing. If you need graphics for print media we offer ad space buying services such as billboards, magazines and newspapers.',
						whatDo: ['Livestream production from scratch', 'Livestream equipment', 'Livestream placement'],
						imgBig: require('../assets/img/serv2big.png')
					},
					{
						id: 3,
						title: 'Video production',
						img: require('../assets/img/serv3.png'),
						miniDescr: 'Our team of talented graphic designers creates striking designs that communicate your brand identity.',
						fullDescr: 'Capture your audience’s eye to capture their mind! Our team of talented graphic designers creates striking designs that communicate your brand identity. We’re result-driven, keep deadlines and deliver at a reasonable price! 3D – design, print advertising, logos, merchandise, social media ads – you name it, we can do it. Our graphic design pros will guide you through the whole process of bringing to life visuals of any kind. In case you need to place your visual on social media, we also offer performance marketing. If you need graphics for print media we offer ad space buying services such as billboards, magazines and newspapers.',
						whatDo: ['Livestream production from scratch', 'Livestream equipment', 'Livestream placement'],
						imgBig: require('../assets/img/serv3big.png')
					},
					{
						id: 4,
						title: 'Live stream production',
						img: require('../assets/img/serv4.png'),
						miniDescr: 'Our team of talented graphic designers creates striking designs that communicate your brand identity.',
						fullDescr: 'Capture your audience’s eye to capture their mind! Our team of talented graphic designers creates striking designs that communicate your brand identity. We’re result-driven, keep deadlines and deliver at a reasonable price! 3D – design, print advertising, logos, merchandise, social media ads – you name it, we can do it. Our graphic design pros will guide you through the whole process of bringing to life visuals of any kind. In case you need to place your visual on social media, we also offer performance marketing. If you need graphics for print media we offer ad space buying services such as billboards, magazines and newspapers.',
						whatDo: ['Livestream production from scratch', 'Livestream equipment', 'Livestream placement'],
						imgBig: require('../assets/img/serv4big.png')
					},
					{
						id: 5,
						title: 'Website creation',
						img: require('../assets/img/serv5.png'),
						miniDescr: 'Our team of talented graphic designers creates striking designs that communicate your brand identity.',
						fullDescr: 'Capture your audience’s eye to capture their mind! Our team of talented graphic designers creates striking designs that communicate your brand identity. We’re result-driven, keep deadlines and deliver at a reasonable price! 3D – design, print advertising, logos, merchandise, social media ads – you name it, we can do it. Our graphic design pros will guide you through the whole process of bringing to life visuals of any kind. In case you need to place your visual on social media, we also offer performance marketing. If you need graphics for print media we offer ad space buying services such as billboards, magazines and newspapers.',
						whatDo: ['Livestream production from scratch', 'Livestream equipment', 'Livestream placement'],
						imgBig: require('../assets/img/serv5big.png')
					},
				],
  	},
  	mutations: {
  	OPEN_MENU(state){
  		state.menuOpened = !state.menuOpened
  	},
  	CHANGE_FILTER(state, payload){
  		state.filters.forEach(item => {
  			item.active = false
  		})
  		state.filters[payload].active = true
  	},
  	DO_PRELOAD(state){
  		state.preload = !state.preload
  	},
  	SET_CASES(state, payload){
  		state.cases = payload
  	}
  },
	actions: {
		openMenu({commit}){
			commit('OPEN_MENU')
		},
		changeFilter({commit}, payload){
			commit('CHANGE_FILTER', payload)
		},
		doPreload({commit}){
			commit('DO_PRELOAD')
		},
		loadCases({commit}){
			axios
			.get('https://stars-media.cz/wp-json/stars/v1/get/cases')
			.then(response =>{
				commit('SET_CASES', response.data)
				console.log(response.data)
			})
		}
	},
	getters: {
  		getCases: (state) => (id) => {
  			return state.cases.find(item => item.id == id)
  		},
  		getService: (state) => (id) => {
  			return state.services.find(item => item.id == id)
  		}
	}
}

export default goods


