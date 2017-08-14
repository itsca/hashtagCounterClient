import { observable, extendObservable, action } from 'mobx';
import {bake_cookie, read_cookie} from 'sfcookies';

class SearchHistory {
  constructor() {
      extendObservable(this, {
         history: [
           { hashtagName: 'costaRica', hashtagCount: 259 },
         ],
         addToHistory: action(function addToHistory(newSearch) {
           console.log('newSearch', newSearch);
           this.history.push(newSearch);
           console.log('New History', this.history);
         })
      })
  }


  // all = observable([
  //   { hashtagName: 'costaRica', hashtagCount: 259 },
  // ]);
}

export default new SearchHistory();
