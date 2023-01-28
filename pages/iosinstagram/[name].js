import React from "react";
import PostLayout from "components/PostLayout";
import { instaFlowData, instenderData, iosInstagramData } from "utils/data";
import { useRouter } from "next/router";

export default function Instagram() {
  const router = useRouter();
  const { name } = router.query;

  if (name === "instaflow") {
    return (
      <>
        <PostLayout pageData={instaFlowData} />
      </>
    );
  } else if (name === "instander") {
    return (
      <>
        <PostLayout pageData={instenderData} />
      </>
    );
  } else {
    return <>
      <PostLayout pageData={iosInstagramData} />
    </>;
  }
}
