"use client";

import { feedback } from "@/constants";
import Image from "next/image";
import styles from "@/styles/style";
import FeedbackCard from "./FeedbackCard";

const Testimonials: React.FC = () => (
  <section className="mb-14">
    <h1 className={styles.heading1}>Testimonies</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src={feedback[0].img}
            alt="Main article"
            width={600}
            height={350}
            className="w-full h-auto md:h-[350px] object-cover"
          />
        </div>
        <div className="mt-4">
          <p className="text-sm text-white">{feedback[0].title}</p>
          <h3 className="text-lg text-white font-semibold mt-1">
            {feedback[0].content}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            {feedback[0].name} • {feedback[0].date}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {feedback.slice(1).map((article, index) => (
          <div key={index} className="flex gap-4 items-center">
            <div className="bg-gray-200 rounded-lg overflow-hidden w-[100px] h-[100px] flex-shrink-0">
              <Image
                src={article.img}
                alt={article.title}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-white">{article.title}</p>
              <h4 className="text-sm text-white font-semibold my-2">
                {article.content}
              </h4>
              <p className="text-xs text-gray-400">
                {article.name} • {article.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
