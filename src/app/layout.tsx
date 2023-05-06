import PetsLayout from "@components/layout/pets-layout"

// Load Open Sans and satisfy typeface font
import '@fontsource/open-sans'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/satisfy'
import '@fontsource/solitreo'
import 'react-phone-number-input/style.css'
import '@styles/tailwind.css'
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (
        <html lang={"en"}>
        <body>
                    <PetsLayout>
                        {children}
                    </PetsLayout>
        </body>
        </html>


    )
}