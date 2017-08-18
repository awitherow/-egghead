# organizing larget programs

## packages

packages are like any importable module, except that they can contain modules, or even packages of modules.

nested modules can be accessed via `package.__path__`

This use of `__something__` is called "dunder", so you'd say "dunder init dot py" for `__init__.py`

* packages are generally directories
* modules are generally files

## how does it locate files?

python uses the `sys.path` to list directories. it recursively searches until matches are found or no entries are found, resulting in an import error

### example 1

see [ex-01](/ex01/)

this example seems irrelevant now as the path seems to be smarter at handling its self.

## basic package structure

`path_entry/my_package/__init__.py`

### example 02

see [reader](/reader/)

## submodules

see the `compressed` subfolder within `reader/compressed` and view the repl output on submodule import examples

```python
$ python3
Python 3.6.1 (default, Apr  4 2017, 09:40:21)
[GCC 4.2.1 Compatible Apple LLVM 8.1.0 (clang-802.0.38)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import reader
ex02 imported
>>> import reader.compressed
>>> import reader.compressed.bzipped
>>> import reader.compressed.gzipped
```