"use client";
import { cn } from "@/utils/cn";
import { CardStack } from "./ui/card-stack";

export function CardStackDemo() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-[30rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] w-full pt-0 lg:pt-20">
      <div className="lg:w-1/2 lg:mr-8 lg:pl-40 flex justify-center lg:justify-start ">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-8 mt-10">
            Our Exceptional Team
          </h2>
          <h3 className="text-lg mb-8 hidden lg:block">
            Meet the talented individuals driving our success" implies an
            invitation or introduction to the noteworthy members of a team or
            organization who play a crucial role in achieving their objectives
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <CardStack items={CARDS} />
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-blue-500 dark:bg-blue-700/[0.2] dark:text-blue-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Maurice Thomas",
    designation: "Chairman and CEO of Morgana",
    content: (
      <p>
        Maurice T., a Texas Tech alumnus with an MBA and a Master of Science in
        Data Science, brings <Highlight> over 5 years </Highlight> of experience
        in building Data Science systems for both public and private sector
        clients.
      </p>
    ),
  },
  {
    id: 1,
    name: "Elliot Arledge",
    designation: "Chief Operations Officer of Morgana",
    content: (
      <p>
        Elliot A. has <Highlight> over 5 years </Highlight> of experience
        developing custom software and machine learning solutions using
        JavaScript, Python, AWS Cloud Computing, ReactJS, NodeJS, PyTorch, and
        Docker.
      </p>
    ),
  },
  {
    id: 2,
    name: "Max Dublenko",
    designation: "Chief Technology Officer of Morgana",
    content: (
      <p>
        With <Highlight> over 10 years </Highlight> of experience, Max D.
        specializes in developing custom software and machine learning
        solutions, delivering innovative solutions to various industries.
      </p>
    ),
  },
];

export default CardStackDemo;
