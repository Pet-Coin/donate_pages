export const CATEGORIES = {
    DOGS: {
        handle: 'dogs',
        recommended_categories: [
            {   
                title: 'Dog Food',
                slug: 'categories.lvl1:Dogs > Food'
            },
            {
                title: 'Dog Treats',
                slug: 'categories.lvl1:Dogs > Treats'
            },
            {
                title: 'Dog Toys',
                slug: 'categories.lvl1:Dogs > Toys'
            },
        ],
        categoryHero: [
            {
                image: '/store/categories/dogs/hero.webp',
                title: 'Dog Store',
            }
        ],
        subcategories: [
            {
                imgUrl: '/store/categories/dogs/food.webp',
                heading: 'Food',
                handle: 'categories.lvl1:Dogs > Food'
            },
            {
                imgUrl: '/store/categories/dogs/treats.webp',
                heading: 'Treats',
                handle: 'categories.lvl1:Dogs > Treats'
            },/*
			{
				imgUrl: '/store/categories/dogs/',
				heading: 'Potty Training',
			},*/
            {
                imgUrl: '/store/categories/dogs/apparel.webp',
                heading: 'Apparel',
                handle: 'categories.lvl1:Dogs > Apparel & Accessories'
            },
            {
                imgUrl: '/store/categories/dogs/beds.webp',
                heading: 'Beds & Furniture',
                handle: 'categories.lvl1:Dogs > Beds & Furniture'
            },
            {
                imgUrl: '/store/categories/dogs/collars.webp',
                heading: 'Collars & Leashes',
                handle: 'categories.lvl1:Dogs > Collars, Harnesses & Leashes'
            },
            {
                imgUrl: '/store/categories/dogs/carriers.webp',
                heading: 'Carriers',
                handle: 'categories.lvl1:Dogs > Carriers & Travel Products'
            },
            {
                imgUrl: '/store/categories/dogs/crates.webp',
                heading: 'Crates, Houses & Pens',
                handle: 'categories.lvl1:Dogs > Crates, Houses & Pens'
            },
            {
                imgUrl: '/store/categories/dogs/toys.webp',
                heading: 'Toys',
                handle: 'categories.lvl1:Dogs > Toys'
            },
            {
                imgUrl: '/store/categories/dogs/doors.webp',
                heading: 'Doors, Gates & Ramps',
                handle: 'categories.lvl1:Dogs > Doors, Gates & Ramps'
            },
            {
                imgUrl: '/store/categories/dogs/feeding.webp',
                heading: 'Feeding & Watering Supplies',
                handle: 'categories.lvl1:Dogs > Feeding & Watering Supplies'
            },
        ],
        relatedProducts: [
            {
                handle: 'categories.lvl1:Dogs > Food',
                title: 'Food',
            },
            {
                handle: 'categories.lvl1:Dogs > Treats',
                title: 'Treats',
            },
            {
                handle: 'categories.lvl1:Dogs > Toys',
                title: 'Toys',
            }
        ]
    },
    CATS: {
        handle: 'cats',
        recommended_categories: [
            {
                title: 'Cat Food',
                slug: 'categories.lvl1:Cats > Food'
            },
            {
                title: 'Cat Treats',
                slug: 'categories.lvl1:Cats > Treats'
            },
            {
                title: 'Cat Toys',
                slug: 'categories.lvl1:Cats > Toys'
            },
        ],
        categoryHero: [
            {
                image: '/store/categories/cats/hero.webp',
                title: 'Cat Store',
            }
        ],
        subcategories: [
            {
                imgUrl:  '/store/categories/cats/beds.webp',
                heading: 'Beds & Furniture',
                handle: 'categories.lvl1:Cats > Beds & Furniture'
            },

            {
                imgUrl: '/store/categories/cats/carrier.webp',
                heading: 'Carriers & Strollers',
                handle: 'categories.lvl1:Cats > Carriers & Strollers'
            },
            {
                imgUrl: '/store/categories/cats/door.webp',
                heading: 'Cat Doors, Steps, Nets & Pens',
                handle: 'categories.lvl1:Cats > Cat Doors, Enclosures & Steps'
            },
            {
                imgUrl: '/store/categories/cats/collar.webp',
                heading: 'Collars, Harnesses & Leashes',
                handle: 'categories.lvl1:Cats > Collars, Harnesses & Leashes'
            },
            {
                imgUrl: '/store/categories/cats/water.webp',
                heading: 'Feeding & Watering Supplies',
                handle: 'categories.lvl1:Cats > Feeding & Watering Supplies'
            },
            {
                imgUrl: '/store/categories/cats/flea.webp',
                heading: 'Flea & Tick Control',
                handle: 'categories.lvl1:Cats > Flea & Tick Control'
            },
            {
                imgUrl: '/store/categories/cats/food.webp',
                heading: 'Food',
                handle: 'categories.lvl1:Cats > Food'
            },
            {
                imgUrl: '/store/categories/cats/grooming.webp',
                heading: 'Grooming',
                handle: 'categories.lvl1:Cats > Grooming'
            },
            {
                imgUrl: '/store/categories/cats/health.webp',
                heading: 'Health Supplies',
                handle: 'categories.lvl1:Cats > Health Supplies'
            },
            {
                imgUrl: '/store/categories/cats/litter.webp',
                heading: 'Litter & Housebreaking',
                handle: 'categories.lvl1:Cats > Litter & Housebreaking'
            },
            {
                imgUrl: '/store/categories/cats/training.webp',
                heading: 'Repellents & Training Aids',
                handle: 'categories.lvl1:Cats > Repellents & Training Aids'
            },
            {
                imgUrl: '/store/categories/cats/toys.webp',
                heading: 'Toys',
                handle: 'categories.lvl1:Cats > Toys'
            },
            {
                imgUrl: '/store/categories/cats/treats.webp',
                heading: 'Treats',
                handle: 'categories.lvl1:Cats > Treats'
            },
        ],
        relatedProducts: [
            {
                handle: 'categories.lvl1:Cats > Food',
                title: 'Food',
            },
            {
                handle: 'categories.lvl1:Cats > Treats',
                title: 'Treats',
            },
            {
                handle: 'categories.lvl1:Cats > Toys',
                title: 'Toys',
            }
        ]
    },
    SMALL_ANIMALS: {
        handle: 'small-animals',
        recommended_categories: [
            {
                title: 'Small Animal Food',
                slug: 'categories.lvl1:Small Animals > Food'
            },
            {
                title: 'Small Animal Treats',
                slug: 'categories.lvl1:Small Animals > Treats'
            },
            {
                title: 'Small Animal Toys',
                slug: 'categories.lvl1:Small Animals > Toys'
            },
        ],
        categoryHero: [
            {
                image: '/store/categories/small-furry/hero.webp',
                title: 'Small & Furry Store',
            }
        ],
        subcategories: [
            {
                imgUrl: '/store/categories/small-furry/collars.webp',
                heading: 'Collars, Harnesses & Leashes',
                handle: 'categories.lvl1:Small Animals > Collars, Harnesses & Leashes'
            },
            {
                imgUrl: '/store/categories/small-furry/feeder.webp',
                heading: 'Feeding & Watering Supplies',
                handle: 'categories.lvl1:Small Animals > Feeding & Watering Supplies'
            },
            {
                imgUrl: '/store/categories/small-furry/grooming.webp',
                heading: 'Grooming',
                handle: 'categories.lvl1:Small Animals > Grooming'
            },
            {
                imgUrl: '/store/categories/small-furry/house.webp',
                heading: 'House & Habitats',
                handle: 'categories.lvl1:Small Animals > Houses & Habitats'
            },
            {
                imgUrl: '/store/categories/small-furry/cleaner.webp',
                heading: 'Odor & Stain Removers',
                handle: 'categories.lvl1:Small Animals > Odor & Stain Removers'
            },

        ],
        relatedProducts: [
            {
                handle: 'categories.lvl1:Small Animals > Food',
                title: 'Food',
            },
            {
                handle: 'categories.lvl1:Small Animals > Treats',
                title: 'Treats',
            },
            {
                handle: 'categories.lvl1:Small Animals > Toys',
                title: 'Toys',
            }
        ]
    },
    BIRDS: {
        handle: 'birds',
        recommended_categories: [
            {
                title: 'Bird Food',
                slug: 'categories.lvl1:Birds > Food'
            },
            {
                title: 'Bird Treats',
                slug: 'categories.lvl1:Birds > Treats'
            },
            {
                title: 'Bird Toys',
                slug: 'categories.lvl1:Birds > Toys'
            },
        ],
        categoryHero: [
            {
                image: '/store/categories/birds/hero.webp',
                title: 'Bird Store',
            }
        ],
        subcategories: [
            {
                imgUrl: '/store/categories/birds/Food.webp',
                heading: 'Food',
                handle: 'categories.lvl1:Birds > Food'
            },
            {
                imgUrl: '/store/categories/birds/cage-accessories.webp',
                heading: 'Birdcages & Accessories',
                handle: 'categories.lvl1:Birds > Cages & Accessories'
            },
            {
                imgUrl: '/store/categories/birds/watering.jpg',
                heading: 'Feeding & Watering Supplies',
                handle: 'categories.lvl1:Birds > Feeding & Watering Supplies'
            },
            {
                imgUrl: '/store/categories/birds/health.jpg',
                heading: 'Health Supplies',
                handle: 'categories.lvl1:Birds > Health Supplies'
            },
            {
                imgUrl: '/store/categories/birds/toys.jpg',
                heading: 'Toys',
                handle: 'categories.lvl1:Birds > Toys'
            },
            {
                imgUrl: '/store/categories/birds/treats.jpg',
                heading: 'Treats',
                handle: 'categories.lvl1:Birds > Treats'
            },
            {
                imgUrl: '/store/categories/birds/bird-carrier.jpg',
                heading: 'Bird Carriers',
                handle: 'categories.lvl1:Birds > Carriers'
            }
        ],
        relatedProduct: 'gid://shopify/Product/6871820107799'
    },
    FISH: {
        handle: 'fish-aquatic-pets',
        recommended_categories: [
            {
                title: 'Fish Food',
                slug: 'categories.lvl1:Fish & Aquatic Pets > Food'
            },
            {
                title: 'Aquariums & Fish Bowls',
                slug: 'categories.lvl1:Fish & Aquatic Pets > Aquariums & Fish Bowls'
            },
            {
                title: 'Aquarium Decor',
                slug: 'categories.lvl1:Fish & Aquatic Pets > Aquarium Decor'
            },
        ],
        categoryHero: [
            {
                image: '/store/categories/fish/hero.webp',
                title: 'Fish & Aquatic Store',
            }
        ],
        subcategories: [
            {
                imgUrl: '/store/categories/fish/food.webp',
                heading: 'Food',
                handle: 'categories.lvl1:Fish & Aquatic Pets > Food'
            },
            {
                imgUrl: '/store/categories/fish/cleaners.webp',
                heading: 'Cleaners',
                handle: 'categories.lvl1:Fish & Aquatic Pets > Aquarium Cleaners'
            },
            {
                imgUrl: '/store/categories/fish/decoration.webp',
                heading: 'Decorations',
                handle: 'categories.lvl1:Fish & Aquatic Pets > Aquarium Decor'
            },
            {
                imgUrl: '/store/categories/fish/pumps.webp',
                heading: 'Pumps & Filters',
                handle: 'categories.lvl1:Fish & Aquatic Pets > Aquarium Pumps & Filters'
            },
            {
                imgUrl: '/store/categories/fish/substrate.webp',
                heading: 'Substrates',
                handle: 'categories.lvl1:Fish & Aquatic Pets > Aquarium Substrate'
            },
            {
                imgUrl: '/store/categories/fish/bowls.webp',
                heading: 'Aquariums & Fish Bowls',
                handle: 'categories.lvl1:Fish & Aquatic Pets > Aquariums & Fish Bowls'
            },
        ],
        relatedProduct: 'gid://shopify/Product/6871820107799'
    },
    REPTILES: {
        handle: 'reptiles-amphibians',
        recommended_categories: [
            {
                title: 'Reptile Food',
                slug: 'categories.lvl1:Reptiles & Amphibians > Food'
            },
            {
                title: 'Terrariums',
                slug: 'categories.lvl1:Reptiles & Amphibians > Terrariums'
            },
            {
                title: 'Terrarium Heat Lamps & Mats',
                slug: 'categories.lvl1:Reptiles & Amphibians > Terrarium Heat Lamps & Mats'
            },
        ],
        categoryHero: [
            {
                image: '/store/categories/reptiles/hero.webp',
                title: 'Reptiles & Amphibians Store',
            }
        ],
        subcategories: [
            {
                imgUrl: '/store/categories/reptiles/decor.webp',
                heading: 'Habitat Decor',
                handle: 'categories.lvl1:Reptiles & Amphibians > Habitat Decor'
            },
            // {
            //     imgUrl: '/store/categories/reptiles/tools.webp',
            //     heading: 'Handling Tools',
            //     handle: 'reptiles-amphibians-handling-tools'
            // },
            {
                imgUrl: '/store/categories/reptiles/shipping.webp',
                heading: 'Terrariums',
                handle: 'categories.lvl1:Reptiles & Amphibians > Terrariums'
            },
            {
                imgUrl: '/store/categories/reptiles/substrate.webp',
                heading: 'Terrarium Bedding, Sand & Substrate',
                handle: 'categories.lvl1:Reptiles & Amphibians > Terrarium Bedding, Sand & Substrate'
            },
            {
                imgUrl: '/store/categories/reptiles/lamp.webp',
                heading: 'Terrarium Heat Lamps & Mats',
                handle: 'categories.lvl1:Reptiles & Amphibians > Terrarium Heat Lamps & Mats'
            },

        ],
        relatedProduct: 'gid://shopify/Product/6871820107799'
    },
    HORSES: {
        handle: 'horses',
        recommended_categories: [
            {
                title: 'Horse Food',
                slug: 'categories.lvl1:Horses > Food'
            },
            {
                title: 'Horse Toys',
                slug: 'categories.lvl1:Horses > Toys'
            },
            {
                title: 'Horse Grooming',
                slug: 'categories.lvl1:Horses > Grooming'
            },
        ],
        categoryHero: [
            {
                image: '/store/categories/horse/hero.webp',
                title: 'Horse Store',
            }
        ],
        subcategories: [
            {
                imgUrl: '/store/categories/horse/boots.webp',
                heading: 'Boots & Wraps',
                handle: 'categories.lvl1:Horses > Boots & Wraps'
            },
            {
                imgUrl: '/store/categories/horse/farrier.webp',
                heading: 'Farrier Supplies',
                handle: 'categories.lvl1:Horses > Farrier Supplies'
            },
            {
                imgUrl: '/store/categories/horse/grooming.webp',
                heading: 'Grooming & Bathing Supplies',
                handle: 'categories.lvl1:Horses > Grooming & Bathing Supplies'
            },
            {
                imgUrl: '/store/categories/horse/health.webp',
                heading: 'Health Supplies',
                handle: 'categories.lvl1:Horses > Health Supplies'
            },
            {
                imgUrl: '/store/categories/horse/blanket.webp',
                heading: 'Horse Blankets & Sheets',
                handle: 'categories.lvl1:Horses > Horse Blankets & Sheets'
            },
            {
                imgUrl: '/store/categories/horse/stable.webp',
                heading: 'Stable Supplies',
                handle: 'categories.lvl1:Horses > Stable Supplies'
            },
            {
                imgUrl: '/store/categories/horse/toys.webp',
                heading: 'Toys',
                handle: 'categories.lvl1:Horses > Toys'
            },
        ],
        relatedProduct: 'gid://shopify/Product/6871820107799'
    },
    DEFAULT: {
        error: 'Category not found'
    }
}