import { z } from 'zod';
export const RegistrationInputSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .max(10, 'Name must be at most 10 charaters'),
  username: z
    .string()
    .min(1, 'Username is required')
    .trim()
    .max(10, 'Username must be at most 10 charaters'),
  email: z.string().trim().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 charaters')
    .max(32, 'Password must be long than 32 charaters'),
  // .regex(
  //   /(?=.*?['!"#$%&()*,./:;?@[\]^_`{|}~+<=>-])/,
  //   'At least a special characters'
  // )
  // .regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])+/,
  //   'Password requirements has not been reached'
  // ),
});

export type RegistrationInput = z.infer<typeof RegistrationInputSchema>;
