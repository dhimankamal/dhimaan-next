import { gql } from '@apollo/client'
import Breadcrumb from 'components/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'
import client from 'service/client'

const Blog = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <Breadcrumb
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/' },
        ]}
      />
      {data.map(({ node }) => {
        const { date, excerpt, featuredImage, id, link, title } = node
        return (
          <div className="border p-4 text-left grid md:grid-cols-2 gap-4" key={id}>
             <div>
              <Image
                src={featuredImage?.node?.sourceUrl}
                alt={title}
                width="1920"
                height="1080"
                sizes="100vw"
              />
            </div>
            <div className="p-4">
              <div className="border-b pb-4">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <span className="text-sm">Last Updated: {date}</span>
              </div>
              <div className="space-y-4 mt-4">
                <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                <div className="!mt-8">
                  <Link
                    href={link}
                    className="border py-4 px-8 border-black dark:border-white hover:bg-black transition-all duration-300 hover:text-white"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
           
          </div>
        )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await client.query({
    query: gql`
      query NewQuery {
        posts {
          edges {
            node {
              id
              date
              excerpt
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
              link
            }
          }
        }
      }
    `,
  })

  const data = res?.data?.posts?.edges

  return {
    props: {
      data: data,
    },
    revalidate: 100,
  }
}

export default Blog
