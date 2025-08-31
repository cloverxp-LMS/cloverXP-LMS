'use server'
export async function checkAvailability(prevState: any, formData: FormData) {
  const workspace = formData.get('workspace')
  // Implement the availability check logic here
  console.log('Checking availability for workspace:', workspace)
    // Simulate availability check result
    
    const isAvailable = false;
    if (!isAvailable) {
        return {
            success: false,
            message: 'Workspace is unavailable'
        }
    }

    return {
        success: true,
        message: 'Workspace is available'
  }
}