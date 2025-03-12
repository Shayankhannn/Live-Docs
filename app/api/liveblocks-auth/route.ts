import { liveblocks } from "@/lib/liveblocks";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export async function POST(request: Request) {
    const clerkUser = await currentUser();

    if(!clerkUser) redirect('/sign-in');
  // Get the current user from your database
  const {id,firstName,lastName,emailAddresses,imageUrl} = clerkUser;
  const user = {
    id,
    info: {
      name: `${firstName} ${lastName}`,
      email: emailAddresses[0].emailAddress,
      avatar:imageUrl,
      
    },
    // Add any additional user groups you want to assign
    groupIds: ['your-group-id'], // Replace with your actual group ID(s)
  };

  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.id,
      groupIds, // Optional
    },
    { userInfo: user.metadata },
  );

  return new Response(body, { status });
}