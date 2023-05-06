import { ROUTES } from '@utils/routes'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'
import {siteSettings} from "@settings/site-settings"
import {MdArticle, MdEmail, MdPhone, MdPolicy} from 'react-icons/md'
import { IoMdDocument } from 'react-icons/io'
import { TbTruckReturn } from 'react-icons/tb'
import { RiCustomerService2Line, RiHomeHeartFill } from 'react-icons/ri'
import { FaQuestionCircle } from 'react-icons/fa'

export const footer = {
	widgets: [
		{
			id: 1,
			widgetTitle: 'Find Us On Social Media',
			lists:[ ...siteSettings.socials,
				{
					id: 4,
					title: 'Blog',
					icon: <MdArticle />,
					path: ROUTES.BLOG,
				},],
		},
		{
			id: 2,
			widgetTitle: 'Contact',
			lists: [
				{
					title: 'Pets.Love',
					phone: {
						title: '+1-800-253-7589',
						path: 'tel:+1-800-253-7589',
						icon: <MdPhone />,
					},
					email: {
						title: 'info@pets.love',
						path: 'mailto:info@pets.love',
						icon: <MdEmail />,
					},
				},
				{
					title: 'PetRescue.Love',
					phone: {
						title: '+1-800-215-5266',
						path: 'tel:+1-800-215-5266',
						icon: <MdPhone />,
					},
					email: {
						title: 'info@petrescue.love',
						path: 'mailto:info@petrescue.love',
						icon: <MdEmail />,
					}
				}
			],
		},

		{
			id: 4,
			widgetTitle: 'Customer Care',
			lists: [
				{
					id: 3,
					title: 'About Us',
					path: ROUTES.ABOUT,
					icon: <RiHomeHeartFill />,
				},
				{
					id: 1,
					title: 'FAQ',
					path: ROUTES.FAQ,
					icon: <FaQuestionCircle />,
				},{
					id: 2,
					title: 'Customer Support',
					path: ROUTES.CONTACT,
					icon: <RiCustomerService2Line />,
				},
			],
		},
		{
			id: 5,
			widgetTitle: 'Policies & Terms',
			lists: [
				{
					id: 1,
					title: 'Privacy Policy',
					path: ROUTES.PRIVACY,
					icon: <MdPolicy />,
				},
				{
					id: 2,
					title: 'Terms & Conditions',
					path: ROUTES.TERMS,
					icon: <IoMdDocument />,
				},
				{
					id: 3,
					title: 'Store Return Policy',
					path: ROUTES.RETURN_POLICY,
					icon: <TbTruckReturn />,
				},
			],
		},
		/*{
			id: 6,
			widgetTitle: 'How To Help',
			lists: [
				{
					id: 1,
					title: 'Rescue a Pet',
					path: ROUTES.ANIMALS,
					icon: <BsFillHeartFill />
				},
				{
					id: 2,
					title: 'Support a Shelter/Rescue',
					path: ROUTES.ADOPT,
					icon: <BiDonateHeart/>
				},
				{
					id: 3,
					title: 'Pet Store',
					path: ROUTES.STORE,
					icon: <MdLocalGroceryStore />
				},/!*
				{
					id: 4,
					title: 'Pet FundMe',
					path: ROUTES.FUNDME,
				},*!/
			],
		},*/
	],
	payment: [
		{
			id: 1,
			path: '/',
			image: '/assets/images/payment/mastercard.svg',
			name: 'payment-master-card',
			width: 34,
			height: 20,
		},
		{
			id: 2,
			path: '/',
			image: '/assets/images/payment/visa.svg',
			name: 'payment-visa',
			width: 50,
			height: 20,
		},
		{
			id: 3,
			path: '/',
			image: '/assets/images/payment/paypal.svg',
			name: 'payment-paypal',
			width: 76,
			height: 20,
		},
		{
			id: 4,
			path: '/',
			image: '/assets/images/payment/jcb.svg',
			name: 'payment-jcb',
			width: 26,
			height: 20,
		},
		{
			id: 5,
			path: '/',
			image: '/assets/images/payment/skrill.svg',
			name: 'payment-skrill',
			width: 39,
			height: 20,
		},
	],
}

