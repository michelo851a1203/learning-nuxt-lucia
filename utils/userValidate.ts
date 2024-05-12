import * as zod from 'zod';

export const userFormDataSchema = zod.object({
  userName: zod
    .string()
    .regex(/^[a-z0-9_-]+$/g, 'userName must combine with English and digits')
    .min(1, 'username required')
    .min(3, 'userName is more than 3 characters')
    .max(31, 'userName is less than 31 characters'),
  password: zod
    .string()
    .min(1, 'password required')
    .min(6, 'password must greater than 6 length')
    .max(255, 'password must be less than 255 length')
});

export type UserFormDataSchema = zod.infer<typeof userFormDataSchema>;

export const validateUserFormData = (form: FormData): UserFormDataSchema => {
  const receiveRequest = {
    userName: form.get('userName'),
    password: form.get('password')
  };

  const validateForm = userFormDataSchema.safeParse(receiveRequest);

  if (!validateForm.success)
    throw createError({
      statusCode: 405,
      message: validateForm.error.message
    });

  const validatedRequest = validateForm.data;
  return validatedRequest;
};
