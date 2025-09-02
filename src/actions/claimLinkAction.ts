'use server'

import { checkAvailability } from "@/services/workspaces/checkAvailability";

async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), ms)
    ),
  ])
}


export async function checkAvailabilityAction(prevState: any, formData: FormData) {
    const workspace = formData.get('workspace') as string
    
    // Implement the availability check logic here
    console.log('Checking availability for workspace:', workspace)
    
    if (!formData) {
      // resetting the form data
      return { success: false, message: '' }
    }

    // call api to check if the workspace is available or not
   
    try {
        const result = await withTimeout(checkAvailability(workspace), 1000)

        if (result.success) {
            return {
                success: false,
                message: 'Workspace is unavailable'
            }
        } else {
            return {
                success: true,
                message: 'Workspace is available'
            }
        }
    } catch (err: any) {
    // Timeout or API failure
    return {
      success: false,
      message: err.message === 'Request timed out'
        ? 'Request timed out ⏱️'
        : 'Something went wrong ❌',
    }
  }
}