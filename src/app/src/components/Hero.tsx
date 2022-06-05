import Feature from './Feature'
import HeroContent from './HeroContent'

export const Hero = ({ title, description, titleOne, textOne, titleTwo, textTwo }:
                    { title: string, description: string, titleOne: string, textOne: string, titleTwo: string, textTwo: string }) => (
  <>
    <HeroContent
      title={title}
      description={description} />
    <Feature
      titleOne={titleOne}
      textOne={textOne}
      titleTwo={titleTwo}
      textTwo={textTwo} />
  </>
)

Hero.defaultProps = {
  title: 'Vivacle',
  description: "Vivacle is a hub for digital tokens you collect through real-life accomplishments. You can explore the accolades you've earned across various platforms and claim them by bringing them onto the blockchain. By consolidating all of your achievements in one place — your Web 3.0 wallet — you develop a vibrant digital identity that reflects all of your unique experiences and interests.",
  titleOne: 'Achievements 2.0',
  textOne: "Real-world achievements gamify life, providing fun targets and goals that incentivize us to explore new places, meet new people, join new communities, and search for new experiences. They also allow us to connect with others who share our same complex intersection of interests — how else could you discover other folks in the small group who have earned badges for attending three MLH hackathons, are in the top 5% of listeners for Talyor Swift, ran over 1000 miles last year using Strava, and have traveled to Peru?",
  titleTwo: 'Our digital identity',
  textTwo: "When we collect achievements on the blockchain, we can view them all in one place, allowing the scattered tiles of our digital identity to come together to form a beautiful mosaic. We gain the ability to own our life, connect with others that share our interests, and track and share the accomplishments that give our lives meaning.",
}
