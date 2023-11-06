import { z } from 'zod';
export const SignUpInputSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  username: z.string().min(1, 'Username is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 charaters'),
});

export type SignUpInput = z.infer<typeof SignUpInputSchema>;
