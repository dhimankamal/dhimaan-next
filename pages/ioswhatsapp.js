import React from 'react'
import PostLayout from 'components/PostLayout'
import { iosWhatsappData } from 'utils/data'


export default function Whatsapp () {
  return (
    <>
      <PostLayout pageData={iosWhatsappData} />
    </>
  )
}
