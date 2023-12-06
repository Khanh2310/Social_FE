import * as z from 'zod';

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  fullname: z.string().min(5).max(30),
  username: z.string().min(3).max(30),
  email: z.string().email().min(5).max(30),
  bio: z.string().min(5).max(1000),
});
