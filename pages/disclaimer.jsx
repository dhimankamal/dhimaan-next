import Breadcrumb from 'components/Breadcrumbs'

const Disclaimer = ({}) => {
  return (
    <div className="py-4 space-y-4">
      <Breadcrumb
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Disclaimer', href: '/disclaimer' },
        ]}
      />
      <div className="space-y-4 px-4">
        <p>
          If you require any more information or have any questions about our
          site disclaimer, please feel free to contact us by email at contact@dhimaan.in.
        </p>
        <h2 className="text-2xl font-semibold"> Disclaimers for Dhimaan.in:</h2>
        <p>
          All the information on this website - Dhimaan.in - is published in
          good faith and for general information purpose only. Dhimaan.in does
          not make any warranties about the completeness, reliability, and
          accuracy of this information. Any action you take upon the information
          you find on this website (Dhimaan.in), is strictly at your own risk.
          Dhimaan.in will not be liable for any losses and/or damages in
          connection with the use of our website.
        </p>
        <p>
          From our website, you can visit other websites by following hyperlinks
          to such external sites. While we strive to provide only quality links
          to useful and ethical websites, we have no control over the content
          and nature of these sites. These links to other websites do not imply
          a recommendation for all the content found on these sites. Site owners
          and content may change without notice and may occur before we have the
          opportunity to remove a link that may have gone bad.
        </p>
        <p>
          Please be also aware that when you leave our website, other sites may
          have different privacy policies and terms that are beyond our control.
          Please be sure to check the Privacy Policies of these sites as well as
          their Terms of Service before engaging in any business or uploading
          any information.
        </p>
        <h2 className="text-2xl font-semibold">Consent:</h2>
        <p>
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>
        <h2 className="text-2xl font-semibold">Update:</h2>
        <p>
          This site disclaimer was last updated on: <span className='font-bold'>27 March 2023</span> . Should we update,
          amend or make any changes to this document, those changes will be
          prominently posted here.
        </p>{' '}
      </div>
    </div>
  )
}

export default Disclaimer
