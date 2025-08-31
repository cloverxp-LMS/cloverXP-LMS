'use server'

import { checkAvailability } from "@/services/workspaces/checkAvailability";

export async function checkAvailabilityAction(prevState: any, formData: FormData) {
    const workspace = formData.get('workspace') as string
    
    // Implement the availability check logic here
    console.log('Checking availability for workspace:', workspace)
    
    if (!formData) {
      // resetting the form data
      return { success: false, message: '' }
    }
    // Simulate availability check result
    // call api to check if the workspace is available or not
    const result = await checkAvailability(workspace)

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
}