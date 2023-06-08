export interface SignupFormProps {
  fullname?: string;
  phoneNumber?: string;
  email?: string;
  password?: string;
  referralCode?: number;
  onFinish?: (values: SignupFormProps) => void;
}