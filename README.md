Dependency free micro framework for dependency injection

## Usage

```ts
import { useFramework } from "@mono/framework";

const framework = useFramework();

define("foo", () => "bar");

const foo = framework.get("foo");