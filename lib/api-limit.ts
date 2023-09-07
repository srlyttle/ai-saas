import prismaDb from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { MAX_FREE_COUNTS } from "@/constants";

export const increaseApiLimit = async () => {
  const { userId } = auth();
  if (!userId) {
    return;
  }

  try {
    const userApiLimit = await prismaDb.userApiLimit.findUnique({
      where: { userId },
    });
    if (userApiLimit) {
      await prismaDb.userApiLimit.update({
        where: { userId },
        data: { count: userApiLimit.count + 1 },
      });
      return;
    }

    await prismaDb.userApiLimit.create({
      data: { userId, count: 1 },
    });
  } catch (error) {}
};

export const checkIfFreeApiLimitIsExceeded = async () => {
  const { userId } = auth();
  if (!userId) {
    return true;
  }

  try {
    const apiLimit = await prismaDb.userApiLimit.findUnique({
      where: {
        userId,
      },
    });
    if (!apiLimit || apiLimit.count < MAX_FREE_COUNTS) {
      return false;
    }
    return true;
  } catch (error) {}
};

export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }
  try {
    const apiLimitCount = await prismaDb.userApiLimit.findUnique({
      where: { userId },
    });
    if (apiLimitCount) {
      return apiLimitCount.count;
    }
    return 0;
  } catch (error) {}
};
