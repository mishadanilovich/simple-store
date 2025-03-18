import { IRequestResponse } from '@/types';

export const FormFields = {
  NAME: 'name',
  EMAIL: 'email',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
  CALLBACK_URL: 'callbackUrl',
};

export const defaultValues = {
  [FormFields.NAME]: '',
  [FormFields.EMAIL]: '',
  [FormFields.PASSWORD]: '',
  [FormFields.CONFIRM_PASSWORD]: '',
};

export const initialFormState: IRequestResponse = {
  success: false,
  message: '',
};

export const NAME_LABEL = 'Name';
export const EMAIL_LABEL = 'Email';
export const PASSWORD_LABEL = 'Password';
export const CONFIRM_PASSWORD_LABEL = 'Confirm password';

export const SIGN_UP_BUTTON = 'Sign Up';
export const PENDING_SIGN_UP_BUTTON = 'Submitting...';

export const SIGN_IN_LABEL = 'Already have an account?';
export const SIGN_IN_BUTTON = 'Sign In';
