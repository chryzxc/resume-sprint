"use client";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const splittedSegments = pathname.split("/");
  console.log("splittedSegments", splittedSegments);

  const memoizedSegments = splittedSegments.map((segment, idx) => (
    <BreadcrumbItem
      href={segment ? `/${segment}` : "/"}
      key={idx}
      className="capitalize"
    >
      {segment ? segment.replaceAll("-", " ") : "Home"}
    </BreadcrumbItem>
  ));

  return <Breadcrumbs>{memoizedSegments}</Breadcrumbs>;
}
