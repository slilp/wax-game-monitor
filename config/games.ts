export interface Game {
  id: string;
  name: string;
  label: string;
  desc: string;
  logo: string;
  web: string;
  discord: string;
  atomic: string;
  how: string;
  statistic: string;
  calculator: string;
  game: string;
}

const baseHowToUrl = "/how-to/";
const baseStatisticUrl = "/stat/";
const baseCalculatorUrl = "/calculator/";
const baseGameUrl = "/game/";

const games: Game[] = [
  // {
  //   id: "001",
  //   name: "warspace",
  //   label: "Warspace",
  //   desc: "WarSpace is an NFT game project — real-time strategy. Thanks to the tokenized economy, players themselves control the market and build trade relations. Everyone can choose their own path: develop stone mining, engage in logging, restore the food industry or go deep underground in search of gold. Resources are needed to build new structures, and to participate in pvp battles.",
  //   logo: "warspace.jpg",
  //   web: "https://warspace.io",
  //   discord: "https://discord.gg/gwsZNMZr",
  //   atomic: "https://wax.atomichub.io/market?collection_name=warspacegame",
  //   how: `${baseHowToUrl}warspace`,
  //   statistic: `${baseStatisticUrl}warspace`,
  //   calculator: `${baseCalculatorUrl}warspace`,
  //   game: `${baseGameUrl}warspace`,
  // },
  // {
  //   id: "002",
  //   name: "farmerworld",
  //   label: "Farmer world",
  //   desc: "Farmers World is the first farming game to function on the NFTs platform. Pick for yourself suitable tools, exploit various resources, buy land to build enormous farms, and enjoy the fascinating experiences of a farmer working in Farmers World’s Ecosystem.",
  //   logo: "farmerworld.jpeg",
  //   web: "https://farmersworld.io",
  //   discord: "https://discord.gg/Mqj8ybM7",
  //   atomic: "https://wax.atomichub.io/market?collection_name=farmersworld",
  //   how: `${baseHowToUrl}farmerworld`,
  //   statistic: `${baseStatisticUrl}farmerworld`,
  //   calculator: `${baseCalculatorUrl}farmerworld`,
  //   game: `${baseGameUrl}farmerworld`,
  // },
  // {
  //   id: "003",
  //   name: "spacecraftxc",
  //   label: "Space Craft X",
  //   desc: "Space CraftX is a space NFT game with a perfect economic model, an interesting plot and a possibility to exchange game tokens for cryptocurrency. Extract a variety of space resources, build up your own mining plants and feel like a real space creator in the Space CraftX game.",
  //   logo: "spacecraftxc.jpeg",
  //   web: "https://spacecraftx.io",
  //   discord: "https://discord.gg/spacecraftx",
  //   atomic: "https://wax.atomichub.io/market?collection_name=spacecraftxc",
  //   how: `${baseHowToUrl}spacecraftxc`,
  //   statistic: `${baseStatisticUrl}spacecraftxc`,
  //   calculator: `${baseCalculatorUrl}spacecraftxc`,
  //   game: `${baseGameUrl}spacecraftxc`,
  // },
  // {
  //   id: "004",
  //   name: "goldmand",
  //   label: "Goldmand",
  //   desc: "Explore deep space with our game. The Metaverse is waiting for you. Choose a species, pick the planet and suitable land and start mining. The Big varieties for items and unique amulets.",
  //   logo: "goldmand.jpg",
  //   web: "https://play.goldmand.io",
  //   discord: "https://discord.gg/gwsZNMZr",
  //   atomic: "https://wax.atomichub.io/market?collection_name=goldmandgame",
  //   how: `${baseHowToUrl}goldmand`,
  //   statistic: `${baseStatisticUrl}goldmand`,
  //   calculator: `${baseCalculatorUrl}goldmand`,
  //   game: `${baseGameUrl}goldmand`,
  // },
  // {
  //   id: "005",
  //   name: "seafarmersio",
  //   label: "Sea Farmer",
  //   desc: "Hello fishers! Sea Farmers – casual game based on WAX blockchain with NFT usage.",
  //   logo: "seafarmersio.png",
  //   web: "https://seafarmers.io",
  //   discord: "https://discord.gg/seafarmers",
  //   atomic: "https://wax.atomichub.io/explorer/collection/seafarmersio",
  //   how: `${baseHowToUrl}seafarmersio`,
  //   statistic: `${baseStatisticUrl}seafarmersio`,
  //   calculator: `${baseCalculatorUrl}seafarmersio`,
  //   game: `${baseGameUrl}seafarmersio`,
  // },
  {
    id: "007",
    name: "galaxyminerx",
    label: "Galaxy Miners",
    desc: "Galaxy Miners is a NFT Play To Earn (P2E) Game with a tokenized economy. The players can explore the vast galaxies. As humans go further into technology time traveling will soon be discovered.",
    logo: "galaxyminerx.png",
    web: "https://roboempire.io",
    discord: "http://discord.gg/galaxyminerx",
    atomic: "https://wax.atomichub.io/explorer/collection/galaxyminerx",
    how: `${baseHowToUrl}galaxyminerx`,
    statistic: `${baseStatisticUrl}galaxyminerx`,
    calculator: `${baseCalculatorUrl}galaxyminerx`,
    game: `${baseGameUrl}galaxyminerx`,
  },
  {
    id: "009",
    name: "diggersworld",
    label: "Diggers World",
    desc: "Diggers World is an NFT project with a well-thought-out economic model. The player himself chooses a game strategy while having the opportunity to earn money.",
    logo: "diggersworld.jpg",
    web: "https://diggersworld.io/",
    discord: "http://discord.gg/diggersworld",
    atomic: "https://wax.atomichub.io/explorer/collection/diggersworld",
    how: `${baseHowToUrl}diggersworld`,
    statistic: `${baseStatisticUrl}diggersworld`,
    calculator: `${baseCalculatorUrl}diggersworld`,
    game: `${baseGameUrl}diggersworld`,
  },
  {
    id: "008",
    name: "ageoffarming",
    label: "Age of Farming",
    desc: "Age of Farming is a NFT Pixelated Game based on Ancient History ages, such as Stone Age (Neolithic and Paleolithic), Bronze Age and Iron Age.",
    logo: "ageoffarming.jpg",
    web: "https://www.ageoffarming.io",
    discord: "http://discord.gg/AgeOfFarming",
    atomic: "https://wax.atomichub.io/explorer/collection/ageoffarming",
    how: `${baseHowToUrl}ageoffarming`,
    statistic: `${baseStatisticUrl}ageoffarming`,
    calculator: `${baseCalculatorUrl}ageoffarming`,
    game: `${baseGameUrl}ageoffarming`,
  },
  {
    id: "006",
    name: "roboempireio",
    label: "Robo Empire",
    desc: "Mine & Craft game style on WAX Blockchain where you can grab a NFT, build and expand your empire by your strategy.",
    logo: "roboempireio.jpeg",
    web: "https://roboempire.io",
    discord: "http://discord.gg/roboempireio",
    atomic: "https://wax.atomichub.io/explorer/collection/roboempireio",
    how: `${baseHowToUrl}roboempireio`,
    statistic: `${baseStatisticUrl}roboempireio`,
    calculator: `${baseCalculatorUrl}roboempireio`,
    game: `${baseGameUrl}roboempireio`,
  },
];

export default games;
