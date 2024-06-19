import {useEffect, useState} from 'react';
import throttle from 'lodash.throttle';
import {AggTrade} from '@types';
import {environmentConfig} from '@environment';

const THROTTLE_TIME = 1000;
const {BINANCE_WEBSOCKET_URL} = environmentConfig as {
  BINANCE_WEBSOCKET_URL: string;
};

export const useMarketData = () => {
  const [tradeData, setTradeData] = useState<AggTrade[]>([]);

  const throttledUpdate = throttle(data => {
    setTradeData(prevData => [data, ...prevData]);
  }, THROTTLE_TIME);

  useEffect(() => {
    const ws = new WebSocket(BINANCE_WEBSOCKET_URL);

    ws.onopen = () => {
      const subscriptionMessage = {
        method: 'SUBSCRIBE',
        params: ['btcusdt@aggTrade'],
        id: 1,
      };
      ws.send(JSON.stringify(subscriptionMessage));
    };

    ws.onmessage = event => {
      const data = JSON.parse(event.data);
      throttledUpdate(data);
    };

    ws.onerror = error => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    tradeData,
  };
};
