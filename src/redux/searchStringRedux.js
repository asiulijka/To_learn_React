// selectors
export const getSearchString = ({searchString}) => searchString;
export const countVisibleCards  = ({searchString, cards}) => 
  cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const SEARCH = createActionName('SEARCH');

// action creators
export const createAction_changeSearchString = searchString => (
  { 
    payload: { 
      searchString,
    }, 
    type: SEARCH });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case SEARCH:
      return action.payload.searchString;
    default:
      return statePart;
  }
}

