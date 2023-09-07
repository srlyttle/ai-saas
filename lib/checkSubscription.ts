import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prisma";

const DAY_MS = 86_400_000;

export const checkSubscription = async () => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }

  const userSubscription = await prismadb.userSubscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  if (!userSubscription) {
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_MS > Date.now();

  return !!isValid;
};
