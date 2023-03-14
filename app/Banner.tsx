import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
    <div className='bg-primary-700 px-4 py-3 text-white'>
      <p className='text-center text-sm font-medium'>
        Looking for the gift of a lifetime?{" "}
        <Link href='/vouchers' className='inline-block underline'>
          Give a voucher to someone you love!
        </Link>
      </p>
    </div>
  )
}
