//import Layout from '../components/bootstrap_layout';
import Navigator from '../components/bootstrap_navigator';
import Footer from '../components/bootstrap_footer';

import Introduction from '../components/home/introduction';
import Features from '../components/home/features';
import Contactus from '../components/home/contact';
import About from '../components/home/about';
import Services from '../components/home/services';
import Testimonials from '../components/home/testimonials';
import Portfolio from '../components/home/portfolio';
import Team from '../components/home/team';

import { cms } from '../services/index';

const Home = ({ lang, content }) => (
  //   <Layout title={content.data.title[lang]} >
  <div>
        <Navigator
            toggle={content.data.navigator[lang].toggle}
            homeTitle={content.data.navigator[lang].home.title}
            homeHref={content.data.navigator[lang].home.href}
            items={content.data.navigator[lang].items}
        />
  <Introduction title={content.data.introduction[lang].title} description={content.data.introduction[lang].description} more={content.data.introduction[lang].more} href={content.data.introduction[lang].href} />
        <Features title={content.data.features[lang].title} items={content.data.features[lang].items} />
        <About title={content.data.aboutus[lang].title} description={content.data.aboutus[lang].description} header={content.data.aboutus[lang].header} image={content.data.aboutus[lang].image} lists={content.data.aboutus[lang].lists} />
        <Services title={content.data.services[lang].title} description={content.data.services[lang].description} items={content.data.services[lang].items} />
        <Portfolio title={content.data.portfolio[lang].title} description={content.data.portfolio[lang].description} items={content.data.portfolio[lang].items} />
        <Testimonials title={content.data.testimonials[lang].title} items={content.data.testimonials[lang].items} />
        <Team title={content.data.team[lang].title} description={content.data.team[lang].description} items={content.data.team[lang].items} />
        <Contactus
            title={content.data.contact[lang].title}
            description={content.data.contact[lang].description}
            name_placeholder={content.data.contact[lang].name_placeholder}
            email_placeholder={content.data.contact[lang].email_placeholder}
            message_placeholder={content.data.contact[lang].message_placeholder}
            send={content.data.contact[lang].send}
            addressTitle={content.data.contact[lang].addressTitle}
            address1={content.data.contact[lang].address1}
            address2={content.data.contact[lang].address2}
            phoneTitle={content.data.contact[lang].phoneTitle}
            phone={content.data.contact[lang].phone}
            emailTitle={content.data.contact[lang].emailTitle}
            email={content.data.contact[lang].email}
            facebook={content.data.contact[lang].facebook}
            twitter={content.data.contact[lang].twitter}
            google={content.data.contact[lang].google}
            youtube={content.data.contact[lang].youtube}
        />
        <Footer copyright={content.data.footer.copyright} url={content.data.footer.url} title={content.data.footer.title} />
      </div>
)

Home.getInitialProps = async ({ req }) => {
    const res = await cms();
    return { lang: "en", content: res.data }
}

export default Home;
