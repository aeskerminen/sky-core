import 'package:flutter/material.dart';
import 'package:flutter_quill/flutter_quill.dart';

class TextEditor extends StatefulWidget {
  const TextEditor({Key? key}) : super(key: key);

  @override
  State<TextEditor> createState() => _TextEditorState();
}

QuillController _controller = QuillController.basic();

class _TextEditorState extends State<TextEditor> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Column(
      children: [
        QuillToolbar.basic(controller: _controller),
        Expanded(
          child: Container(
            child: QuillEditor.basic(
              controller: _controller,
              readOnly: false, // true for view only mode
            ),
          ),
        )
      ],
    ));
  }
}
