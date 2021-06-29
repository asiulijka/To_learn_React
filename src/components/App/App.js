import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List title={['Do things to', <sup key='1'>soon!</sup>]} 
              image={'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F09%2F15%2FThe-Mandalorian5.jpg'} >
          {/* <p>Sooner do things, later rather than!</p> */}
        </List>
      </main>
    )
  }
}

export default App;
