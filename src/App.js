import React from 'react'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-TGRVLZG',
}

TagManager.initialize(tagManagerArgs)


function App() {


  window.dataLayer.push({
    event: 'pageview'
  });

  return (
    <div className="App">
     <h2>Hola Mundo</h2>
    </div>
  );
}

export default App;
