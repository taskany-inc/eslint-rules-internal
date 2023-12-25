import { AST_NODE_TYPES, ESLintUtils } from "@typescript-eslint/utils";

export const preferInterfaceRule = ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    fixable: "code",
    messages: {
      preferInterface: "Use 'interface' instead of 'type' for consistency.",
    },
    docs: {
      description:
        "Prefer an interface declaration over a type literal (type T = { ... })",
      recommended: "recommended",
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      TSTypeAliasDeclaration(node) {
        if (
          !node.typeParameters &&
          node.typeAnnotation &&
          node.typeAnnotation.type === AST_NODE_TYPES.TSTypeLiteral
        ) {
          context.report({
            node,
            messageId: "preferInterface",
            fix(fixer) {
              const typeText = context.getSourceCode().getText(node);
              const interfaceText = typeText
                .replace(/^type/, "interface")
                .replace(/\s*=\s*/, "");
              return fixer.replaceTextRange(node.range, interfaceText);
            },
          });
        }
      },
    };
  },
});
