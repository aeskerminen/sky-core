import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class TextEditor extends StatefulWidget {
  @override
  State<TextEditor> createState() => _TextEditorState();
}

class _TextEditorState extends State<TextEditor> {
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Text("Text editor..."),
    );
  }
}
