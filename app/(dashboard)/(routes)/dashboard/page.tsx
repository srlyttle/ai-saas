"use client";

import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { promptCategories, promptItems, tools } from "@/constants";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { PromptItem } from "@/models";

export default function HomePage() {
  const router = useRouter();
  const [categories, setCategories] =
    React.useState<string[]>(promptCategories);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );
  const [categoryItems, setCategoryItems] = React.useState<null | PromptItem[]>(
    null
  );

  const handleSelectCategory = (category: string) => {
    console.log("cat", category, selectedCategory);
    if (category === selectedCategory) {
      setCategories(promptCategories);
      setCategoryItems(null);
      setSelectedCategory(null);
      return;
    }
    setSelectedCategory(category);
    setCategories(
      promptCategories.filter((categoryItem) => category === categoryItem)
    );
    console.log(promptItems);
    const promptItemsByCategory = promptItems.filter(
      (item) => item.category === category
    );
    setCategoryItems(promptItemsByCategory);
  };

  const handlePromptClick = (id: number) => {
    router.push(`/conversation/${id}`);
  };
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Craft your prompt
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {categories.map((category) => (
          <Badge
            onClick={() => handleSelectCategory(category)}
            key={category}
            className="md:text-xl"
          >
            {category}
          </Badge>
        ))}
        {categoryItems &&
          categoryItems.map((prompt) => (
            <Badge
              variant="outline"
              onClick={() => handlePromptClick(prompt.id)}
              key={prompt.prompt}
              className="md:text-xl"
            >
              {prompt.prompt}
            </Badge>
          ))}
      </div>
    </div>
  );
}