export const footerContemporary = {
	widgets: [
		{
			id: 0,
			isCompanyIntroduction: true,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',

			lists: [
				{
					id: 1,
					title: 'link-instagram',
					path: 'https://www.instagram.com/petcoinofficial/',
					icon: <IoLogoInstagram />,
				},
				{
					id: 2,
					title: 'link-twitter',
					path: 'https://twitter.com/officialpetcoin',
					icon: <IoLogoTwitter />,
				},
				{
					id: 3,
					title: 'link-facebook',
					path: 'https://www.facebook.com/PetCoinOfficial/',
					icon: <IoLogoFacebook />,
				},
				// {
				//   id: 4,
				//   title: 'link-youtube',
				//   path: 'https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw',
				//   icon: <IoLogoYoutube />,
				// },
			],
		},
		{
			id: 1,
			widgetTitle: 'widget-title-social',
			lists: [
				{
					id: 1,
					title: 'link-instagram',
					path: 'https://www.instagram.com/petcoinofficial/',
					icon: <IoLogoInstagram />,
				},
				{
					id: 2,
					title: 'link-twitter',
					path: 'https://twitter.com/officialpetcoin',
					icon: <IoLogoTwitter />,
				},
				{
					id: 3,
					title: 'link-facebook',
					path: 'https://www.facebook.com/PetCoinOfficial/',
					icon: <IoLogoFacebook />,
				},
				// {
				//   id: 4,
				//   title: 'link-youtube',
				//   path: 'https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw',
				//   icon: <IoLogoYoutube />,
				// },
			],
		},
		{
			id: 2,
			widgetTitle: 'widget-title-contact',
			lists: [
				{
					id: 1,
					title: 'link-contact-us',
					path: '/contact-us',
				},
				{
					id: 2,
					title: 'link-email',
					path: '/',
				},
				{
					id: 3,
					title: 'link-email-two',
					path: '/',
				},
				{
					id: 4,
					title: 'link-phone',
					path: '/',
				},
			],
		},
		{
			id: 3,
			widgetTitle: 'widget-title-about',
			lists: [
				{
					id: 1,
					title: 'link-support-center',
					path: '/contact-us',
				},
				{
					id: 2,
					title: 'link-customer-support',
					path: '/',
				},
				{
					id: 3,
					title: 'link-about-us',
					path: '/contact-us',
				},
				{
					id: 4,
					title: 'link-copyright',
					path: '/',
				},
			],
		},
		{
			id: 4,
			widgetTitle: 'widget-title-customer-care',
			lists: [
				{
					id: 1,
					title: 'link-faq',
					path: '/faq',
				},
				{
					id: 2,
					title: 'link-shipping',
					path: '/',
				},
				{
					id: 3,
					title: 'link-exchanges',
					path: '/',
				},
			],
		},
		{
			id: 5,
			widgetTitle: 'widget-title-our-information',
			lists: [
				{
					id: 1,
					title: 'link-privacy',
					path: '/privacy',
				},
				{
					id: 2,
					title: 'link-terms',
					path: '/terms',
				},
				{
					id: 3,
					title: 'link-return-policy',
					path: '/privacy',
				},
				{
					id: 4,
					title: 'link-site-map',
					path: '/',
				},
			],
		},
	],
	payment: [
		{
			id: 1,
			path: '/',
			image: '/assets/images/payment/mastercard.svg',
			name: 'payment-master-card',
			width: 34,
			height: 20,
		},
		{
			id: 2,
			path: '/',
			image: '/assets/images/payment/visa.svg',
			name: 'payment-visa',
			width: 50,
			height: 20,
		},
		{
			id: 3,
			path: '/',
			image: '/assets/images/payment/paypal.svg',
			name: 'payment-paypal',
			width: 76,
			height: 20,
		},
		{
			id: 4,
			path: '/',
			image: '/assets/images/payment/jcb.svg',
			name: 'payment-jcb',
			width: 26,
			height: 20,
		},
		{
			id: 5,
			path: '/',
			image: '/assets/images/payment/skrill.svg',
			name: 'payment-skrill',
			width: 39,
			height: 20,
		},
	],
}
