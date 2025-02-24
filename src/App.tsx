import { FC, useEffect, useState } from 'react';
import { StrictMode } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CssBaseline, Stack } from '@mui/material';
import { Routes } from './Routes';
import { AuthContext } from './context/AuthContext';
import { ThemeModeSettingContextProviderWrapper } from './core/theme/ThemeModeSettingContextProviderWrapper';
import { ThemeProvider } from './core/theme/ThemeProvider';
import { MIN_WIDTH } from './core/theme/constants';
import { rpc } from './rpc';
import { supabase } from './supabaseClient';

const queryClient = new QueryClient();

export const App: FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async (): Promise<void> => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
      setIsInitialized(true);

      supabase.auth.onAuthStateChange((_event, session) => {
        setIsAuthenticated(!!session);
      });
      const res = await rpc.test1();
      console.log(res);
    })();
  }, []);

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeModeSettingContextProviderWrapper>
          <ThemeProvider>
            <AuthContext.Provider value={{ isAuthenticated }}>
              <CssBaseline enableColorScheme />
              <Stack height="100%" minWidth={MIN_WIDTH}>
                <BrowserRouter>{isInitialized && <Routes />}</BrowserRouter>
              </Stack>
            </AuthContext.Provider>
          </ThemeProvider>
        </ThemeModeSettingContextProviderWrapper>
      </QueryClientProvider>
    </StrictMode>
  );
};
