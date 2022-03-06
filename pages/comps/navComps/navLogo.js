import React from 'react'
import Image from 'next/image'

function NavLogo() {
  return (
    <div>
        <div><Image
            src="/logo.svg"
            width={170}
            height={50}
            alt='logo'
            layout='intrinsic'
        ></Image></div>
    </div>
  )
}

export default NavLogo