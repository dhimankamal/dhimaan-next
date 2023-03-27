import Breadcrumb from 'components/Breadcrumbs'

const About = ({}) => {
  return (
    <div className="py-4 space-y-4">
      <Breadcrumb
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'About Us', href: '/about' },
        ]}
      />
      <div className="space-y-4 px-4">
        <p>
          Welcome to Dhiman Kamal, a multi-platform technology channel that is
          dedicated to bringing you the latest and greatest in the world of
          tech. Whether you are a tech enthusiast or just someone who wants to
          stay up-to-date with the latest trends, we have got you covered.
        </p>
        <p>
          At Dhiman Kamal, we believe that technology should be accessible to
          everyone, not just to those who are already familiar with it. That is
          why we create videos and tell stories that are informative and
          engaging, no matter your level of expertise.
        </p>
        <p>
          Our content covers a wide range of topics, from first looks and
          hands-on videos to unboxings, gadget reviews, tips, tricks, ROM
          reviews, Nova setups, latest ringtones, and Android customizations. We
          want to provide you with a decent helping of tech features that will
          keep you informed and entertained.
        </p>
        <p>
          We post our content everywhere, so you can stay connected with us no
          matter where you are. Subscribe to our channel to receive
          notifications of our latest content and join our community of tech
          enthusiasts.
        </p>
        <p>
          Thank you for choosing Dhiman Kamal as your go-to source for all
          things tech. We are excited to be on this journey with you!
        </p>{' '}
      </div>
    </div>
  )
}

export default About
