import { RpcMethods } from './rpc-types/rpc-ts-server';
import { createRpcClient } from '@nikolayemrikh/rpc-ts-client';

// Экспортируем с типами
export const rpc = createRpcClient<RpcMethods>(import.meta.env.VITE_API_URL);
