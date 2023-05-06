import {Metadata} from "next"
import {ROUTES} from "@utils/routes"
import React from "react"
import {CampaignDonationBox} from "@components/donations/CampaignDonateBox"

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
    return {
        title: 'Support Nearby Pet Rescues: Donate Today!',
        description: 'Help pets in need by donating to local rescues. Your support can make a difference in their lives. Give today and make a positive impact in your community.',
        openGraph: {
            type: 'website',
            url: `https://www.pets.love/${ROUTES.DONATE}}`,
            title:'Support Nearby Pet Rescues: Donate Today!',
            description:'Help pets in need by donating to local rescues. Your support can make a difference in their lives. Give today and make a positive impact in your community.'
        }
    }
}

export default async function Page() {
    return (
        <div>
            <CampaignDonationBox/>
        </div>
    )
}