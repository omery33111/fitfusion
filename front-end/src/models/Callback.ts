


export interface Callback {
  id: string;
  name: string;
  instagram: string;
  phone_number: string;
  message?: string | "ללא הודעה.";
}

export interface CallbackState {
  callbacks: Callback[];
}