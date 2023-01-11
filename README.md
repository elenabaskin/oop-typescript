# Typescript Terms

## Static, Protected, Private

### By default, all classes and objects are public. To allow certain portions of code to not be public, modifiers like private and protected, as well as static members.

### Private refers to a member that can't be accessed outside its containing class. even child classes can't access properties with private modifiers. This is useful for highly sensitive information like social security numbers or bank account info.

### Protected is a property modifier that can't be accessed outside the containing class, but can be accessed within classes derived from the parent. For example, if I had property "flavor" protected in class Drink and then created class Milk extending Drink, I would still be able to access name. That would not happen if I were to use private instead of protected. So protected is the most useful when you have important information that needs to be secure but accessible to anything that could inherit the parent class.

### Static refers to properties of a class that are only visible and belong to the class itself, not throughout the instance. They can use private and protected modifiers and can be inherited. It's good to use a static property when a property should never change or to check a constraint from another class.
