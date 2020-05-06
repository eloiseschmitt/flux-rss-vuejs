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
getQuotes(){
  return [...]
}