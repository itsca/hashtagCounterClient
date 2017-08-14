import { extendObservable, action } from 'mobx';
import {bake_cookie, read_cookie} from 'sfcookies';

class SearchHistory {
  constructor() {
      extendObservable(this, {
         history: read_cookie('rhc_searchHistory') || [],
         addToHistory: action(function addToHistory(newSearch) {
           this.history.push(newSearch);
           this.history = this.history.sort(function(obj1, obj2) {
             return obj2.hashtagCount - obj1.hashtagCount;
           });
           bake_cookie('rhc_searchHistory', this.history);
         }),
         deleteHistory: action(function deleteHistory() {
           this.history = [];
           bake_cookie('rhc_searchHistory', this.history);
         }),
      })
  }
}

export default new SearchHistory();
