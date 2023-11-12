import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router } from "react-router-dom";
import { Provider as JotaiProvider } from "jotai";

const ErrorFallback = () => {
  return (
    <div role="alert">
      <h2>Ooops, something went wrong :( </h2>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <JotaiProvider>
            <Router>{children}</Router>
          </JotaiProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
