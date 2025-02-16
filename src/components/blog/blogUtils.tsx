export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
  numbering: string;
}

export const generateTableOfContents = (
  content: string,
  title: string
): TableOfContentsItem[] => {
  const headings = Array.from(
    content.matchAll(/<h(?<level>[1-6])(?:.*?)>(?<text>.*?)<\/h\d>/g) || []
  );
  const toc: TableOfContentsItem[] = [];

  // Başlığı ekle
  toc.push({
    id: "title",
    text: title,
    level: 1,
    numbering: "1",
  });

  let numbering: number[] = [];
  let currentNumber = 1;

  headings.forEach((match) => {
    const level = Number(match.groups?.level || 1) + 1;
    const text = match.groups?.text || "";
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    while (numbering.length < level - 2) {
      numbering.push(1);
    }
    while (numbering.length > level - 2) {
      numbering.pop();
    }

    if (numbering.length > 0) {
      numbering[numbering.length - 1] =
        (numbering[numbering.length - 1] || 0) + 1;
    } else {
      numbering.push(currentNumber++);
    }

    const numberingString = numbering.join(".");

    toc.push({
      id,
      text,
      level,
      numbering: numberingString,
    });
  });

  return toc;
};