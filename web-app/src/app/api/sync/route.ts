import { currentUser } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    const user = await currentUser();

    if (!user) {
        return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    const email = user.emailAddresses[0]?.emailAddress;

    if (!email) {
        return NextResponse.json({ message: 'No email found' }, { status: 400 });
    }

    // Upsert user in database
    await prisma.user.upsert({
        where: { id: user.id },
        update: {
            email,
            firstName: user.firstName,
            lastName: user.lastName,
            imageUrl: user.imageUrl,
        },
        create: {
            id: user.id,
            email,
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            imageUrl: user.imageUrl,
            role: 'USER',
        },
    });

    return NextResponse.json({ message: 'User synced successfully' });
}
