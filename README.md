# Vivacle

## Inspiration
The name "Vivacle" comes from the Latin root "viva-" meaning life or alive and the suffix "-cle" which we took from the word "chronicle." It reflects our goal for the project: to provide a way for people to log the proudest moments of their life, and to own a record of these awards regardless of where they originated.  

We're all familiar with the concept of achievements in video games. But we want a way to earn _real-world_ achievements. These accolades would log our accomplishments across realms such as fitness, education, hobbies, travel, sports, music, and more.

We're not satisfied with companies that try to each build their own one-off achievement systems (e.g. Duolingo's language badges, Peloton's rider awards, Spotify's "top listener" designation). Users don't own these types of achievements. We think that accolades ought to be more than tally marks stored in various companies' siloed and private databases, and we want to work with these organizations to produce a thriving ecosystem of achievers. Bringing achievements onto the blockchain provides a way for users to own their accolades using a novel standard for NFTs known as [ERC-1155 tokens](https://docs.openzeppelin.com/contracts/4.x/erc1155).

When we collect achievements on the blockchain, we can view them all in one place, **allowing the scattered tiles of our digital identity to come together to form a beautiful mosaic.**  

**We gain the ability to own our life, connect with others that share our interests, and track and share the accomplishments that give our lives meaning.**

![Achievements](https://cdn.discordapp.com/attachments/947392792697667604/947440965549969408/accolades.png)

The most powerful attribute of Web 3 is composability — the ability of developers to build on top of open-source smart contracts stored on the blockchain. Many describe the joy of building in Web 3 as similar to snapping together lego blocks of software to create even more impressive applications. Bringing our achievements on-chain creates networks of likeminded individuals and provides the lego blocks for the entire Web 3 ecosystem to thrive. We can't wait to see what applications others build on top of the achievements we're helping to bring on-chain.

## What it does
Vivacle is a hub for digital tokens you collect through real-life accomplishments. You can explore the accolades you've earned across various platforms and claim them by bringing them onto the blockchain. By consolidating all of your achievements in one place — your Web 3.0 wallet — you develop a vibrant digital identity that reflects all of your unique experiences and interests.

Real-world achievements gamify life, providing fun targets and goals that incentivize us to explore new places, meet new people, join new communities, and search for new experiences. They also allow us to connect with others who share our same complex intersection of interests — how else could you discover other folks in the small group who have earned badges for attending three MLH hackathons, are in the top 5% of listeners for Talyor Swift, ran over 1000 miles last year using Strava, and have traveled to Peru?

![Integrations](https://cdn.discordapp.com/attachments/947392792697667604/947451030696767498/Screen_Shot_2022-02-27_at_11.11.34_AM.png)

## How we built it
We worked on several elements of Vivacle in parallel and then linked them all together in the final hours of the hackathon. The major components include:
* A dazzling front-end created using Typescript, NextJS, and ChakraUI
* A set of smart contracts written in Solidity and deployed on Ethereum's Rinkeby test network
* A back-end Postgres database and a set of Django API endpoints to query it (to simulate platforms' centralized servers, such as Spotify's list of top listeners)

## Challenges we ran into
* Github was unavailable for most of the hackathon (at least for those of us using the eduroam network), making collaboration quite difficult.
* One of our teammates tested positive with Covid just before coming to the hackathon this morning so we had to work with him remotely throughout the day.

## Accomplishments that we're proud of
* We used Discord to host our images — when you post an image in a Discord server, you can copy its link and access the file via Discord's CDN. For example, check out: https://cdn.discordapp.com/attachments/945665299938697260/947382946464165898/OxHack.png

## What we learned
* Push to Github more often.
* The ERC-1155 standard is weird. (It's on _us_ to swap out the {id} parameter in the metadata URI for the correct value?!)
* The word "client" means way too many different things in the Web 3 world.
* Sleeping on the floor: you minimize your chance of oversleeping // you maximize your chance of getting zero rest. 

## What's next for Vivacle
* Form direct partnerships with platforms/brands that issue their own achievements and badges. We can help them mirror the accolades stored in their centralized databases onto the blockchain.
* Implement a service that lets companies easily create sleek and exciting images to represent their brand's achievements. This should be an extremely simple point/click/upload tool that even non-technical users can use.
* Provide detailed analytics to help users connect with others that share their interests (e.g. "you earned achievement A. Others who earned this achievement also earned X, Y, and Z")
* Expand the scope of brands whose achievements we host. In its final form, Vivacle should support achievements from:
  * small businesses (e.g. skydiving companies, restaurants)  
  * events (e.g. attendance at professional sports games)
  * public sites (e.g. national parks, museums)
  * individual people (act as an autograph book)
  * additional types of media (e.g. books you've read, movies you've watched)
  * ...and so much more

## Try it out
Take a click around [here](https://oxhack22.vercel.app/)
