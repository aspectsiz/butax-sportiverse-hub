import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import { BlogPost } from "@/types/blog";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { Card, CardFooter, Image, Button } from "@heroui/react";
import { generateTableOfContents, TableOfContentsItem } from "./blogUtils";

interface BlogPostTemplateProps {
  post: BlogPost;
}

const BlogPostTemplate = ({ post }: BlogPostTemplateProps) => {
  const [tableOfContents, setTableOfContents] = useState<
    TableOfContentsItem[]
  >([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const applyIdsToHeadings = useCallback(
    (headings: TableOfContentsItem[]) => {
      if (!contentRef.current) {
        console.log("contentRef.current is null");
        return;
      }

      headings.forEach((heading) => {
        const elements = contentRef.current?.querySelectorAll(
          `h2, h3, h4, h5, h6`
        );

        elements?.forEach((element) => {
          const elementText = element.textContent
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

          if (elementText === heading.id) {
            element.id = heading.id;
            console.log(`Applying id ${heading.id} to element`, element);
          }
        });
      });
    },
    []
  );

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    if (post.content) {
      const toc = generateTableOfContents(post.content, post.title);
      setTableOfContents(toc);
      applyIdsToHeadings(toc);
    }
  }, [post.content, post.title, applyIdsToHeadings]);

  return (
    <article className="py-10 px-4 sm:px-10 grid gap-4 lg:grid-cols-4 md:grid-cols-1">
      {/* İçerik Tablosu (Sol) */}
      <div className="col-span-1">
        <div className="lg:block hidden sticky top-20">
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">İçerik Tablosu</h3>
            <ul>
              {tableOfContents.map((item) => (
                <li key={item.id} className={`ml-${(item.level - 1) * 2} mb-1`}>
                  <a
                    href={`#${item.id}`}
                    className="text-foreground text-sm hover:text-accent transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHeading(item.id);
                    }}
                  >
                    {item.numbering}. {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Ana İçerik (Orta) */}
      <div className="col-span-2">
        <div className="p-4 rounded-lg shadow">
          {/* Başlık */}
          <header className="mb-4">
            <h1 className="text-3xl text-left font-bold mb-2" id="title">
              {post.title}
            </h1>
          </header>

          {/* Hero Görseli */}
          {post.imageUrl && (
            <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}

          {/* İçerik */}
          <div
            className="prose dark:prose-invert max-w-none text-left"
            ref={contentRef}
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>

      {/* Profil Kartı (Sağ) */}
      <div className="col-span-1">
        <div className="sticky top-20 lg:block hidden">
          <div className="">
            <Card isFooterBlurred className="border-none" radius="lg">
              <Image
                alt={post.authorName}
                className="object-cover"
                height={200}
                src={post.authorAvatar}
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{post.authorName}</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  Takip Et
                </Button>
              </CardFooter>
            </Card>
            <time
              dateTime={post.date}
              className="block mt-2 text-sm text-gray-500"
            >
              {format(new Date(post.date), "d MMMM yyyy", { locale: tr })}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostTemplate;