import React from 'react';
import { Container } from './css';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Related from './components/Related';
import LayoutRelatedGrid from './components/Related/LayoutRelatedGrid'
import {relateds, news} from './data'

function App() {
  return (
    <Container>
      <Menu />
      <Banner news={news} />
      <LayoutRelatedGrid>
      {relateds ? relateds.map(related => 
        <Related 
          key={related.id}
          id={related.id} 
          position={related.position} 
          title={related.title} 
          content={related.content} 
          img={related.img} 
        />
      ) : null}
      </LayoutRelatedGrid>
      
    </Container>
  );
}

export default App;
