"use server";
import { z } from 'zod'
import { revalidatePath } from "next/cache";


// Define your form schema
// const formSchema = z.object({
//   username: z.string().min(2, { message: "Username must be at least 2 characters." }),
// });
 const signupFormSchema = z.object({
  workspace: z.string()
  .min(4, { message: "Workspace must be at least 4 characters" })
  .max(10, { message: "Workspace must be at most 10 characters" })
  .regex(/^[^\s]+$/, { message: "Workspace cannot contain spaces" }),
  email: z.string().min(2).max(100).email(),
  password: z.string().min(6).max(12),
  confirmPassword: z.string().min(6).max(12),
  agreeToTerms: z.boolean()
})

// Create the server action function
export async function createAccount(prevState: any, formData: FormData) {
  // Extract data from the FormData object
    // const username = formData.get("username");
    const workspace = formData.get("workspace");
    const emailId = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const agreeToTerms = formData.get("agreeToTerms");

    console.log('workspace', workspace);
    console.log('emailId', emailId);
    console.log('password', password);
    console.log('confirmPassword', confirmPassword);
    console.log('agreeToTerms', agreeToTerms);
        
    // workspace
    // email
    // password
    // repeat password
    // agreetotermsandconditions


  // Validate the data using Zod
  const validation = signupFormSchema.safeParse({  workspace, email: emailId, password, confirmPassword, agreeToTerms});

    // check if password matches with confirmPassword
    if (confirmPassword !== password) {
        return {
            errors: ['Passwords do not match, please try again']
        }
    }
    
    // check if workspace already exists
    const existingWorkspace = 'cloverxp' // replace with mock check availability api
    if (existingWorkspace === workspace) {
        return {
            errors: ['Workspace name is already taken, please try again with different workspace name']
        }
    }
    
    // check if email already exists
    // find user by email
    const existingUserWithEmail = 'sujaykundu777@gmail.com' // replace with mock check user api
    if (existingUserWithEmail === emailId) {
        return {
            errors: ['User already exists']
        }
    }
    
    if (password !== confirmPassword) {
        return {
          errors: ['Passwords do not match']
      }
  }
    
  if (!validation.success) {
    // Return validation errors if they exist
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  // Simulate a database call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Account created for:", validation.data.email);

  // Invalidate cache and redirect to the homepage
  revalidatePath("/");
  return { success: true };
}
