export const checkAvailability = async (workspace_slug: string) => {
    try {
        // check if workspace is available or not
        console.log('workspace_slug', workspace_slug);
        const response = await fetch('/api/v1/checkAvailability', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                workspace: workspace_slug,
            })
        });
        
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || 'Failed to create blog post');
        }

        return result;
    } catch (error) {
          console.error('Error fetching data', error)
        throw new Error('Error occured in check availability')
    }

}