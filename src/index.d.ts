export type TypedDependencies = Record<string, unknown>

export type TypedContext<T, D extends TypedDependencies> = {
    setup: (dependencies: D) => T
    dependencies: D
}
