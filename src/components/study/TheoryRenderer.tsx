'use client';

import React from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Lightbulb,
  Sparkles,
  ArrowRight,
  BookOpen
} from 'lucide-react';

/**
 * Replaces raw LaTeX commands and math notation with clean, legible Unicode symbols.
 */
export function cleanMathSymbols(str: string): string {
  if (!str) return '';
  return str
    .replace(/\\forall/g, '∀')
    .replace(/\\exists/g, '∃')
    .replace(/\\to\b/g, '→')
    .replace(/\\rightarrow/g, '→')
    .replace(/\\leftarrow/g, '←')
    .replace(/\\leftrightarrow/g, '↔')
    .replace(/\\implies/g, '⇒')
    .replace(/\\iff/g, '⇔')
    .replace(/\\land\b/g, '∧')
    .replace(/\\lor\b/g, '∨')
    .replace(/\\neg\b/g, '¬')
    .replace(/\\equiv/g, '≡')
    .replace(/\\ne\b|\\neq/g, '≠')
    .replace(/\\le\b|\\leq/g, '≤')
    .replace(/\\ge\b|\\geq/g, '≥')
    .replace(/\\in\b/g, '∈')
    .replace(/\\notin/g, '∉')
    .replace(/\\subset\b/g, '⊂')
    .replace(/\\subseteq/g, '⊆')
    .replace(/\\cup\b/g, '∪')
    .replace(/\\cap\b/g, '∩')
    .replace(/\\emptyset/g, '∅')
    .replace(/\\infty/g, '∞')
    .replace(/\\sum/g, '∑')
    .replace(/\\prod/g, '∏')
    .replace(/\\pm/g, '±')
    .replace(/\\times/g, '×')
    .replace(/\\cdot/g, '·')
    .replace(/\\approx/g, '≈')
    .replace(/\\sim/g, '∼')
    .replace(/\\Theta/g, 'Θ')
    .replace(/\\Omega/g, 'Ω')
    .replace(/\\Sigma/g, 'Σ')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ')
    .replace(/\\delta/g, 'δ')
    .replace(/\\epsilon/g, 'ε')
    .replace(/\\lambda/g, 'λ')
    .replace(/\\chi/g, 'χ')
    .replace(/\\pi/g, 'π')
    .replace(/\\sigma/g, 'σ')
    .replace(/\\tau/g, 'τ')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
    .replace(/\\binom\{([^}]+)\}\{([^}]+)\}/g, 'C($1, $2)')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\textbf\{([^}]+)\}/g, '$1')
    .replace(/\\overline\{([^}]+)\}/g, '¬($1)')
    .replace(/\\\{/g, '{')
    .replace(/\\\}/g, '}')
    .replace(/\\/g, '');
}

interface FormattedTextProps {
  text: string;
  className?: string;
}

/**
 * Tokenizes and renders inline text with formatted bold, italics, code, and math symbols.
 */
