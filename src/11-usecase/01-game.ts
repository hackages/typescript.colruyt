// TODO: implement Mutable
/**
 Convert an object with `readonly` properties into a mutable object. Inverse of `Readonly<T>`.

 @example
 ```
 type Foo = {
	readonly a: number;
	readonly b: string;
};
 const mutableFoo: Mutable<Foo> = {a: 1, b: '2'};
 mutableFoo.a = 3;
 ```
 */
export type Mutable<ObjectType> = {
  // For each `Key` in the keys of `ObjectType`, make a mapped type by removing the `readonly` modifier from the property.
  -readonly [KeyType in keyof ObjectType]: ObjectType[KeyType];
};


