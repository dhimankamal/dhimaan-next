import React from 'react'
import PostLayout from 'components/PostLayout'
import { iosSnapchatData } from 'utils/data'

export default function SnapChat() {
  return (
    <>
      <PostLayout pageData={iosSnapchatData} />
    </>
  )
}
