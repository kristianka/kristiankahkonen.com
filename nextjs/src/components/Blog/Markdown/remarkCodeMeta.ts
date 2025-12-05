import { visit } from "unist-util-visit";
import type { Root } from "mdast";

/**
 * Remark plugin to preserve the meta string from fenced code blocks.
 *
 * In markdown, you can write:
 * ```typescript filename="example.ts"
 * const x = 1;
 * ```
 *
 * This plugin ensures the meta string is passed to the code component
 * via hProperties which gets converted to HTML attributes.
 */
export function remarkCodeMeta() {
    return (tree: Root) => {
        visit(tree, "code", (node) => {
            if (node.meta) {
                // Store the meta string in hProperties so it becomes a data attribute
                const nodeData = (node.data || {}) as Record<string, unknown>;
                nodeData.hProperties = (nodeData.hProperties as Record<string, string>) || {};
                (nodeData.hProperties as Record<string, string>)["data-meta"] = node.meta;
                node.data = nodeData;
            }
        });
    };
}
