import React from 'react'
import PostLayout from 'components/PostLayout'
import { iosMessengerData } from 'utils/data'

export default function Messenger() {
  return (
    <>
      <PostLayout pageData={iosMessengerData} />
    </>
  )
}
