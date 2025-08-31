import { NextRequest, NextResponse } from 'next/server';
interface ReqBody {
    workspace: string
}

export async function POST(req: Request): Promise<Response> {
    const { workspace }: ReqBody = await req.json(); 
  
    // checking if workspace exists or not 
    const existingWorkspace = [{
        'id': 1,
        'workspace': 'zlancers',
    }];
    

    if (existingWorkspace.length > 0 && existingWorkspace[0].workspace === workspace) {
          return NextResponse.json(
            {
                success: true,
                message: 'workspace already exists'
              },
            { status: 200 }
          );
    }
    return NextResponse.json({
        success: false,
        message: 'workspace not found'
    }, { status: 400 });
}