/**
 * Safe inline-Markdown helper for frontmatter strings (answerFirst / FAQ answers).
 * Supports **bold**, `code`, and internal links [text](/path/).
 */
export function stripInlineMarkdown(input: string): string {
  return input
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1');
}

export function renderInlineMarkdown(input: string): string {
  const escaped = input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  return escaped
    .replace(
      /\[([^\]]+)\]\((\/[^)\s]+)\)/g,
      '<a href="$2" class="text-brand underline hover:text-brand-dark font-medium">$1</a>'
    )
    .replace(
      /\*\*([^*]+)\*\*/g,
      '<strong class="font-semibold text-slate-900">$1</strong>'
    )
    .replace(
      /`([^`]+)`/g,
      '<code class="rounded bg-slate-100 px-1 py-0.5 font-mono text-[0.85em] text-slate-800">$1</code>'
    );
}
