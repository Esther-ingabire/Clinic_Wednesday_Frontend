import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import LibraryHeader from './components/LibraryHeader'
import Office from './components/Office'
import OfficeList from './components/OfficeList'
import LibraryLogin from './components/LibraryLogin'
import LibraryMain from './components/LibraryMain'

function App() {
  const [refresh, setRefresh] = useState(0)

  function reloadList() {
    setRefresh(refresh + 1)
  }

  return (
    <div>
      <LibraryHeader />

      <Routes>
        <Route path="/" element={<LibraryLogin />} />
        <Route path="/office" element={
          <>
            <Office reloadList={reloadList} />
            <OfficeList refresh={refresh} />
          </>
        } />
        <Route path="/main" element={<LibraryMain />} />
      </Routes>
    </div>
  )
}

export default App
