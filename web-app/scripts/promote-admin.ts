import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const prisma = new PrismaClient();

async function main() {
    const email = 'eflexcloud@gmail.com';

    console.log(`Checking for user with email: ${email}...`);

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        console.log(`User not found. Please sign up/login first.`);
        return;
    }

    console.log(`User found: ${user.firstName} ${user.lastName} (${user.id})`);
    console.log(`Current role: ${user.role}`);

    if (user.role === 'ADMIN') {
        console.log('User is already an ADMIN.');
        return;
    }

    const updatedUser = await prisma.user.update({
        where: { email },
        data: { role: 'ADMIN' },
    });

    console.log(`Successfully promoted ${updatedUser.email} to ADMIN!`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
