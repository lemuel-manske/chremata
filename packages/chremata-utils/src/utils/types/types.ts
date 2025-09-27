/**
 * Represents a type that can be an enum or a string literal type of that enum.
 *
 * @example
 *
 * enum ExampleEnum {
 *   VALUE1 = 'value1',
 *   VALUE2 = 'value2',
 *   VALUE3 = 'value3',
 * }
 *
 * type OutputType = EnumOrStringLiteralTypes<ExampleEnum>;
 *
 * let example: OutputType;
 *
 * // valid usage
 * example = 'value1';
 * example = ExampleEnum.VALUE1;
 */
export type EnumOrStringLiteralTypes<T> = `${T & string}` | T;

/**
 * Represents a type that includes enum values or string literal types, including specific values.
 * @template T - The enum type.
 * @template IncludeValues - The values to be included to the resulting type.
 *
 * @example
 *
 * enum ExampleEnum {
 *   VALUE1 = 'value1',
 *   VALUE2 = 'value2',
 *   VALUE3 = 'value3',
 * }
 * type ExampleType = EnumOrStringLiteralTypesInclude<ExampleEnum, 'value1' | ExampleEnum.VALUE3>;
 *
 * let example: ExampleType;
 *
 * // Assigning valid values
 * example = 'value1'; // valid
 * example = ExampleEnum.VALUE3; // valid
 *
 * // Assigning invalid values
 * example = 'value2'; // Error: Type '"value2"' is not assignable to type 'ExampleType'.
 * example = ExampleEnum.VALUE2; // Error: Type 'Status.VALUE2' is not assignable to type 'ExampleType'.
 */
export type EnumOrStringLiteralTypesInclude<
  T,
  IncludeValues extends `${T & string}` | T,
> = T extends string
  ? T extends IncludeValues
    ? `${T & string}` | T
    : never
  : never;

/**
 * Extracts keys from an object whose corresponding values are optional (i.e., `undefined` is assignable to them).
 *
 * @example
 *
 * interface ExampleInterface {
 *   foo?: string;
 *   fee?: boolean;
 *   foobar: number;
 *   baz: boolean;
 * }
 *
 * type AllOptionalKeys = Optionals<ExampleInterface>; // output keys will be `foo` and `fee`
 */
export type Optionals<T> = {
  [K in keyof T]: undefined extends T[K] ? K : never;
}[keyof T];

/**
 * Represents a user event callback function.
 *
 * @example
 *
 * function handleClick(): UserEvent {
 *   console.log('Button clicked!');
 * }
 */
export type UserEvent = () => void;

type Id = string;

/**
 * Represents a type that includes an `id` property of type `Id`.
 *
 * @template T - The base type to be extended with the `id` property.
 *
 * @example
 *
 * interface Example {
 *   name: string;
 *   age: number;
 * }
 *
 * type IdentifiableExample = Identifiable<Example>;
 *
 * const example: IdentifiableExample = {
 *   id: '123',
 *   name: 'John Doe',
 *   age: 30,
 * };
 */
export type Identifiable<T> = T & { id: Id };

/**
 * Represents an HTML element `id`.
 */
export type ElementId = string;

/**
 * Represents a `Comparable` decorator, used to comparing a given {@link T}
 * from {@link T a} to {@link T b}.
 */
export type Comparable<T = unknown> = (a: T, b: T) => number;

/**
 * Omits `children` from a given {@link T type}.
 */
export type NoChildren<T extends { children: unknown }> = Omit<T, 'children'>;
