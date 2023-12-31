import { z } from 'zod';
export const SignInInputSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 charaters'),
});
export type SignInput = z.infer<typeof SignInInputSchema>;
