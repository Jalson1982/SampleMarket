import {StatusBar} from 'react-native';
import {
  showMessage,
  hideMessage,
  MessageType,
} from 'react-native-flash-message';

const DURATION = 2000;

const {currentHeight: statusBarHeight} = StatusBar;
export const useToastMessage = () => {
  const showToastMessage = (
    message: string,
    type: string,
    duration?: number,
  ) => {
    showMessage({
      statusBarHeight,
      message,
      type: type as MessageType,
      duration: duration || DURATION,
    });
  };

  const showErrorToastMessage = (message: string) => {
    showToastMessage(message, 'danger');
  };

  const hideToastMessage = () => {
    hideMessage();
  };
  return {
    showToastMessage,
    hideToastMessage,
    showErrorToastMessage,
  };
};
