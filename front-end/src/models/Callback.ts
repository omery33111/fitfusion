


export interface Callback {
  id: string;
  name: string;
  instagram: string;
  phone_number: string;
  message?: string;
}

export interface CallbackState {
  callbacks: Callback[];
}