export const FormattedText: React.FC<FormattedTextProps> = ({ text, className = '' }) => {
  if (!text) return null;

  // Pattern matches:
  // 1. Display math: $$...$$
  // 2. Inline math: $...$
  // 3. Bold: **...**
  // 4. Code: `...`
  // 5. Italic with quotes or asterisks: *"..."* or *...*
  const pattern = /(\$\$[^\$]+\$\$|\$[^$]+\$|\*\*[^*]+\*\*|`[^`]+`|\*"[^"]+"\*|\*[^*]+\*)/g;
  const tokens: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const plain = text.slice(lastIndex, match.index);
      tokens.push(
        <span key={`text-${lastIndex}`}>{cleanMathSymbols(plain)}</span>
      );
    }

    const raw = match[0];
    const key = `token-${match.index}`;

    if (raw.startsWith('$$') && raw.endsWith('$$')) {
      const mathContent = cleanMathSymbols(raw.slice(2, -2)).replace(/\$/g, '');
      tokens.push(
        <span
          key={key}
          className="font-mono text-cyan-300 font-bold bg-slate-950/80 px-2 py-0.5 rounded-lg border border-slate-800 inline-block text-xs sm:text-sm my-0.5 shadow-inner"
        >
          {mathContent}
        </span>
      );
    } else if (raw.startsWith('$') && raw.endsWith('$')) {
      const mathContent = cleanMathSymbols(raw.slice(1, -1)).replace(/\$/g, '');
      tokens.push(
        <span
          key={key}
          className="font-mono text-cyan-300 font-semibold bg-slate-950/70 px-1.5 py-0.5 rounded border border-slate-800/80 inline-block text-[11px] sm:text-xs mx-0.5"
        >
          {mathContent}
        </span>
      );
    } else if (raw.startsWith('**') && raw.endsWith('**')) {
      const boldContent = cleanMathSymbols(raw.slice(2, -2)).replace(/\$/g, '');
      tokens.push(
        <strong key={key} className="text-white font-bold">
          {boldContent}
        </strong>
      );
    } else if (raw.startsWith('`') && raw.endsWith('`')) {
      tokens.push(
        <code
          key={key}
          className="px-1.5 py-0.5 rounded bg-slate-950 text-emerald-300 font-mono text-xs border border-slate-800"
        >
          {raw.slice(1, -1)}
        </code>
      );
    } else if (raw.startsWith('*') && raw.endsWith('*')) {
      // Handles *"Term"* or *Term*
      const cleanItalic = raw.replace(/^\*["']?/, '').replace(/["']?\*$/, '');
      tokens.push(
        <span
          key={key}
          className="text-blue-300 font-medium italic"
        >
          {cleanMathSymbols(cleanItalic).replace(/\$/g, '')}
        </span>
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push(
      <span key={`text-end`}>
        {cleanMathSymbols(text.slice(lastIndex))}
      </span>
    );
  }

  return <span className={className}>{tokens}</span>;
};

interface TableData {
  headers: string[];
  alignments: ('left' | 'center' | 'right')[];
  rows: string[][];
}

interface NumberedItem {
  number: string;
  term?: string;
  body: string;
  subBullets: string[];
}

interface BulletItem {
  isAlert: boolean;
  alertLabel?: string;
  term?: string;
  body: string;
  subBullets: string[];
}

interface SectionBlock {
  type: 'numbered' | 'bullet' | 'table' | 'display-math' | 'paragraph';
  numbered?: NumberedItem;
  bullet?: BulletItem;
  table?: TableData;
  mathFormula?: string;
  paragraphText?: string;
}

interface TheorySection {
  title: string;
  blocks: SectionBlock[];
}

function parseTableLines(lines: string[]): TableData | null {
  if (lines.length < 2) return null;

  const parseRow = (line: string): string[] => {
    const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '');
    return trimmed.split('|').map(c => c.trim());
  };

  const headers = parseRow(lines[0]);
  const alignRow = parseRow(lines[1]);
  const alignments: ('left' | 'center' | 'right')[] = alignRow.map(col => {
    if (col.startsWith(':') && col.endsWith(':')) return 'center';
    if (col.endsWith(':')) return 'right';
    return 'left';
  });

  const rows = lines.slice(2).map(parseRow);
  return { headers, alignments, rows };
}

function extractTermAndDef(str: string): { term?: string; definition: string } {
  // Matches:
  // **Term**: Rest
  // *"Term"*: Rest
  // *Term*: Rest
  // \textbf{Term}: Rest
  const termMatch = str.match(
    /^(\*\*([^*]+)\*\*|\*"([^"]+)"\*|\*([^*]+)\*|\\textbf\{([^}]+)\}):?\s*(.*)$/
  );
  if (termMatch) {
    const term = termMatch[2] || termMatch[3] || termMatch[4] || termMatch[5];
    const def = termMatch[6] || '';
    return { term: term.trim(), definition: def.trim() };
  }
  return { definition: str };
}

function checkAlertItem(str: string): { isAlert: boolean; label?: string; content: string } {
  const alertMatch = str.match(/^(Common error|Watch out|Caution|Pitfall|Important|Note):\s*(.*)$/i);
  if (alertMatch) {
    return {
      isAlert: true,
      label: alertMatch[1],
      content: alertMatch[2]
    };
  }
  return { isAlert: false, content: str };
}

function parseTheoryBlocks(rawContent: string): TheorySection[] {
  const lines = rawContent.replace(/\r\n/g, '\n').split('\n');
  const sections: TheorySection[] = [];
  let currentSection: TheorySection = { title: '', blocks: [] };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // 1. Check for Section Heading (### Heading)
    if (trimmed.startsWith('### ')) {
      if (currentSection.title || currentSection.blocks.length > 0) {
        sections.push(currentSection);
      }
      currentSection = {
        title: trimmed.replace(/^###\s+/, '').trim(),
        blocks: []
      };
      i++;
      continue;
    }

    // 2. Check for Table (| col | col |)
    if (trimmed.startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      const tableData = parseTableLines(tableLines);
      if (tableData) {
        currentSection.blocks.push({
          type: 'table',
          table: tableData
        });
      }
      continue;
    }

    // 3. Check for Display Math ($$...$$)
    if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length > 4) {
      currentSection.blocks.push({
        type: 'display-math',
        mathFormula: trimmed.slice(2, -2).trim()
      });
      i++;
      continue;
    }

    // 4. Check for Numbered item (1. **Term**: ...)
    const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (numMatch && !line.startsWith('  ')) {
      const num = numMatch[1];
      const rawBody = numMatch[2];
      const subBullets: string[] = [];
      i++;

      // Collect any indented sub-bullets
      while (i < lines.length && (lines[i].startsWith('  ') || lines[i].startsWith('\t'))) {
        const subTrim = lines[i].trim();
        if (subTrim.startsWith('- ') || subTrim.startsWith('* ')) {
          subBullets.push(subTrim.slice(2).trim());
        } else if (subTrim) {
          subBullets.push(subTrim);
        }
        i++;
      }

      const { term, definition } = extractTermAndDef(rawBody);

      currentSection.blocks.push({
        type: 'numbered',
        numbered: {
          number: num,
          term,
          body: definition,
          subBullets
        }
      });
      continue;
    }

    // 5. Check for Bullet item (- **Term**: ... or - Text)
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const rawBody = trimmed.slice(2).trim();
      const subBullets: string[] = [];
      i++;

      // Collect any indented sub-bullets
      while (i < lines.length && (lines[i].startsWith('  ') || lines[i].startsWith('\t'))) {
        const subTrim = lines[i].trim();
        if (subTrim.startsWith('- ') || subTrim.startsWith('* ')) {
          subBullets.push(subTrim.slice(2).trim());
        } else if (subTrim) {
          subBullets.push(subTrim);
        }
        i++;
      }

      const alertCheck = checkAlertItem(rawBody);
      if (alertCheck.isAlert) {
        currentSection.blocks.push({
          type: 'bullet',
          bullet: {
            isAlert: true,
            alertLabel: alertCheck.label,
            body: alertCheck.content,
            subBullets
          }
        });
      } else {
        const { term, definition } = extractTermAndDef(rawBody);
        currentSection.blocks.push({
          type: 'bullet',
          bullet: {
            isAlert: false,
            term,
            body: definition,
            subBullets
          }
        });
      }
      continue;
    }

    // 6. Normal paragraph text
    currentSection.blocks.push({
      type: 'paragraph',
      paragraphText: trimmed
    });
    i++;
  }

  if (currentSection.title || currentSection.blocks.length > 0) {
    sections.push(currentSection);
  }

  return sections;
}

interface TheoryRendererProps {
  content: string;
}

export const TheoryRenderer: React.FC<TheoryRendererProps> = ({ content }) => {
  const sections = React.useMemo(() => parseTheoryBlocks(content), [content]);

  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {sections.map((section, sIdx) => (
        <div
          key={sIdx}
          className="p-5 sm:p-7 rounded-3xl bg-slate-900/85 border border-slate-800/90 space-y-4 shadow-lg backdrop-blur-sm"
        >
          {section.title && (
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="w-1.5 h-5 rounded-full bg-gradient-to-b from-blue-400 to-indigo-500 shrink-0" />
              <h4 className="font-black text-base sm:text-lg text-white tracking-tight flex items-center gap-2">
                <span>{section.title}</span>
              </h4>
            </div>
          )}

          <div className="space-y-3">
            {section.blocks.map((block, bIdx) => {
              if (block.type === 'numbered' && block.numbered) {
                const item = block.numbered;
                const formattedNum = item.number.padStart(2, '0');

                return (
                  <div
                    key={bIdx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-blue-500/30 transition-all flex items-start gap-3.5 group"
                  >
                    <div className="shrink-0 px-2 py-1 rounded-lg bg-blue-950/80 border border-blue-800/60 font-mono font-bold text-xs text-blue-300 shadow-sm mt-0.5">
                      {formattedNum}
                    </div>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      {item.term ? (
                        <div>
                          <span className="font-bold text-sm sm:text-base text-white group-hover:text-blue-300 transition-colors">
                            <FormattedText text={item.term} />
                          </span>
                          <span className="text-slate-400 font-bold mx-1.5">:</span>
                          <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <FormattedText text={item.body} />
                          </span>
                        </div>
                      ) : (
                        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <FormattedText text={item.body} />
                        </div>
                      )}

                      {item.subBullets && item.subBullets.length > 0 && (
                        <ul className="mt-2 space-y-1.5 pt-2 border-t border-slate-800/60 pl-2">
                          {item.subBullets.map((sub, sIndex) => (
                            <li
                              key={sIndex}
                              className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed"
                            >
                              <span className="text-blue-400 font-bold shrink-0">↳</span>
                              <span><FormattedText text={sub} /></span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              }

              if (block.type === 'bullet' && block.bullet) {
                const item = block.bullet;

                // Callout alert item
                if (item.isAlert) {
                  return (
                    <div
                      key={bIdx}
                      className="p-3.5 sm:p-4 rounded-2xl bg-amber-950/20 border border-amber-500/40 text-amber-200 text-xs sm:text-sm flex items-start gap-3 shadow-inner"
                    >
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div className="leading-relaxed">
                        <span className="font-bold text-amber-300 mr-1.5">
                          {item.alertLabel || 'Warning'}:
                        </span>
                        <span><FormattedText text={item.body} /></span>
                        {item.subBullets && item.subBullets.length > 0 && (
                          <ul className="mt-2 space-y-1 pl-4 list-disc text-amber-200/80">
                            {item.subBullets.map((sub, sIndex) => (
                              <li key={sIndex}><FormattedText text={sub} /></li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                }

                // Regular bullet item with term
                return (
                  <div
                    key={bIdx}
                    className="p-3 sm:p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/70 hover:border-slate-700/80 transition flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <div className="space-y-1 flex-1 min-w-0">
                      {item.term ? (
                        <div>
                          <span className="font-bold text-xs sm:text-sm text-blue-200">
                            <FormattedText text={item.term} />
                          </span>
                          <span className="text-slate-400 font-bold mx-1.5">:</span>
                          <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <FormattedText text={item.body} />
                          </span>
                        </div>
                      ) : (
                        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <FormattedText text={item.body} />
                        </div>
                      )}

                      {item.subBullets && item.subBullets.length > 0 && (
                        <ul className="mt-2 space-y-1 pl-2 border-t border-slate-800/50 pt-1.5">
                          {item.subBullets.map((sub, sIndex) => (
                            <li
                              key={sIndex}
                              className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed"
                            >
                              <span className="text-slate-500">•</span>
                              <span><FormattedText text={sub} /></span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              }

              if (block.type === 'table' && block.table) {
                const table = block.table;
                return (
                  <div
                    key={bIdx}
                    className="my-3 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80 shadow-md"
                  >
                    <table className="w-full text-left text-xs sm:text-sm text-slate-200 border-collapse">
                      <thead className="bg-slate-900/90 text-slate-300 uppercase tracking-wider text-[11px] font-bold border-b border-slate-800">
                        <tr>
                          {table.headers.map((h, i) => (
                            <th
                              key={i}
                              className={`px-4 py-3 whitespace-nowrap ${
                                table.alignments[i] === 'center' ? 'text-center' : 'text-left'
                              }`}
                            >
                              <FormattedText text={h} />
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 font-sans">
                        {table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-900/50 transition">
                            {row.map((cell, cIdx) => {
                              const isCenter = table.alignments[cIdx] === 'center';
                              const trimmedCell = cell.trim();

                              let cellContent: React.ReactNode = <FormattedText text={cell} />;
                              if (trimmedCell === 'D') {
                                cellContent = (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-950/90 text-emerald-300 border border-emerald-700/60 font-bold text-xs">
                                    D (Decidable)
                                  </span>
                                );
                              } else if (trimmedCell === 'U') {
                                cellContent = (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-rose-950/90 text-rose-300 border border-rose-700/60 font-bold text-xs">
                                    U (Undecidable)
                                  </span>
                                );
                              } else if (trimmedCell === '—') {
                                cellContent = <span className="text-slate-600 font-bold">—</span>;
                              }

                              return (
                                <td
                                  key={cIdx}
                                  className={`px-4 py-2.5 ${
                                    isCenter ? 'text-center font-mono' : 'text-left'
                                  }`}
                                >
                                  {cellContent}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }

              if (block.type === 'display-math' && block.mathFormula) {
                return (
                  <div
                    key={bIdx}
                    className="my-3 p-4 rounded-2xl bg-slate-950 border border-indigo-900/40 text-center font-mono text-xs sm:text-sm text-cyan-300 font-bold tracking-wide overflow-x-auto shadow-inner"
                  >
                    {cleanMathSymbols(block.mathFormula).replace(/\$/g, '')}
                  </div>
                );
              }

              if (block.type === 'paragraph' && block.paragraphText) {
                return (
                  <p key={bIdx} className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <FormattedText text={block.paragraphText} />
                  </p>
                );
              }

              return null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
