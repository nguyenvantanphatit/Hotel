export type PaymentDetailForm = {
  email_address: string;
  card_number: string;
  expiry_date: string;
  CVV: string;
}
export type formItems ={
  label: string;
  value: number;
}

export type RoomData = {
  src: string;
  title: string;
  description: string;
  services: string;
  time: string;
};