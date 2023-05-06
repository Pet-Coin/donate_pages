import { ROUTES } from '@utils/routes'

export const defaultSeo = {
	description: 'Welcome to Pets.Love, the ultimate platform for everything related to pets! If you\'re a pet lover, then you\'ve come to the right place. Our platform is designed to provide you with all the resources and tools you need to take care of your furry friend and support pet shelters and rescues.',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://www.pets.love/',
		siteName: 'Pets.Love',
		description: 'Welcome to Pets.Love, the ultimate platform for everything related to pets! If you\'re a pet lover, then you\'ve come to the right place. Our platform is designed to provide you with all the resources and tools you need to take care of your furry friend and support pet shelters and rescues.',
		images: [
			{
				url: 'https://www.pets.love/pets_logo_with_text_1200x630.png',
				secureUrl: 'https://www.pets.love/pets_logo_with_text_1200x630.png',
				width: 1200,
				height: 630,
			},
		],
	},
	defaultTitle: 'Everything Pets | Pets.Love',
	titleTemplate: '%s | Pets.Love',
	additionalMetaTags: [
		{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1 maximum-scale=1',
		},
		{
			name: 'apple-mobile-web-app-capable',
			content: 'yes',
		},
		{
			name: 'theme-color',
			content: '#4267B2',
		},
	],
	additionalLinkTags: [
		{
			rel: 'apple-touch-icon',
			href: 'icons/apple-icon-180.webp',
		},
		{
			rel: 'manifest',
			href: '/manifest.json',
		},
	],
}

export const fourOhFour = {
	title: '404 - Page Not Found',
	description: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
	route: ROUTES.NOT_FOUND,
	noindex: true,
}

export const termsOfService = {
	title: 'Terms',
	description: 'Terms of Service for Pets.love',
	route: ROUTES.TERMS,
}
export const signIn = {
	title: 'Sign In',
	description: 'Sign in to Pets.Love and access your account to shop for pet supplies, food, and products. As a part of our mission to support animal welfare, we also offer pet rescue, adoption, and donation programs. Join us in making a difference in the lives of pets in need. Visit Pets.Love today and give your furry friends the love and care they deserve.',
	route: ROUTES.LOGIN,
}

export const rescue = {
	title: 'Find Pets to Adopt',
	description: 'At Pets.Love, we are committed to helping animals find their forever homes through  our animal rescue program. Our platform connects potential pet owners with local shelters  and rescue groups, giving you the opportunity to browse and adopt pets in need. With our  easy-to-use search tools, you can filter pets by location, breed, age, and other important ' + "factors to find the perfect match for your family. Whether you're looking for a furry " + 'companion or want to give a loving home to a pet in need, our animal rescue program is  here to help.',
	route: ROUTES.ADOPT,
}

export const returnPolicy = {
	title: 'Returns',
	description: 'At Pets.Love, we want you to be completely satisfied with your purchase.  If for any reason you are not satisfied with your order, we accept returns and exchanges within  30 days of purchase. Please see our return policy for more information on how to return or exchange  your item. Thank you for shopping with us and for making a difference in the lives of pets in need through  our charity programs.',
	route: ROUTES.RETURN_POLICY,
}

export const privacyPolicy = {
	title: 'Privacy Policy',
	description: 'At Pets.Love, we take your privacy seriously. This Privacy Policy explains how we  collect, use, and protect your personal information when you use our website or services.  We strive to provide a safe and secure environment for our users, and we are committed to  protecting your privacy in accordance with applicable laws and regulations. By using our  website or services, you consent to the collection and use of your personal information as  described in this Privacy Policy.',
	route: ROUTES.PRIVACY,
}

export const order = (orderId: string) => {
	return {
		title: `Order ${orderId}`,
		description: "Thank you for your purchase at Pets.Love! We're delighted that you've chosen to shop with us. " + "Your order has been successfully placed and is being processed. We'll send you an email confirmation " + 'shortly with your order details and estimated delivery date. If you have any questions or concerns, ' + "please don't hesitate to reach out to our customer support team. Thank you again for your order!",
		route: ROUTES.ORDER + '?id=' + orderId,
		nofollow: true,
		noindex: true,
	}
}

export const homePage = {
	title: 'Pet Supplies, Pet Food, Pet Products & Pet Rescue',
	description: 'Welcome to Pets.Love, the ultimate platform for everything related to pets! If you\'re a pet lover, then you\'ve come to the right place. Our platform is designed to provide you with all the resources and tools you need to take care of your furry friend and support pet shelters and rescues.',
	route: ROUTES.HOME,
}

export const faq = {
	title: 'FAQ',
	description: 'Frequently asked questions about using Pets.Love. Learn more about our pet supplies, pet food, pet rescue, adoption, and animal donation programs. Visit Pets.Love today and give your furry friends the love and care they deserve.',
	route: ROUTES.FAQ,
}

export const contact = {
	title: 'Contact Us',
	description: 'Get in touch with us at Pets.Love! Whether you have questions about our products, ' + "need help with an order, or just want to say hi, we're here to help. Fill out our contact form " + "or email us at info@pets.love and we'll get back to you as soon as possible. Thank you for " + 'choosing Pets.Love - we appreciate your business and your love for pets!',
	route: ROUTES.CONTACT,
}

export const comingSoon = {
	title: 'Coming Soon',
	description: "We're excited to announce that something pawsome is coming soon to Pets.Love! Stay tuned " + 'for updates as we get ready to launch our new product or service. Follow us on social media or  subscribe to our newsletter to be the first to know. Thank you for your patience and support!',
	route: ROUTES.COMING_SOON,
}

