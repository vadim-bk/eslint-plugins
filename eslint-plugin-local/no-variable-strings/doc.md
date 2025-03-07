# no-variable-strings

This rule flags potential mistakes where a string literal exactly matches its prop name, which might indicate that a variable reference was intended instead of a string literal.

## Rule Details

When writing React components, it's a common mistake to accidentally use a string literal when you actually meant to reference a variable. This is particularly error-prone when the variable name matches the string you want to pass.

### ❌ Incorrect

```jsx
// The developer probably meant to reference the 'title' variable
const title = "My Page Title";
return <Header title="title" />;

// The 'id' prop probably should reference the id variable
const id = "123";
return <Input id="id" />;
```

### ✅ Correct

```jsx
// Referencing the variable as intended
const title = "My Page Title";
return <Header title={title} />;

// Using a different string literal that doesn't match the prop name
return <Header title="Page Title" />;

// Using the variable reference correctly
const id = "123";
return <Input id={id} />;

// Special case: Using "name" as a string literal for the name prop is allowed
return <Input name="name" />;
```

## When Not To Use It

You might want to disable this rule if:

1. You frequently use prop values that intentionally match their prop names
2. You're working on a legacy codebase where this pattern is common and fixing all instances would be too risky

## Rationale

This rule helps catch a specific type of bug where developers accidentally use string literals instead of variable references. The mistake is especially common because:

1. The syntax difference is subtle (`prop="value"` vs `prop={value}`)
2. Both syntaxes are valid JSX
3. The error often goes unnoticed during testing if the string literal happens to match what you're expecting to see

The rule makes a special exception for `name="name"` as this is a common valid use case, particularly in form elements.
