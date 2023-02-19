import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async () => {
    const user = await prisma.user.create({
        data: {
            name: '蔡军',
            email: 'jeantsai@qq.com'
        },
    });
    console.log("🚀 ~ file: data.ts:12 ~ createUser ~ user", user);
}

const createPost = async (userId: number) => {
    const user = await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
          posts: {
              create: {
                title: '测试博文',
              },
            },
        },
    });
    console.log("🚀 ~ file: data.ts:12 ~ createUser ~ user", user);
}

// createPost(1)
createUser()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        console.error("🚀 ~ file: data.ts:20 ~ error", error);
        await prisma.$disconnect();
        process.exit(1);
    });

