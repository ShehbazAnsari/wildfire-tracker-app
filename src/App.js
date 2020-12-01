import React, { useState, useEffect } from 'react'
import Map from './components/Map'
import axios from 'axios'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {

    setloading(true)
    const fetchEvents = async () => {
      const { data: { events } } = await axios.get('Enter Your NASA Api')
      setEventData(events)
      setloading(false)
    }
    fetchEvents()
  }, [])

  return (

    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
