import 'dart:io';
import 'package:flutter/material.dart';
import 'package:quill_delta/quill_delta.dart';
import 'package:zefyr/zefyr.dart';

class EditorPage extends StatefulWidget {
  const EditorPage({Key? key}) : super(key: key);

  @override
  EditorPageState createState() => EditorPageState();
}

class EditorPageState extends State<EditorPage> {
  /// Allows to control the editor and the document.
  late ZefyrController _controller;

  /// Zefyr editor like any other input field requires a focus node.
  late FocusNode _focusNode;

  @override
  void initState() {
    super.initState();
    // Here we must load the document and pass it to Zefyr controller.
    final document = _loadDocument();
    _controller = ZefyrController(document);
    _focusNode = FocusNode();
  }

  @override
  Widget build(BuildContext context) {
    // Note that the editor requires special `ZefyrScaffold` widget to be
    // one of its parents.
    return Padding(
        padding: const EdgeInsets.all(10.0),
        child: Scaffold(
          backgroundColor: Colors.white,
          body: Column(
            children: [
              Container(
                color: Colors.grey,
                child: ZefyrToolbar(
                  children: [ZefyrToolbar.basic(controller: _controller)],
                ),
              ),
              ZefyrEditor(
                padding: const EdgeInsets.all(16),
                controller: _controller,
                focusNode: _focusNode,
              ),
            ],
          ),
        ));
  }

  /// Loads the document to be edited in Zefyr.
  NotusDocument _loadDocument() {
    // For simplicity we hardcode a simple document with one line of text
    // saying "Zefyr Quick Start".
    // (Note that delta must always end with newline.)
    final Delta delta = Delta()..insert("Notes...\n");
    return NotusDocument.fromDelta(delta);
  }
}
