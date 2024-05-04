import Image from 'next/image'
import React from 'react'

const Loader = () => {
    return (
        <div className='flext-center w-full h-screen'>
            <Image src={'/icons/loading-circle.svg'} alt='loading' width={50} height={50} />
        </div>
    )
}

export default Loader