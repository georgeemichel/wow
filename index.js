import { Navigation } from 'react-native-navigation';
import { pushTutorialScreen } from 'src/navigation';
import { push_Home_Screen } from './src/navigation';

Navigation.events().registerAppLaunchedListener(() => push_Home_Screen());
