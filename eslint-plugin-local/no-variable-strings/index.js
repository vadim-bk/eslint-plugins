module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Flag string literals that exactly match their prop name.',
      category: 'Possible Errors',
      recommended: false,
    },
    schema: [],
  },
  create(context) {
    return {
      JSXAttribute(node) {
        const { name, value } = node;

        if (value && value.type === 'Literal' && typeof value.value === 'string') {
          const attrName = name.name;
          const literalValue = value.value;

          // Skip the specific case of name="name"
          if (attrName === 'name' && literalValue === 'name') {
            return;
          }

          if (literalValue === attrName) {
            context.report({
              node: value,
              message: "Check if you're using a string literal where a variable reference was intended.",
            });
          }
        }
      },
    };
  },
};
