"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "@/lib/data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id as string));

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-32">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-2xl text-white">Post not found</h1>
          <Button asChild className="mt-4">
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 hero-gradient animate-glow" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-green-500 hover:bg-green-600">
              {post.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.publishedAt}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-lg text-gray-300">By {post.author.name}</p>
              <p className="text-sm text-gray-400">{post.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-black/40">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-video mb-12 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="prose prose-invert max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('###')) {
                return <h3 key={index} className="text-xl font-bold text-white mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('-')) {
                return <li key={index} className="text-gray-300 ml-4">{paragraph.replace('- ', '')}</li>;
              }
              if (paragraph.trim()) {
                return <p key={index} className="text-gray-300 mb-4">{paragraph}</p>;
              }
              return null;
            })}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-green-500/20 text-white"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-black/60">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="bg-black/40 border-green-500/20 overflow-hidden group"
                >
                  <Link href={`/blog/${relatedPost.id}`}>
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <Badge
                        className="absolute top-4 left-4 bg-green-500 hover:bg-green-600"
                        variant="secondary"
                      >
                        {relatedPost.category}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <p className="text-white text-sm font-medium">{relatedPost.author.name}</p>
                        <p className="text-gray-400 text-xs">{relatedPost.author.role}</p>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-500 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{relatedPost.publishedAt}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}