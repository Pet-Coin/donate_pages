import { USFlag } from '@components/icons/USFlag'
import Banner1 from 'public/assets/images/banner/megamenu/banner-1.webp'
import Banner2 from 'public/assets/images/banner/megamenu/banner-2.webp'
import Dior from 'public/assets/images/brands/megamenu/dior.webp'
import Gucci from 'public/assets/images/brands/megamenu/gucci.webp'
import Gucci1 from 'public/assets/images/brands/megamenu/gucci1.webp'
import Levis from 'public/assets/images/brands/megamenu/levis.webp'
import Nike from 'public/assets/images/brands/megamenu/nike.webp'
import Puma from 'public/assets/images/brands/megamenu/puma.webp'

import { BagIcon } from '@components/icons/bag-icon'
import { JewelryIcon } from '@components/icons/jewelry-icon'
import { MenIcon } from '@components/icons/men-icon'
import { SneakerIcon } from '@components/icons/sneaker-icon'
import { SunglassIcon } from '@components/icons/sunglass-icon'
import { ThunderIcon } from '@components/icons/thunder-icon'
import { WalletIcon } from '@components/icons/wallet-icon'
import { WatchIcon } from '@components/icons/watch-icon'
import { WomenIcon } from '@components/icons/women-icon'
import { ROUTES } from '@utils/routes'
import { IoLogoYoutube} from "react-icons/io5"
import { IoLogoFacebook } from 'react-icons/io'

