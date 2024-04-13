import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout';
import './App.css'
import { Achievements, Catalog, Certificates, MyEducation, ProgressScheme, RegPage, AuthPage, Tasks, TaskDescription, Modules, AddModule, ChangeModule,Leaderboard, ChangeChallenge, AddChallenge, Lk,Solution } from './pages';
import { Provider } from 'react-redux';
import store from './redux/store';

import { ProtectedRoutes } from './routes/protected-routes';
import BotPage from '@/pages/bot/bot-page.jsx';
import { Map } from './pages/map/map';
import { ProjectHub } from './pages/project-hub/project-hub';
import { Cooperative } from './pages/cooperative';

function App() {
  let user = false
  return <Provider store={store}>
    <Router>
      <Routes>
        <Route  path="register" element={<RegPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route element={<MainLayout />}>
          <Route path='cooperative' element={<Cooperative />} />  
          <Route path='' element={<BotPage />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='myresults' element={<MyEducation />} />
          <Route path="achievments" element={<Achievements/>}/>
          <Route path='tasks' element={<ProtectedRoutes user={user}><Tasks /></ProtectedRoutes>} />
          <Route path='tasks/:id' element={<ProtectedRoutes user={user}><TaskDescription /> </ProtectedRoutes>} />
          <Route path='tasks/:id/solution' element={<ProtectedRoutes user={user}><Solution /> </ProtectedRoutes>} />
          <Route path='catalog' element={<ProtectedRoutes user={user}><Catalog /></ProtectedRoutes>} />
          <Route path='myeductaion' element={<ProtectedRoutes user={user}><MyEducation /></ProtectedRoutes>} />
          <Route path='progress' element={<ProtectedRoutes user={user}><ProgressScheme /></ProtectedRoutes>} />
          <Route path='certificates' element={<ProtectedRoutes user={user}><Certificates /></ProtectedRoutes>} />
          <Route path='map' element={<ProtectedRoutes user={user}><Map /></ProtectedRoutes>} />
          <Route path='modules' element={<ProtectedRoutes user={user}><Modules /></ProtectedRoutes>} />
          <Route path='lk' element={<ProtectedRoutes user={user}><Lk /></ProtectedRoutes>} />
          <Route path='project-hub' element={<ProjectHub/>}/>
          <Route path='modules/change-module' element={<ProtectedRoutes user={user}><ChangeModule /></ProtectedRoutes>} />
          <Route path='modules/add-module' element={<ProtectedRoutes user={user}><AddModule /></ProtectedRoutes>} />
          <Route path='modules/add-challenge' element={<ProtectedRoutes user={user}><AddChallenge /> </ProtectedRoutes>} />
          <Route path='modules/change-challenge/:id' element={<ProtectedRoutes user={user}><ChangeChallenge /> </ProtectedRoutes>} />
        </Route>
      </Routes>
    </Router>
  </Provider>
}

export default App
