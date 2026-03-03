"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

function getRandomProjects(count: number) {
  const shuffled = [...projects].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function FeaturedWork() {
  const [selected, setSelected] = useState(getRandomProjects(3));

  useEffect(() => {
    setSelected(getRandomProjects(3));
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-black/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A glimpse at some of the projects we have delivered
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {selected.map((project) => (
            <Card
              key={project.name}
              className="bg-black/40 border-green-500/20 overflow-hidden group"
            >
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-green-500 text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-1">
                    {project.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 text-white/80 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="text-white border-green-500/30 hover:bg-green-500/10 hover:border-green-500/50 group"
            asChild
          >
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