export const siteSettings = {
	name: 'Pets.Love',
	description: 'Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.',
	author: {
		name: 'Pet Holdings LLC | PetRescue Inc. 501c3 nonprofit organization EIN: 87-3962559 | All rights reserved',
		websiteUrl: 'https://pets.love',
		address: '',
	},
	email: 'info@pets.love',
	phone:'+1 800 253 7589',
	address:'30 North Gould Street, Sheridan WY 82801',
	freeShippingThreshold: 27.5,
	logo: {
		url: '/petcoin/pets.love.webp',
		alt: 'pets love',
		href: '/',
		width: 180,
		height: 59,
		mobileHeight: 50,
		mobileWidth: 154,
	},
	socials: [
		{
			id: 0,
			path: 'https://www.facebook.com/pets.love143/',
			icon: <IoLogoFacebook />,
			className: 'facebook',
			title: 'Pets.Love Facebook',
		},
		{
			id:1,
			path: 'https://www.facebook.com/petrescue.love143',
			icon: <IoLogoFacebook />,
			className: 'facebook',
			title: 'PetRescue Facebook',
		},
		/*
		{
			id: 1,
			link: 'https://twitter.com/redqinc',
			icon: <IoLogoTwitter />,
			className: 'twitter',
			title: 'text-twitter',
		},*/
		{
			id: 2,
			path: 'https://www.youtube.com/channel/UCn2l4gixEULRlfqpq-PVVPQ',
			icon: <IoLogoYoutube />,
			className: 'youtube',
			title: 'Youtube',
		},/*
		{
			id: 3,
			link: 'https://www.instagram.com/redqinc/',
			icon: <IoLogoInstagram />,
			className: 'instagram',
			title: 'text-instagram',
		},*/
	],
	defaultLanguage: 'en',
	currencyCode: 'USD',
	site_header: {
		menu: [
			{
				id: 2,
				path: ROUTES.ABOUT,
				label: 'About Us',
			},
			{
				id: 3,
				path: ROUTES.STORE,
				label: 'Pet Store',
			},
			{
				id: 4,
				path: ROUTES.ADOPT,
				label: 'Pet AdoptMe',
			},

			{
				id: 5,
				path: ROUTES.ADOPT,
				label: 'Pet RescueMe',
			},
			// {
			// 	id: 4,
			// 	path: ROUTES.ADOPT,
			// 	label: 'Pet FosterMe',
			// },
			// {
			// 	id: 4,
			// 	path: ROUTES.ADOPT,
			// 	label: 'Pet FundMe',
			// },
			{
				id: 6,
				label: 'FAQ',
				path: ROUTES.FAQ,
			},
		],
		languageMenu: [
			{
				id: 'en',
				name: 'English - EN',
				value: 'en',
				icon: <USFlag width={'20px'} height={'15px'} />,
			},
		],
		categoryMenu: [
			{
				id: 1,
				path: '/',
				label: 'menu-womens-fashion',
				icon: <WomenIcon />,
				columns: [
					{
						id: 1,
						columnItems: [
							{
								id: 1,
								path: '/search?q=top-wear',
								label: 'menu-top-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=t-shit-shirtrt',
										label: 'menu-t-shirt',
									},
									{
										id: 2,
										path: '/search?q=casual-shirts',
										label: 'menu-casual-shirts',
									},
									{
										id: 3,
										path: '/search?q=formal-shirts',
										label: 'menu-formal-shirts',
									},
									{
										id: 4,
										path: '/search?q=blazwers-coats',
										label: 'menu-blazwers-coats',
									},
									{
										id: 5,
										path: '/search?q=suits',
										label: 'menu-suits',
									},
									{
										id: 6,
										path: '/search?q=jackets',
										label: 'menu-jackets',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=belt-scarves',
								label: 'menu-belt-scarves',
							},
							{
								id: 3,
								path: '/search?q=watches-wearables',
								label: 'menu-watches-wearables',
							},
						],
					},
					{
						id: 2,
						columnItems: [
							{
								id: 1,
								path: '/search?q=western-wear',
								label: 'menu-western-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=dresses',
										label: 'menu-dresses',
									},
									{
										id: 2,
										path: '/search?q=jumpsuits',
										label: 'menu-jumpsuits',
									},
									{
										id: 3,
										path: '/search?q=tops-t-shirt',
										label: 'menu-tops-shirts',
									},
									{
										id: 4,
										path: '/search?q=shorts-skirts',
										label: 'menu-shorts-skirts',
									},
									{
										id: 5,
										path: '/search?q=shurgs',
										label: 'menu-shurgs',
									},
									{
										id: 6,
										path: '/search?q=blazers',
										label: 'menu-blazers',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=plus-size',
								label: 'menu-plus-size',
							},
							{
								id: 3,
								path: '/search?q=sunglasses-frames',
								label: 'menu-sunglasses-frames',
							},
						],
					},
					{
						id: 3,
						columnItems: [
							{
								id: 1,
								path: '/search?q=footwear',
								label: 'menu-footwear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=flats',
										label: 'menu-flats',
									},
									{
										id: 2,
										path: '/search?q=casual-shoes',
										label: 'menu-casual-shoes',
									},
									{
										id: 3,
										path: '/search?q=heels',
										label: 'menu-heels',
									},
									{
										id: 4,
										path: '/search?q=boots',
										label: 'menu-boots',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=sports-active-wear',
								label: 'menu-sports-active-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=clothing',
										label: 'menu-clothing',
									},
									{
										id: 2,
										path: '/search?q=footwear',
										label: 'menu-footwear',
									},
									{
										id: 3,
										path: '/search?q=sports-accessories',
										label: 'menu-sports-accessories',
									},
								],
							},
						],
					},
				],
				brands: [
					{
						id: 1,
						path: '/search?q=nike',
						label: 'nike',
						icon: Nike,
					},
					{
						id: 2,
						path: '/search?q=dior',
						label: 'dior',
						icon: Dior,
					},
					{
						id: 3,
						path: '/search?q=gucci',
						label: 'gucci',
						icon: Gucci,
					},
					{
						id: 4,
						path: '/search?q=gucci1',
						label: 'gucci1',
						icon: Gucci1,
					},
					{
						id: 5,
						path: '/search?q=puma',
						label: 'puma',
						icon: Puma,
					},
					{
						id: 6,
						path: '/search?q=levis',
						label: 'levis',
						icon: Levis,
					},
				],
				banners: [
					{
						id: 1,
						path: '/search?q=winter',
						label: 'winter',
						image: Banner1,
					},
					{
						id: 2,
						path: '/search?q=summer',
						label: 'summer',
						image: Banner2,
					},
				],
			},
			{
				id: 2,
				path: '/',
				label: 'menu-mens-fashion',
				icon: <MenIcon />,
				columns: [
					{
						id: 1,
						columnItems: [
							{
								id: 1,
								path: '/search?q=top-wear',
								label: 'menu-top-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=t-shit-shirtrt',
										label: 'menu-t-shirt',
									},
									{
										id: 2,
										path: '/search?q=casual-shirts',
										label: 'menu-casual-shirts',
									},
									{
										id: 3,
										path: '/search?q=formal-shirts',
										label: 'menu-formal-shirts',
									},
									{
										id: 4,
										path: '/search?q=blazwers-coats',
										label: 'menu-blazwers-coats',
									},
									{
										id: 5,
										path: '/search?q=suits',
										label: 'menu-suits',
									},
									{
										id: 6,
										path: '/search?q=jackets',
										label: 'menu-jackets',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=belt-scarves',
								label: 'menu-belt-scarves',
							},
							{
								id: 3,
								path: '/search?q=watches-wearables',
								label: 'menu-watches-wearables',
							},
						],
					},
					{
						id: 2,
						columnItems: [
							{
								id: 1,
								path: '/search?q=western-wear',
								label: 'menu-western-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=dresses',
										label: 'menu-dresses',
									},
									{
										id: 2,
										path: '/search?q=jumpsuits',
										label: 'menu-jumpsuits',
									},
									{
										id: 3,
										path: '/search?q=tops-t-shirt',
										label: 'menu-tops-shirts',
									},
									{
										id: 4,
										path: '/search?q=shorts-skirts',
										label: 'menu-shorts-skirts',
									},
									{
										id: 5,
										path: '/search?q=shurgs',
										label: 'menu-shurgs',
									},
									{
										id: 6,
										path: '/search?q=blazers',
										label: 'menu-blazers',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=plus-size',
								label: 'menu-plus-size',
							},
							{
								id: 3,
								path: '/search?q=sunglasses-frames',
								label: 'menu-sunglasses-frames',
							},
						],
					},
					{
						id: 3,
						columnItems: [
							{
								id: 1,
								path: '/search?q=footwear',
								label: 'menu-footwear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=flats',
										label: 'menu-flats',
									},
									{
										id: 2,
										path: '/search?q=casual-shoes',
										label: 'menu-casual-shoes',
									},
									{
										id: 3,
										path: '/search?q=heels',
										label: 'menu-heels',
									},
									{
										id: 4,
										path: '/search?q=boots',
										label: 'menu-boots',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=sports-active-wear',
								label: 'menu-sports-active-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=clothing',
										label: 'menu-clothing',
									},
									{
										id: 2,
										path: '/search?q=footwear',
										label: 'menu-footwear',
									},
									{
										id: 3,
										path: '/search?q=sports-accessories',
										label: 'menu-sports-accessories',
									},
								],
							},
						],
					},
				],
				brands: [
					{
						id: 1,
						path: '/search?q=nike',
						label: 'nike',
						icon: Nike,
					},
					{
						id: 2,
						path: '/search?q=dior',
						label: 'dior',
						icon: Dior,
					},
					{
						id: 3,
						path: '/search?q=gucci',
						label: 'gucci',
						icon: Gucci,
					},
					{
						id: 4,
						path: '/search?q=gucci1',
						label: 'gucci1',
						icon: Gucci1,
					},
					{
						id: 5,
						path: '/search?q=puma',
						label: 'puma',
						icon: Puma,
					},
					{
						id: 6,
						path: '/search?q=levis',
						label: 'levis',
						icon: Levis,
					},
				],
				banners: [
					{
						id: 1,
						path: '/search?q=winter',
						label: 'winter',
						image: Banner1,
					},
					{
						id: 2,
						path: '/search?q=summer',
						label: 'summer',
						image: Banner2,
					},
				],
			},
			{
				id: 3,
				path: '/',
				label: 'menu-watches',
				icon: <WatchIcon />,
				columns: [
					{
						id: 1,
						columnItems: [
							{
								id: 1,
								path: '/search?q=top-wear',
								label: 'menu-top-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=t-shit-shirtrt',
										label: 'menu-t-shirt',
									},
									{
										id: 2,
										path: '/search?q=casual-shirts',
										label: 'menu-casual-shirts',
									},
									{
										id: 3,
										path: '/search?q=formal-shirts',
										label: 'menu-formal-shirts',
									},
									{
										id: 4,
										path: '/search?q=blazwers-coats',
										label: 'menu-blazwers-coats',
									},
									{
										id: 5,
										path: '/search?q=suits',
										label: 'menu-suits',
									},
									{
										id: 6,
										path: '/search?q=jackets',
										label: 'menu-jackets',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=belt-scarves',
								label: 'menu-belt-scarves',
							},
							{
								id: 3,
								path: '/search?q=watches-wearables',
								label: 'menu-watches-wearables',
							},
						],
					},
					{
						id: 2,
						columnItems: [
							{
								id: 1,
								path: '/search?q=western-wear',
								label: 'menu-western-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=dresses',
										label: 'menu-dresses',
									},
									{
										id: 2,
										path: '/search?q=jumpsuits',
										label: 'menu-jumpsuits',
									},
									{
										id: 3,
										path: '/search?q=tops-t-shirt',
										label: 'menu-tops-shirts',
									},
									{
										id: 4,
										path: '/search?q=shorts-skirts',
										label: 'menu-shorts-skirts',
									},
									{
										id: 5,
										path: '/search?q=shurgs',
										label: 'menu-shurgs',
									},
									{
										id: 6,
										path: '/search?q=blazers',
										label: 'menu-blazers',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=plus-size',
								label: 'menu-plus-size',
							},
							{
								id: 3,
								path: '/search?q=sunglasses-frames',
								label: 'menu-sunglasses-frames',
							},
						],
					},
					{
						id: 3,
						columnItems: [
							{
								id: 1,
								path: '/search?q=footwear',
								label: 'menu-footwear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=flats',
										label: 'menu-flats',
									},
									{
										id: 2,
										path: '/search?q=casual-shoes',
										label: 'menu-casual-shoes',
									},
									{
										id: 3,
										path: '/search?q=heels',
										label: 'menu-heels',
									},
									{
										id: 4,
										path: '/search?q=boots',
										label: 'menu-boots',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=sports-active-wear',
								label: 'menu-sports-active-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=clothing',
										label: 'menu-clothing',
									},
									{
										id: 2,
										path: '/search?q=footwear',
										label: 'menu-footwear',
									},
									{
										id: 3,
										path: '/search?q=sports-accessories',
										label: 'menu-sports-accessories',
									},
								],
							},
						],
					},
				],
				brands: [
					{
						id: 1,
						path: '/search?q=nike',
						label: 'nike',
						icon: Nike,
					},
					{
						id: 2,
						path: '/search?q=dior',
						label: 'dior',
						icon: Dior,
					},
					{
						id: 3,
						path: '/search?q=gucci',
						label: 'gucci',
						icon: Gucci,
					},
					{
						id: 4,
						path: '/search?q=gucci1',
						label: 'gucci1',
						icon: Gucci1,
					},
					{
						id: 5,
						path: '/search?q=puma',
						label: 'puma',
						icon: Puma,
					},
					{
						id: 6,
						path: '/search?q=levis',
						label: 'levis',
						icon: Levis,
					},
				],
				banners: [
					{
						id: 1,
						path: '/search?q=winter',
						label: 'winter',
						image: Banner1,
					},
					{
						id: 2,
						path: '/search?q=summer',
						label: 'summer',
						image: Banner2,
					},
				],
			},
			{
				id: 4,
				path: '/',
				label: 'menu-wallets',
				icon: <WalletIcon />,
				columns: [
					{
						id: 1,
						columnItems: [
							{
								id: 1,
								path: '/search?q=top-wear',
								label: 'menu-top-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=t-shit-shirtrt',
										label: 'menu-t-shirt',
									},
									{
										id: 2,
										path: '/search?q=casual-shirts',
										label: 'menu-casual-shirts',
									},
									{
										id: 3,
										path: '/search?q=formal-shirts',
										label: 'menu-formal-shirts',
									},
									{
										id: 4,
										path: '/search?q=blazwers-coats',
										label: 'menu-blazwers-coats',
									},
									{
										id: 5,
										path: '/search?q=suits',
										label: 'menu-suits',
									},
									{
										id: 6,
										path: '/search?q=jackets',
										label: 'menu-jackets',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=belt-scarves',
								label: 'menu-belt-scarves',
							},
							{
								id: 3,
								path: '/search?q=watches-wearables',
								label: 'menu-watches-wearables',
							},
						],
					},
					{
						id: 2,
						columnItems: [
							{
								id: 1,
								path: '/search?q=western-wear',
								label: 'menu-western-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=dresses',
										label: 'menu-dresses',
									},
									{
										id: 2,
										path: '/search?q=jumpsuits',
										label: 'menu-jumpsuits',
									},
									{
										id: 3,
										path: '/search?q=tops-t-shirt',
										label: 'menu-tops-shirts',
									},
									{
										id: 4,
										path: '/search?q=shorts-skirts',
										label: 'menu-shorts-skirts',
									},
									{
										id: 5,
										path: '/search?q=shurgs',
										label: 'menu-shurgs',
									},
									{
										id: 6,
										path: '/search?q=blazers',
										label: 'menu-blazers',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=plus-size',
								label: 'menu-plus-size',
							},
							{
								id: 3,
								path: '/search?q=sunglasses-frames',
								label: 'menu-sunglasses-frames',
							},
						],
					},
					{
						id: 3,
						columnItems: [
							{
								id: 1,
								path: '/search?q=footwear',
								label: 'menu-footwear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=flats',
										label: 'menu-flats',
									},
									{
										id: 2,
										path: '/search?q=casual-shoes',
										label: 'menu-casual-shoes',
									},
									{
										id: 3,
										path: '/search?q=heels',
										label: 'menu-heels',
									},
									{
										id: 4,
										path: '/search?q=boots',
										label: 'menu-boots',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=sports-active-wear',
								label: 'menu-sports-active-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=clothing',
										label: 'menu-clothing',
									},
									{
										id: 2,
										path: '/search?q=footwear',
										label: 'menu-footwear',
									},
									{
										id: 3,
										path: '/search?q=sports-accessories',
										label: 'menu-sports-accessories',
									},
								],
							},
						],
					},
				],
				brands: [
					{
						id: 1,
						path: '/search?q=nike',
						label: 'nike',
						icon: Nike,
					},
					{
						id: 2,
						path: '/search?q=dior',
						label: 'dior',
						icon: Dior,
					},
					{
						id: 3,
						path: '/search?q=gucci',
						label: 'gucci',
						icon: Gucci,
					},
					{
						id: 4,
						path: '/search?q=gucci1',
						label: 'gucci1',
						icon: Gucci1,
					},
					{
						id: 5,
						path: '/search?q=puma',
						label: 'puma',
						icon: Puma,
					},
					{
						id: 6,
						path: '/search?q=levis',
						label: 'levis',
						icon: Levis,
					},
				],
				banners: [
					{
						id: 1,
						path: '/search?q=winter',
						label: 'winter',
						image: Banner1,
					},
					{
						id: 2,
						path: '/search?q=summer',
						label: 'summer',
						image: Banner2,
					},
				],
			},
			{
				id: 5,
				path: '/',
				label: 'menu-bags',
				icon: <BagIcon />,
				columns: [
					{
						id: 1,
						columnItems: [
							{
								id: 1,
								path: '/search?q=top-wear',
								label: 'menu-top-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=t-shit-shirtrt',
										label: 'menu-t-shirt',
									},
									{
										id: 2,
										path: '/search?q=casual-shirts',
										label: 'menu-casual-shirts',
									},
									{
										id: 3,
										path: '/search?q=formal-shirts',
										label: 'menu-formal-shirts',
									},
									{
										id: 4,
										path: '/search?q=blazwers-coats',
										label: 'menu-blazwers-coats',
									},
									{
										id: 5,
										path: '/search?q=suits',
										label: 'menu-suits',
									},
									{
										id: 6,
										path: '/search?q=jackets',
										label: 'menu-jackets',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=belt-scarves',
								label: 'menu-belt-scarves',
							},
							{
								id: 3,
								path: '/search?q=watches-wearables',
								label: 'menu-watches-wearables',
							},
						],
					},
					{
						id: 2,
						columnItems: [
							{
								id: 1,
								path: '/search?q=western-wear',
								label: 'menu-western-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=dresses',
										label: 'menu-dresses',
									},
									{
										id: 2,
										path: '/search?q=jumpsuits',
										label: 'menu-jumpsuits',
									},
									{
										id: 3,
										path: '/search?q=tops-t-shirt',
										label: 'menu-tops-shirts',
									},
									{
										id: 4,
										path: '/search?q=shorts-skirts',
										label: 'menu-shorts-skirts',
									},
									{
										id: 5,
										path: '/search?q=shurgs',
										label: 'menu-shurgs',
									},
									{
										id: 6,
										path: '/search?q=blazers',
										label: 'menu-blazers',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=plus-size',
								label: 'menu-plus-size',
							},
							{
								id: 3,
								path: '/search?q=sunglasses-frames',
								label: 'menu-sunglasses-frames',
							},
						],
					},
					{
						id: 3,
						columnItems: [
							{
								id: 1,
								path: '/search?q=footwear',
								label: 'menu-footwear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=flats',
										label: 'menu-flats',
									},
									{
										id: 2,
										path: '/search?q=casual-shoes',
										label: 'menu-casual-shoes',
									},
									{
										id: 3,
										path: '/search?q=heels',
										label: 'menu-heels',
									},
									{
										id: 4,
										path: '/search?q=boots',
										label: 'menu-boots',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=sports-active-wear',
								label: 'menu-sports-active-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=clothing',
										label: 'menu-clothing',
									},
									{
										id: 2,
										path: '/search?q=footwear',
										label: 'menu-footwear',
									},
									{
										id: 3,
										path: '/search?q=sports-accessories',
										label: 'menu-sports-accessories',
									},
								],
							},
						],
					},
				],
				brands: [
					{
						id: 1,
						path: '/search?q=nike',
						label: 'nike',
						icon: Nike,
					},
					{
						id: 2,
						path: '/search?q=dior',
						label: 'dior',
						icon: Dior,
					},
					{
						id: 3,
						path: '/search?q=gucci',
						label: 'gucci',
						icon: Gucci,
					},
					{
						id: 4,
						path: '/search?q=gucci1',
						label: 'gucci1',
						icon: Gucci1,
					},
					{
						id: 5,
						path: '/search?q=puma',
						label: 'puma',
						icon: Puma,
					},
					{
						id: 6,
						path: '/search?q=levis',
						label: 'levis',
						icon: Levis,
					},
				],
				banners: [
					{
						id: 1,
						path: '/search?q=winter',
						label: 'winter',
						image: Banner1,
					},
					{
						id: 2,
						path: '/search?q=summer',
						label: 'summer',
						image: Banner2,
					},
				],
			},
			{
				id: 6,
				path: '/',
				label: 'menu-jewelry',
				icon: <JewelryIcon />,
				columns: [
					{
						id: 1,
						columnItems: [
							{
								id: 1,
								path: '/search?q=top-wear',
								label: 'menu-top-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=t-shit-shirtrt',
										label: 'menu-t-shirt',
									},
									{
										id: 2,
										path: '/search?q=casual-shirts',
										label: 'menu-casual-shirts',
									},
									{
										id: 3,
										path: '/search?q=formal-shirts',
										label: 'menu-formal-shirts',
									},
									{
										id: 4,
										path: '/search?q=blazwers-coats',
										label: 'menu-blazwers-coats',
									},
									{
										id: 5,
										path: '/search?q=suits',
										label: 'menu-suits',
									},
									{
										id: 6,
										path: '/search?q=jackets',
										label: 'menu-jackets',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=belt-scarves',
								label: 'menu-belt-scarves',
							},
							{
								id: 3,
								path: '/search?q=watches-wearables',
								label: 'menu-watches-wearables',
							},
						],
					},
					{
						id: 2,
						columnItems: [
							{
								id: 1,
								path: '/search?q=western-wear',
								label: 'menu-western-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=dresses',
										label: 'menu-dresses',
									},
									{
										id: 2,
										path: '/search?q=jumpsuits',
										label: 'menu-jumpsuits',
									},
									{
										id: 3,
										path: '/search?q=tops-t-shirt',
										label: 'menu-tops-shirts',
									},
									{
										id: 4,
										path: '/search?q=shorts-skirts',
										label: 'menu-shorts-skirts',
									},
									{
										id: 5,
										path: '/search?q=shurgs',
										label: 'menu-shurgs',
									},
									{
										id: 6,
										path: '/search?q=blazers',
										label: 'menu-blazers',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=plus-size',
								label: 'menu-plus-size',
							},
							{
								id: 3,
								path: '/search?q=sunglasses-frames',
								label: 'menu-sunglasses-frames',
							},
						],
					},
					{
						id: 3,
						columnItems: [
							{
								id: 1,
								path: '/search?q=footwear',
								label: 'menu-footwear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=flats',
										label: 'menu-flats',
									},
									{
										id: 2,
										path: '/search?q=casual-shoes',
										label: 'menu-casual-shoes',
									},
									{
										id: 3,
										path: '/search?q=heels',
										label: 'menu-heels',
									},
									{
										id: 4,
										path: '/search?q=boots',
										label: 'menu-boots',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=sports-active-wear',
								label: 'menu-sports-active-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=clothing',
										label: 'menu-clothing',
									},
									{
										id: 2,
										path: '/search?q=footwear',
										label: 'menu-footwear',
									},
									{
										id: 3,
										path: '/search?q=sports-accessories',
										label: 'menu-sports-accessories',
									},
								],
							},
						],
					},
				],
				brands: [
					{
						id: 1,
						path: '/search?q=nike',
						label: 'nike',
						icon: Nike,
					},
					{
						id: 2,
						path: '/search?q=dior',
						label: 'dior',
						icon: Dior,
					},
					{
						id: 3,
						path: '/search?q=gucci',
						label: 'gucci',
						icon: Gucci,
					},
					{
						id: 4,
						path: '/search?q=gucci1',
						label: 'gucci1',
						icon: Gucci1,
					},
					{
						id: 5,
						path: '/search?q=puma',
						label: 'puma',
						icon: Puma,
					},
					{
						id: 6,
						path: '/search?q=levis',
						label: 'levis',
						icon: Levis,
					},
				],
				banners: [
					{
						id: 1,
						path: '/search?q=winter',
						label: 'winter',
						image: Banner1,
					},
					{
						id: 2,
						path: '/search?q=summer',
						label: 'summer',
						image: Banner2,
					},
				],
			},
			{
				id: 7,
				path: '/',
				label: 'menu-sunglasses',
				icon: <SunglassIcon />,
				columns: [
					{
						id: 1,
						columnItems: [
							{
								id: 1,
								path: '/search?q=top-wear',
								label: 'menu-top-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=t-shit-shirtrt',
										label: 'menu-t-shirt',
									},
									{
										id: 2,
										path: '/search?q=casual-shirts',
										label: 'menu-casual-shirts',
									},
									{
										id: 3,
										path: '/search?q=formal-shirts',
										label: 'menu-formal-shirts',
									},
									{
										id: 4,
										path: '/search?q=blazwers-coats',
										label: 'menu-blazwers-coats',
									},
									{
										id: 5,
										path: '/search?q=suits',
										label: 'menu-suits',
									},
									{
										id: 6,
										path: '/search?q=jackets',
										label: 'menu-jackets',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=belt-scarves',
								label: 'menu-belt-scarves',
							},
							{
								id: 3,
								path: '/search?q=watches-wearables',
								label: 'menu-watches-wearables',
							},
						],
					},
					{
						id: 2,
						columnItems: [
							{
								id: 1,
								path: '/search?q=western-wear',
								label: 'menu-western-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=dresses',
										label: 'menu-dresses',
									},
									{
										id: 2,
										path: '/search?q=jumpsuits',
										label: 'menu-jumpsuits',
									},
									{
										id: 3,
										path: '/search?q=tops-t-shirt',
										label: 'menu-tops-shirts',
									},
									{
										id: 4,
										path: '/search?q=shorts-skirts',
										label: 'menu-shorts-skirts',
									},
									{
										id: 5,
										path: '/search?q=shurgs',
										label: 'menu-shurgs',
									},
									{
										id: 6,
										path: '/search?q=blazers',
										label: 'menu-blazers',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=plus-size',
								label: 'menu-plus-size',
							},
							{
								id: 3,
								path: '/search?q=sunglasses-frames',
								label: 'menu-sunglasses-frames',
							},
						],
					},
					{
						id: 3,
						columnItems: [
							{
								id: 1,
								path: '/search?q=footwear',
								label: 'menu-footwear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=flats',
										label: 'menu-flats',
									},
									{
										id: 2,
										path: '/search?q=casual-shoes',
										label: 'menu-casual-shoes',
									},
									{
										id: 3,
										path: '/search?q=heels',
										label: 'menu-heels',
									},
									{
										id: 4,
										path: '/search?q=boots',
										label: 'menu-boots',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=sports-active-wear',
								label: 'menu-sports-active-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=clothing',
										label: 'menu-clothing',
									},
									{
										id: 2,
										path: '/search?q=footwear',
										label: 'menu-footwear',
									},
									{
										id: 3,
										path: '/search?q=sports-accessories',
										label: 'menu-sports-accessories',
									},
								],
							},
						],
					},
				],
				brands: [
					{
						id: 1,
						path: '/search?q=nike',
						label: 'nike',
						icon: Nike,
					},
					{
						id: 2,
						path: '/search?q=dior',
						label: 'dior',
						icon: Dior,
					},
					{
						id: 3,
						path: '/search?q=gucci',
						label: 'gucci',
						icon: Gucci,
					},
					{
						id: 4,
						path: '/search?q=gucci1',
						label: 'gucci1',
						icon: Gucci1,
					},
					{
						id: 5,
						path: '/search?q=puma',
						label: 'puma',
						icon: Puma,
					},
					{
						id: 6,
						path: '/search?q=levis',
						label: 'levis',
						icon: Levis,
					},
				],
				banners: [
					{
						id: 1,
						path: '/search?q=winter',
						label: 'winter',
						image: Banner1,
					},
					{
						id: 2,
						path: '/search?q=summer',
						label: 'summer',
						image: Banner2,
					},
				],
			},
			{
				id: 8,
				path: '/',
				label: 'menu-sneakers',
				icon: <SneakerIcon />,
				columns: [
					{
						id: 1,
						columnItems: [
							{
								id: 1,
								path: '/search?q=top-wear',
								label: 'menu-top-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=t-shit-shirtrt',
										label: 'menu-t-shirt',
									},
									{
										id: 2,
										path: '/search?q=casual-shirts',
										label: 'menu-casual-shirts',
									},
									{
										id: 3,
										path: '/search?q=formal-shirts',
										label: 'menu-formal-shirts',
									},
									{
										id: 4,
										path: '/search?q=blazwers-coats',
										label: 'menu-blazwers-coats',
									},
									{
										id: 5,
										path: '/search?q=suits',
										label: 'menu-suits',
									},
									{
										id: 6,
										path: '/search?q=jackets',
										label: 'menu-jackets',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=belt-scarves',
								label: 'menu-belt-scarves',
							},
							{
								id: 3,
								path: '/search?q=watches-wearables',
								label: 'menu-watches-wearables',
							},
						],
					},
					{
						id: 2,
						columnItems: [
							{
								id: 1,
								path: '/search?q=western-wear',
								label: 'menu-western-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=dresses',
										label: 'menu-dresses',
									},
									{
										id: 2,
										path: '/search?q=jumpsuits',
										label: 'menu-jumpsuits',
									},
									{
										id: 3,
										path: '/search?q=tops-t-shirt',
										label: 'menu-tops-shirts',
									},
									{
										id: 4,
										path: '/search?q=shorts-skirts',
										label: 'menu-shorts-skirts',
									},
									{
										id: 5,
										path: '/search?q=shurgs',
										label: 'menu-shurgs',
									},
									{
										id: 6,
										path: '/search?q=blazers',
										label: 'menu-blazers',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=plus-size',
								label: 'menu-plus-size',
							},
							{
								id: 3,
								path: '/search?q=sunglasses-frames',
								label: 'menu-sunglasses-frames',
							},
						],
					},
					{
						id: 3,
						columnItems: [
							{
								id: 1,
								path: '/search?q=footwear',
								label: 'menu-footwear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=flats',
										label: 'menu-flats',
									},
									{
										id: 2,
										path: '/search?q=casual-shoes',
										label: 'menu-casual-shoes',
									},
									{
										id: 3,
										path: '/search?q=heels',
										label: 'menu-heels',
									},
									{
										id: 4,
										path: '/search?q=boots',
										label: 'menu-boots',
									},
								],
							},
							{
								id: 2,
								path: '/search?q=sports-active-wear',
								label: 'menu-sports-active-wear',
								columnItemItems: [
									{
										id: 1,
										path: '/search?q=clothing',
										label: 'menu-clothing',
									},
									{
										id: 2,
										path: '/search?q=footwear',
										label: 'menu-footwear',
									},
									{
										id: 3,
										path: '/search?q=sports-accessories',
										label: 'menu-sports-accessories',
									},
								],
							},
						],
					},
				],
				brands: [
					{
						id: 1,
						path: '/search?q=nike',
						label: 'nike',
						icon: Nike,
					},
					{
						id: 2,
						path: '/search?q=dior',
						label: 'dior',
						icon: Dior,
					},
					{
						id: 3,
						path: '/search?q=gucci',
						label: 'gucci',
						icon: Gucci,
					},
					{
						id: 4,
						path: '/search?q=gucci1',
						label: 'gucci1',
						icon: Gucci1,
					},
					{
						id: 5,
						path: '/search?q=puma',
						label: 'puma',
						icon: Puma,
					},
					{
						id: 6,
						path: '/search?q=levis',
						label: 'levis',
						icon: Levis,
					},
				],
				banners: [
					{
						id: 1,
						path: '/search?q=winter',
						label: 'winter',
						image: Banner1,
					},
					{
						id: 2,
						path: '/search?q=summer',
						label: 'summer',
						image: Banner2,
					},
				],
			},
		],
		pagesMenu: [
			{
				id: 1,
				path: '/search',
				label: 'menu-deals-today',
				icon: <ThunderIcon className={'h-auto w-3'} />,
			},
			{
				id: 2,
				path: '/',
				label: 'menu-offers',
			},
			{
				id: 3,
				path: '/faq',
				label: 'menu-faq',
			},
			{
				id: 4,
				path: '/contact-us',
				label: 'menu-contact',
			},
		],
	},
}
