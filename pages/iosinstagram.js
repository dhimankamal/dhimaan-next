import React from 'react'
import PostLayout from 'components/PostLayout'
import { iosInstagramData } from 'utils/data'

export default function Instagram () {
  return (
    <>
      <PostLayout pageData={iosInstagramData} />
    </>
  )
}
