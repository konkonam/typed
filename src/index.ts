import type { TypedDependencies, TypedContext } from '../types'

export const useTyped = () => {
    const prepare = <D extends TypedDependencies>(dependencies: D) => {
        return <T>(
            setup: (dependencies: D) => T,
        ): T & { _context: TypedContext<T, D> } => {
            return {
                ...setup(dependencies),
                _context: { setup, dependencies },
            }
        }
    }

    return {
        typedFn: <T>(
            setup: (args: { prepare: typeof prepare }) => T,
        ) => setup({ prepare })
    }
}

