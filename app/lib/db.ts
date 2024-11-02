import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = () => {
    return new PrismaClient();
};


declare const globalThis: {
    prismaGblobal: ReturnType<typeof PrismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGblobal ?? PrismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGblobal = prisma;