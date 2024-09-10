---
title: Qt6 Migration - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---

# Qt6 Migration

Painter version 10.1 moved from Qt5 to Qt6, which introduces breaking changes in Python plugins. The most notable change in the PySide modules going from version 2 to 6.

Plugins created before version 10.1 of Painter will need to be updated to work in newer verisons.

## Pyside changes

---

**Pyside** module name changed, so the import process is now different.

Before:

`from PySide2 import QtWidgets, QtGui`

Now:

`from PySide6 import QtWidgets, QtGui`

---

**QAction** is now under another module.

Before:

`QtWidgets.QAction`

Now:

`QtGui.QAction`

---

**QKeySequence** operator changed from + (plus) to | (pipe) character.

Before:

`QtCore.Qt.CTRL + QtCore.Qt.Key_P`

Now:

`QtCore.Qt.CTRL | QtCore.Qt.Key_P`

---

**exec_()** function has been replaced by **exec()**.

Before:

`dialog.exec_()`

Now:

`dialog.exec()`

---

**setMargin** is replaced by **setContentsMargins**.

Before:

`setMargin(10)`

Now:

`setContentsMargins(10, 10, 10, 10)`

## Further information and guides

More information can be found on the Qt website:

- [Porting Applications from PySide2 to PySide6](https://doc.qt.io/qtforpython-6.5/gettingstarted/porting_from2.html)
- [Changes to Qt Core](https://doc.qt.io/qt-6/qtcore-changes-qt6.html)
- [Porting to Qt 6](https://doc.qt.io/qt-6/portingguide.html)