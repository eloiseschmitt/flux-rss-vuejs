import { storage } from '../utils'

// State of app
const state = {
  channels: storage.get('qr_channels') || [],
  favs: storage.get('qr_favs') || [],
  showAddChannel: false,
  quotes: getQuotes(),
  collapseSideBar: storage.get('qr_sidebar_collapse') || false
}

// some quotes for dashboard
function getQuotes(){
  return [
    "Happiness is an attitude. We either make ourselve…e amount of work is the same. -- Carlos Castaneda",
    "When one door of happiness closes, another opens,… one that has been opened for us. -- Helen Keller",
  ];
}

export default state;