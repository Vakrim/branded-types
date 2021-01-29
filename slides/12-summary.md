
# Table comparison

| Name | Syntax | Tags available in runtime | Additional object allocations | === works? | Primitive methods and operators | Implicit conversion |
 | --- | --- | --- | --- | --- | --- | --- |
| Value Object| `class UserId { __tag: ...`| yes | yes | no | no| no|
| Branded Type| `type UserId = string & { __tag: ...`| no| no| yes| yes | only to primitve|
| Brand only| `type UserId = { __tag: ...` | no| no| yes| no| no|
| Falvored Type | `type UserId = string & { __tag?: ...` | no| no| yes| yes | yes |

# Too hacky?

Nothing in handbook


Something similar in release notes
https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#tagged-union-types

TS definitions
https://github.com/microsoft/TypeScript/blob/master/lib/typescript.d.ts#L28-L33

# Packages?

https://github.com/andnp/SimplyTyped#nominal (2,800 weekly downloads. 340 github stars)

# Should I use it?

Yes! No. Maybe?

```
<====|========|==========|=================|==|=============================>
     JS       TS         TS strict         |  TS with Branded Types
                                           TS with Falvored Types

  simple code                              complex code

  errors                                   errors
   in runtime                               in compile time
```
# More Resources
* https://michalzalecki.com/nominal-typing-in-typescript/
* https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/
