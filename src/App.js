import React from 'react';

//HOC's
import AppAuth from './App.auth';
import AppTheme from './App.theme';
import AppEditables from './app.edittables';
import AppGQLClient from './App.gqlclient';
import AppAlert from './App.alert';
import AppErrorBoundary from './App.error_boundry';
import RouterApp from './router';

function App() {
  return <AppAuth>
    <AppErrorBoundary>
      <AppTheme>
        <AppGQLClient>
          <AppAlert>
            <AppEditables>
              <RouterApp />
            </AppEditables>
          </AppAlert>
        </AppGQLClient>
      </AppTheme>
    </AppErrorBoundary>
  </AppAuth>
}

export default App;