import { App, ConfigProvider, theme } from 'antd';
import { useMediaQuery } from 'react-responsive';

export const AppWrapper = () => {
  const isDarkMode = useMediaQuery({ query: '(prefers-color-scheme: dark)' });
  return (
    <ConfigProvider
      theme={{
        algorithm: [isDarkMode ? theme.defaultAlgorithm : theme.darkAlgorithm]
      }}>
      <App style={{ colorScheme: isDarkMode ? 'dark' : 'light' }}>Hello</App>
    </ConfigProvider>
  );
};
