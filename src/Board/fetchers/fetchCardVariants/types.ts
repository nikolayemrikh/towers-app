import { Database } from '@app/supabase-db.types';

export type TCardPower = Database['public']['Enums']['Power'];
export type TCardVariants = Map<number, TCardPower>;
