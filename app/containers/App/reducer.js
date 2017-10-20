/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_CHAMPIONS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  champions: [
    {
      id: 1,
      name: 'Aatrox',
    },{
      id: 2,
      name: 'Ahri',
    },{
      id: 3,
      name: 'Akali',
    },{
      id: 4,
      name: 'Alistar',
    },{
      id: 5,
      name: 'Amumu',
    },{
      id: 6,
      name: 'Anivia',
    },{
      id: 7,
      name: 'Annie',
    },{
      id: 8,
      name: 'AurelionSol',
    },{
      id: 9,
      name: 'Blitzcrank',
    },{
      id: 10,
      name: 'Brand',
    },{
      id: 11,
      name: 'Braum',
    },{
      id: 12,
      name: 'Caitlyn',
    },{
      id: 13,
      name: 'Camille',
    },{
      id: 14,
      name: 'Cassiopeia',
    },{
      id: 15,
      name: 'ChoGath',
    },{
      id: 16,
      name: 'Corki',
    },{
      id: 17,
      name: 'Darius',
    },{
      id: 18,
      name: 'Diana',
    },{
      id: 19,
      name: 'DrMundo',
    },{
      id: 20,
      name: 'Draven',
    },{
      id: 21,
      name: 'Ekko',
    },{
      id: 22,
      name: 'Elise',
    },{
      id: 23,
      name: 'Evelynn',
    },{
      id: 24,
      name: 'Ezreal',
    },{
      id: 25,
      name: 'Fiddlesticks',
    },{
      id: 26,
      name: 'Fiora',
    },{
      id: 27,
      name: 'Fizz',
    },{
      id: 28,
      name: 'Galio',
    },{
      id: 29,
      name: 'Gangplank',
    },{
      id: 30,
      name: 'Garen',
    },{
      id: 31,
      name: 'Gnar',
    },{
      id: 32,
      name: 'Gragas',
    },{
      id: 33,
      name: 'Graves',
    },{
      id: 34,
      name: 'Hecarim',
    },{
      id: 35,
      name: 'Heimerdinger',
    },{
      id: 36,
      name: 'Illaoi',
    },{
      id: 37,
      name: 'Irelia',
    },{
      id: 38,
      name: 'Ivern',
    },{
      id: 39,
      name: 'Janna',
    },{
      id: 40,
      name: 'JarvanIV',
    },{
      id: 41,
      name: 'Jax',
    },{
      id: 42,
      name: 'Jayce',
    },{
      id: 43,
      name: 'Jhin',
    },{
      id: 44,
      name: 'Jinx',
    },{
      id: 45,
      name: 'Kalista',
    },{
      id: 46,
      name: 'Karthus',
    },{
      id: 47,
      name: 'Kassadin',
    },{
      id: 48,
      name: 'Katarina',
    },{
      id: 49,
      name: 'Kayle',
    },{
      id: 50,
      name: 'Kayn',
    },{
      id: 51,
      name: 'Kennen',
    },{
      id: 52,
      name: 'KhaZix',
    },{
      id: 53,
      name: 'Kindred',
    },{
      id: 54,
      name: 'Kled',
    },{
      id: 55,
      name: 'KogMaw',
    },{
      id: 56,
      name: 'LeBlanc',
    },{
      id: 57,
      name: 'LeeSin',
    },{
      id: 58,
      name: 'Leona',
    },{
      id: 59,
      name: 'Lissandra',
    },{
      id: 60,
      name: 'Lucian',
    },{
      id: 61,
      name: 'Lulu',
    },{
      id: 62,
      name: 'Lux',
    },{
      id: 63,
      name: 'Malphite',
    },{
      id: 64,
      name: 'Malzahar',
    },{
      id: 65,
      name: 'Maokai',
    },{
      id: 66,
      name: 'MasterYi',
    },{
      id: 67,
      name: 'MissFortune',
    },{
      id: 68,
      name: 'Mordekaiser',
    },{
      id: 69,
      name: 'Morgana',
    },{
      id: 70,
      name: 'Nami',
    },{
      id: 71,
      name: 'Nasus',
    },{
      id: 72,
      name: 'Nautilus',
    },{
      id: 73,
      name: 'Nidalee',
    },{
      id: 74,
      name: 'Nocturne',
    },{
      id: 75,
      name: 'Nunu',
    },{
      id: 76,
      name: 'Olaf',
    },{
      id: 77,
      name: 'Orianna',
    },{
      id: 78,
      name: 'Ornn',
    },{
      id: 79,
      name: 'Pantheon',
    },{
      id: 80,
      name: 'Poppy',
    },{
      id: 81,
      name: 'Quinn',
    },{
      id: 82,
      name: 'Rakan',
    },{
      id: 83,
      name: 'Rammus',
    },{
      id: 84,
      name: 'RekSai',
    },{
      id: 85,
      name: 'Renekton',
    },{
      id: 86,
      name: 'Rengar',
    },{
      id: 87,
      name: 'Riven',
    },{
      id: 88,
      name: 'Rumble',
    },{
      id: 89,
      name: 'Ryze',
    },{
      id: 90,
      name: 'Sejuani',
    },{
      id: 91,
      name: 'Shaco',
    },{
      id: 92,
      name: 'Shen',
    },{
      id: 93,
      name: 'Shyvana',
    },{
      id: 94,
      name: 'Singed',
    },{
      id: 95,
      name: 'Sion',
    },{
      id: 96,
      name: 'Sivir',
    },{
      id: 97,
      name: 'Skarner',
    },{
      id: 98,
      name: 'Sona',
    },{
      id: 99,
      name: 'Soraka',
    },{
      id: 100,
      name: 'Swain',
    },{
      id: 101,
      name: 'Syndra',
    },{
      id: 102,
      name: 'TahmKench',
    },{
      id: 103,
      name: 'Talon',
    },{
      id: 104,
      name: 'Taric',
    },{
      id: 105,
      name: 'Tailyah',
    },{
      id: 106,
      name: 'Teemo',
    },{
      id: 107,
      name: 'Thresh',
    },{
      id: 108,
      name: 'Tristana',
    },{
      id: 109,
      name: 'Trundle',
    },{
      id: 110,
      name: 'Tryndamere',
    },{
      id: 111,
      name: 'TwistedFate',
    },{
      id: 112,
      name: 'Twitch',
    },{
      id: 113,
      name: 'Udyr',
    },{
      id: 114,
      name: 'Urgot',
    },{
      id: 115,
      name: 'Varus',
    },{
      id: 116,
      name: 'Vayne',
    },{
      id: 117,
      name: 'Veigar',
    },{
      id: 118,
      name: 'VelKoz',
    },{
      id: 119,
      name: 'Vi',
    },{
      id: 120,
      name: 'Viktor',
    },{
      id: 121,
      name: 'Vladimir',
    },{
      id: 122,
      name: 'Volibear',
    },{
      id: 123,
      name: 'Warwick',
    },{
      id: 124,
      name: 'Wukong',
    },{
      id: 125,
      name: 'Xerath',
    },{
      id: 126,
      name: 'Xayah',
    },{
      id: 127,
      name: 'XinZhao',
    },{
      id: 128,
      name: 'Yasuo',
    },{
      id: 129,
      name: 'Yorick',
    },{
      id: 130,
      name: 'Zac',
    },{
      id: 131,
      name: 'Zed',
    },{
      id: 132,
      name: 'Ziggs',
    },{
      id: 133,
      name: 'Zilean',
    },{
      id: 134,
      name: 'Zyra',
    },
  ],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CHAMPIONS:
      return state
        .set('champions', action.champions);
    default:
      return state;
  }
}

export default appReducer;
