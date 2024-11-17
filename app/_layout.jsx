import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import "../global.css";
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import Header from '@/components/Header';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Header />
      <View className='flex flex-1  absolute top-24 w-full h-full bg-slate-300'>
        <Stack screenOptions={{
          headerShown: false,  
        }}
        className='flex flex-1  absolute top-0'> 
        <Stack.Screen name="index" />
        <Stack.Screen name="+not-found" />
        </Stack>
      </View>
     
    </ThemeProvider>
    
  );
}
