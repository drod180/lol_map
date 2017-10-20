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
      selected: true,
    },{
      id: 2,
      name: 'Ahri',
      selected: true,
    },{
      id: 3,
      name: 'Akali',
      selected: true,
    },{
      id: 4,
      name: 'Alistar',
      selected: true,
    },{
      id: 5,
      name: 'Amumu',
      selected: true,
    },{
      id: 6,
      name: 'Anivia',
      selected: true,
    },{
      id: 7,
      name: 'Annie',
      selected: true,
    },{
      id: 8,
      name: 'AurelionSol',
      selected: true,
    },{
      id: 9,
      name: 'Blitzcrank',
      selected: true,
    },{
      id: 10,
      name: 'Brand',
      selected: true,
    },{
      id: 11,
      name: 'Braum',
      selected: true,
    },{
      id: 12,
      name: 'Caitlyn',
      selected: true,
    },{
      id: 13,
      name: 'Camille',
      selected: true,
    },{
      id: 14,
      name: 'Cassiopeia',
      selected: true,
    },{
      id: 15,
      name: 'ChoGath',
      selected: true,
    },{
      id: 16,
      name: 'Corki',
      selected: true,
    },{
      id: 17,
      name: 'Darius',
      selected: true,
    },{
      id: 18,
      name: 'Diana',
      selected: true,
    },{
      id: 19,
      name: 'DrMundo',
      selected: true,
    },{
      id: 20,
      name: 'Draven',
      selected: true,
    },{
      id: 21,
      name: 'Ekko',
      selected: true,
    },{
      id: 22,
      name: 'Elise',
      selected: true,
    },{
      id: 23,
      name: 'Evelynn',
      selected: true,
    },{
      id: 24,
      name: 'Ezreal',
      selected: true,
    },{
      id: 25,
      name: 'Fiddlesticks',
      selected: true,
    },{
      id: 26,
      name: 'Fiora',
      selected: true,
    },{
      id: 27,
      name: 'Fizz',
      selected: true,
    },{
      id: 28,
      name: 'Galio',
      selected: true,
    },{
      id: 29,
      name: 'Gangplank',
      selected: true,
    },{
      id: 30,
      name: 'Garen',
      selected: true,
    },{
      id: 31,
      name: 'Gnar',
      selected: true,
    },{
      id: 32,
      name: 'Gragas',
      selected: true,
    },{
      id: 33,
      name: 'Graves',
      selected: true,
    },{
      id: 34,
      name: 'Hecarim',
      selected: true,
    },{
      id: 35,
      name: 'Heimerdinger',
      selected: true,
    },{
      id: 36,
      name: 'Illaoi',
      selected: true,
    },{
      id: 37,
      name: 'Irelia',
      selected: true,
    },{
      id: 38,
      name: 'Ivern',
      selected: true,
    },{
      id: 39,
      name: 'Janna',
      selected: true,
    },{
      id: 40,
      name: 'JarvanIV',
      selected: true,
    },{
      id: 41,
      name: 'Jax',
      selected: true,
    },{
      id: 42,
      name: 'Jayce',
      selected: true,
    },{
      id: 43,
      name: 'Jhin',
      selected: true,
    },{
      id: 44,
      name: 'Jinx',
      selected: true,
    },{
      id: 45,
      name: 'Kalista',
      selected: true,
    },{
      id: 46,
      name: 'Karthus',
      selected: true,
    },{
      id: 47,
      name: 'Kassadin',
      selected: true,
    },{
      id: 48,
      name: 'Katarina',
      selected: true,
    },{
      id: 49,
      name: 'Kayle',
      selected: true,
    },{
      id: 50,
      name: 'Kayn',
      selected: true,
    },{
      id: 51,
      name: 'Kennen',
      selected: true,
    },{
      id: 52,
      name: 'KhaZix',
      selected: true,
    },{
      id: 53,
      name: 'Kindred',
      selected: true,
    },{
      id: 54,
      name: 'Kled',
      selected: true,
    },{
      id: 55,
      name: 'KogMaw',
      selected: true,
    },{
      id: 56,
      name: 'LeBlanc',
      selected: true,
    },{
      id: 57,
      name: 'LeeSin',
      selected: true,
    },{
      id: 58,
      name: 'Leona',
      selected: true,
    },{
      id: 59,
      name: 'Lissandra',
      selected: true,
    },{
      id: 60,
      name: 'Lucian',
      selected: true,
    },{
      id: 61,
      name: 'Lulu',
      selected: true,
    },{
      id: 62,
      name: 'Lux',
      selected: true,
    },{
      id: 63,
      name: 'Malphite',
      selected: true,
    },{
      id: 64,
      name: 'Malzahar',
      selected: true,
    },{
      id: 65,
      name: 'Maokai',
      selected: true,
    },{
      id: 66,
      name: 'MasterYi',
      selected: true,
    },{
      id: 67,
      name: 'MissFortune',
      selected: true,
    },{
      id: 68,
      name: 'Mordekaiser',
      selected: true,
    },{
      id: 69,
      name: 'Morgana',
      selected: true,
    },{
      id: 70,
      name: 'Nami',
      selected: true,
    },{
      id: 71,
      name: 'Nasus',
      selected: true,
    },{
      id: 72,
      name: 'Nautilus',
      selected: true,
    },{
      id: 73,
      name: 'Nidalee',
      selected: true,
    },{
      id: 74,
      name: 'Nocturne',
      selected: true,
    },{
      id: 75,
      name: 'Nunu',
      selected: true,
    },{
      id: 76,
      name: 'Olaf',
      selected: true,
    },{
      id: 77,
      name: 'Orianna',
      selected: true,
    },{
      id: 78,
      name: 'Ornn',
      selected: true,
    },{
      id: 79,
      name: 'Pantheon',
      selected: true,
    },{
      id: 80,
      name: 'Poppy',
      selected: true,
    },{
      id: 81,
      name: 'Quinn',
      selected: true,
    },{
      id: 82,
      name: 'Rakan',
      selected: true,
    },{
      id: 83,
      name: 'Rammus',
      selected: true,
    },{
      id: 84,
      name: 'RekSai',
      selected: true,
    },{
      id: 85,
      name: 'Renekton',
      selected: true,
    },{
      id: 86,
      name: 'Rengar',
      selected: true,
    },{
      id: 87,
      name: 'Riven',
      selected: true,
    },{
      id: 88,
      name: 'Rumble',
      selected: true,
    },{
      id: 89,
      name: 'Ryze',
      selected: true,
    },{
      id: 90,
      name: 'Sejuani',
      selected: true,
    },{
      id: 91,
      name: 'Shaco',
      selected: true,
    },{
      id: 92,
      name: 'Shen',
      selected: true,
    },{
      id: 93,
      name: 'Shyvana',
      selected: true,
    },{
      id: 94,
      name: 'Singed',
      selected: true,
    },{
      id: 95,
      name: 'Sion',
      selected: true,
    },{
      id: 96,
      name: 'Sivir',
      selected: true,
    },{
      id: 97,
      name: 'Skarner',
      selected: true,
    },{
      id: 98,
      name: 'Sona',
      selected: true,
    },{
      id: 99,
      name: 'Soraka',
      selected: true,
    },{
      id: 100,
      name: 'Swain',
      selected: true,
    },{
      id: 101,
      name: 'Syndra',
      selected: true,
    },{
      id: 102,
      name: 'TahmKench',
      selected: true,
    },{
      id: 103,
      name: 'Talon',
      selected: true,
    },{
      id: 104,
      name: 'Taric',
      selected: true,
    },{
      id: 105,
      name: 'Taliyah',
      selected: true,
    },{
      id: 106,
      name: 'Teemo',
      selected: true,
    },{
      id: 107,
      name: 'Thresh',
      selected: true,
    },{
      id: 108,
      name: 'Tristana',
      selected: true,
    },{
      id: 109,
      name: 'Trundle',
      selected: true,
    },{
      id: 110,
      name: 'Tryndamere',
      selected: true,
    },{
      id: 111,
      name: 'TwistedFate',
      selected: true,
    },{
      id: 112,
      name: 'Twitch',
      selected: true,
    },{
      id: 113,
      name: 'Udyr',
      selected: true,
    },{
      id: 114,
      name: 'Urgot',
      selected: true,
    },{
      id: 115,
      name: 'Varus',
      selected: true,
    },{
      id: 116,
      name: 'Vayne',
      selected: true,
    },{
      id: 117,
      name: 'Veigar',
      selected: true,
    },{
      id: 118,
      name: 'VelKoz',
      selected: true,
    },{
      id: 119,
      name: 'Vi',
      selected: true,
    },{
      id: 120,
      name: 'Viktor',
      selected: true,
    },{
      id: 121,
      name: 'Vladimir',
      selected: true,
    },{
      id: 122,
      name: 'Volibear',
      selected: true,
    },{
      id: 123,
      name: 'Warwick',
      selected: true,
    },{
      id: 124,
      name: 'Wukong',
      selected: true,
    },{
      id: 125,
      name: 'Xerath',
      selected: true,
    },{
      id: 126,
      name: 'Xayah',
      selected: true,
    },{
      id: 127,
      name: 'XinZhao',
      selected: true,
    },{
      id: 128,
      name: 'Yasuo',
      selected: true,
    },{
      id: 129,
      name: 'Yorick',
      selected: true,
    },{
      id: 130,
      name: 'Zac',
      selected: true,
    },{
      id: 131,
      name: 'Zed',
      selected: true,
    },{
      id: 132,
      name: 'Ziggs',
      selected: true,
    },{
      id: 133,
      name: 'Zilean',
      selected: true,
    },{
      id: 134,
      name: 'Zyra',
      selected: true,
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
