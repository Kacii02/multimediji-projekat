import Collection from './Collection'
import "./styles/Collections.css"
import collectionsDB from "./database/collections.json"
//jedan objekat iz niza objekata collectionsDB je inCollection
const Collections = ({setCollection}) => {
  
  return (
    <div className='collections'>
      {
        collectionsDB.map((inCollection) => (
          <Collection key={inCollection.title} setCollection={setCollection} inCollection={inCollection} />
        ))
      }
    </div>
  )
}

export default Collections