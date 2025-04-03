import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

const Page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! }),
  ]);

  // const userInterviews = await getInterviewsByUserId(user?.id!);
  // const latestInterviews = await getLatestInterviews({ userId: user?.id! });

  const hasPastInterviews = userInterviews?.length ?? 0 > 0;
  const hasUpcomingInterviews = latestInterviews?.length ?? 0 > 0;
  return (
    <>
      <section className="card-cta">
        {" "}
        {/* cta means call to action*/}
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            Increase your Coding Problem Solving by Learning Python with
            AI-Powered personalized feedbacks
          </h2>

          <p className="text-lg">
            Practice on real python projects challenges & get instant feedbacks
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start Learning</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Python Lessons</h2>

        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>You haven&apos;t taken any Lessons yet</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Start a Lesson</h2>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>There are no new Interviews available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
