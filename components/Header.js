import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header class="text-gray-400 bg-transparent body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0 " href="../pages/index.tsx">

                    <Image src="/earth.png" alt="..."
                        width='50' height='40'
                        objectFit='contain'
                        class="ml-3 rounded align-center" />


                    <span class="ml-3 text-xl">MY WORLD</span>

                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-white">Room 1</a>
                    <a class="mr-5 hover:text-white">Room 2</a>
                    <a class="mr-5 hover:text-white">Room 3</a>
                    <a class="mr-5 hover:text-white">Room 4</a>
                </nav>

            </div>
        </header >
    )
}

export default Header