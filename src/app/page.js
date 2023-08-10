"use client";

import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { Comment } from "@/components/Comment";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner />
        {/* Comment Example */}
        <Comment />
        {/* Reply Example */}
        <Reply />
      </div>
    </div>
  );
}
