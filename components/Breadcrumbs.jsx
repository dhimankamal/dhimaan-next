import { NextPage } from 'next'
import Link from 'next/link'

const Breadcrumb = ({ crumbs, dateUpdated }) => {
  return (
    <div className="">
      <div className="p-8 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between">
        <div>
          <h1
            itemProp="headline"
            className="text-4xl font-bold"
            dangerouslySetInnerHTML={{ __html: crumbs.at(-1)?.name || '' }}
          ></h1>
          {dateUpdated && (
            <p className="mt-2">Last Updated: {dateUpdated}</p>
          )}
        </div>

        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="flex text-sm md:text-base flex-col gap-2 lg:flex-row justify-start items-center text-center"
        >
          {crumbs.map((val, idx) => {
            return (
              <li
                key={val.href + idx}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="group opacity-50 last:opacity-70 last:font-semibold"
              >
                <Link href={val.href} itemProp="item">
                  <span
                    itemProp="name"
                    dangerouslySetInnerHTML={{ __html: val.name || '' }}
                  ></span>
                  <meta itemProp="position" content={String(idx + 1)} />
                  <span className="group-last:hidden ml-2">/</span>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default Breadcrumb