export const about = {
	title: 'About Us',
	description: 'Learn more about Pets.Love and our mission to provide high-quality pet supplies while supporting pet rescue and adoption efforts. Meet our team and discover how you can get involved in our charity programs.',
	route: ROUTES.ABOUT,
}
export const storeReturnForm = {
	title: 'Store Return Form',
	description: 'Fill out our store return form to initiate a return for your pet supplies purchase. Our team will review your request and get back to you as soon as possible. Please note that certain restrictions may apply.',
	route: ROUTES.STORE_RETURN_FORM,
}
export const requestProduct = {
	title: 'Request a Product',
	description: "Submit a request for a new pet product that you'd like to see in our store. Our team will review your suggestion and do our best to make it available to our customers. Thank you for helping us improve our selection!",
	route: ROUTES.REQUEST_PRODUCT,
}

export const store = {
	title: 'Pet Supplies, Pet Food, Pet Products & Pet Rescue',
	description: 'Welcome to Pets.Love - your one-stop-shop for all your pet supplies needs! We offer a  wide range of pet food and products, as well as pet rescue, adoption, and animal donation  opportunities. Shop with us and make a difference in the lives of pets in need. Visit us now and give your furry friends the love and care they deserve.',
	route: ROUTES.STORE,
}

export const products = {
	title: 'Pet Supplies, Pet Food, Pet Products & Pet Rescue',
	description: 'Welcome to Pets.Love - your one-stop-shop for all your pet supplies needs! We offer a  wide range of pet food and products, as well as pet rescue, adoption, and animal donation  opportunities. Shop with us and make a difference in the lives of pets in need. Visit us now and give your furry friends the love and care they deserve.',
	route: ROUTES.PRODUCTS,
}

export const product = (productHandle: string, description?: string) => {
	return {
		title: 'Premium Pet Food & Supplies | Best Quality for Your Furry Friends - Pets.Love',
		route: ROUTES.PRODUCTS + '/' + productHandle,
		description: description ?? 'Looking for the best quality pet food and supplies for your furry friends? Look no further than Pets.Love! Our premium product line offers top-of-the-line ingredients and nutrition for your pets, ensuring they stay healthy and happy. Browse our selection now and give your pets the love they deserve.',
	}
}

export const categories = {
	title: 'Pet Supplies, Pet Food, Pet Products & Pet Rescue',
	description: 'Welcome to Pets.Love - your one-stop-shop for all your pet supplies needs! We offer a  wide range of pet food and products, as well as pet rescue, adoption, and animal donation  opportunities. Shop with us and make a difference in the lives of pets in need. Visit us now and give your furry friends the love and care they deserve.',
	route: ROUTES.CATEGORIES,
	noindex: true,
}

export const category = (categoryHandle: string, title: string, description?:string ) => {
	return {
		title: title ?? 'Premium Pet Food & Supplies | Best Quality for Your Furry Friends',
		route: ROUTES.CATEGORIES + '/' + categoryHandle,
		description: description ?? 'Looking for the best quality pet food and supplies for your furry friends? Look no further than Pets.Love! Our premium product line offers top-of-the-line ingredients and nutrition for your pets, ensuring they stay healthy and happy. Browse our selection now and give your pets the love they deserve.',
	}
}

export const rescueSignup = {
	title: 'Rescue Signup',
	description: "Sign up to become a rescue partner with Pets.Love! We're always looking for new rescue organizations to partner with, and we'd love to have you on board. Fill out our form to get started and learn more.",
	route: ROUTES.SIGN_UP_RESCUE,
}

export const signup = {
	title: 'Sign Up',
	description: 'Sign up for a Pets.Love account to get access to our exclusive pet rescue, adoption, and animal donation programs. Our platform to help pets in need find loving homes and provide them with the care they deserve. Sign up now and make a difference in the lives of pets!',
	route: ROUTES.SIGN_UP,
}

export const shelters = {
	title: 'Shelters',
	description: 'Find a shelter near you to adopt a pet in need. Our shelter partners are dedicated to finding loving homes for pets in need. Browse our selection of pets available for adoption and find your new best friend today!',
	route: ROUTES.SHELTERS,
}

export const shelter = (shelterHandle: string, shelterExcerpt: string) => {
	return {
		title: shelterHandle,
		description: shelterExcerpt,
		route: ROUTES.SHELTERS + '/' + shelterHandle,
	}
}

export const petRescue = {
	title: 'Pet Rescue',
	description: "Pet Rescue is a fundraising platform that helps pet owners raise money for their pets' medical expenses. Our goal is to help pets in need get the care they deserve. Visit Pet Fund Me today and start a fundraiser for your pet!",
	route: ROUTES.RESCUE,
}

export const petRescueCampaign = (campaignHandle: string, campaignExcerpt: string, campaignId: string) => {
	return {
		title: campaignHandle,
		description: campaignExcerpt,
		route: ROUTES.RESCUE + '/' + campaignId,
	}
}

export const checkout = {
	title: 'Checkout',
	description: 'Checkout',
	route: ROUTES.CHECKOUT,
	nofollow: true,
	noindex: true,
}

export const blog = {
	title: 'Blog',
	description: 'Blog',
	route: ROUTES.BLOG,
}

export const blogPost = (postHandle: string, postExcerpt: string, postSlug: string) => {
	return {
		title: postHandle,
		description: postExcerpt,
		route: ROUTES.BLOG + '/' + postSlug,
	}
}

export const animals = {
	title: 'Adoptable Pets',
	description: 'Adoptable Pets',
	route: ROUTES.ANIMALS,
}

export const animal = (animalHandle: string, animalExcerpt: string, animalId: string) => {
	return {
		title: animalHandle,
		description: animalExcerpt,
		route: ROUTES.ANIMALS + '/' + animalId,
	}
}
